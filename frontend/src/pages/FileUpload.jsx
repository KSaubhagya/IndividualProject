import { useState, useEffect } from "react";
import { useAuthContext } from "@asgardeo/auth-react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Snackbar,
  Alert,
  IconButton,
  CircularProgress,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";
import TextOptions from "../components/TextOptions";
import { API_URLS, CLOUDINARY } from "../config/constants";

const API = API_URLS.FILES;
const CLOUD_NAME = CLOUDINARY.CLOUD_NAME;
const UPLOAD_PRESET = CLOUDINARY.UPLOAD_PRESET;
const CLOUDINARY_URL = CLOUDINARY.UPLOAD_URL(CLOUD_NAME);

const FileUpload = () => {
  const { state, getAccessToken } = useAuthContext();
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [processedFileUrl, setProcessedFileUrl] = useState(null);
  const [originalFileUrl, setOriginalFileUrl] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [options, setOptions] = useState({});

  useEffect(() => {
    console.log("Auth state:", state);
    if (!state.isLoading) {
      if (!state.isAuthenticated) {
        console.log("Not authenticated, redirecting...");
        navigate("/");
      } else {
        console.log("Authenticated, setting loading to false");
        setIsLoading(false);
      }
    }
  }, [state, navigate]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log("Selected file:", selectedFile);

    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
      const preview = URL.createObjectURL(selectedFile);
      setPreviewUrl(preview);
    }
  };

  const uploadToCloudinary = async (file, folder) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);
    formData.append("folder", folder);

    const response = await fetch(CLOUDINARY_URL, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Cloudinary upload failed");
    }

    const data = await response.json();
    return data.secure_url;
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file before uploading.");
      return;
    }

    try {
      setUploading(true);
      const token = await getAccessToken();

      // Send file to backend
      const formData = new FormData();
      formData.append("file", file);
      formData.append("text_size", options.textSize || 16);
      formData.append("spacing", options.spacing || false);
      formData.append("font", options.font || "Arial");
      formData.append("theme_color", options.themeColor || "#0000ff");

      const processResponse = await axios.post(`${API.PROCESS}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Backend processing result:", processResponse.data);

      if (processResponse.data.success) {
        const { file_id, original_filename } = processResponse.data;

        console.log("Uploading files to Cloudinary...");

        // Upload original file to Cloudinary
        const originalUrl = await uploadToCloudinary(file, "originals");

        // Create processed file
        const processedFile = new File(
          [file],
          `processed_${original_filename}`,
          { type: "application/pdf" }
        );
        const processedUrl = await uploadToCloudinary(
          processedFile,
          "processed"
        );

        console.log("Cloudinary upload successful:", {
          originalUrl,
          processedUrl,
        });

        // Save Cloudinary URLs to db
        const saveResponse = await axios.post(
          `${API.SAVE_CLOUDINARY_URLS}`,
          {
            file_id: file_id,
            original_filename: original_filename,
            original_url: originalUrl,
            processed_url: processedUrl,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (saveResponse.data.success) {
          setSuccess(true);
          setFile(null);
          setFileName("");
          setPreviewUrl(null);

          // Set the URLs for download
          setOriginalFileUrl(originalUrl);
          setProcessedFileUrl(API.DOWNLOAD(file_id));
        }
      }
    } catch (err) {
      console.error("Upload error:", err);
      setError(
        err.response?.data?.detail ||
          err.message ||
          "Upload failed. Please try again."
      );
      if (err.response?.status === 401) {
        navigate("/");
      }
    } finally {
      setUploading(false);
    }
  };

  {
    processedFileUrl && (
      <Box mt={2}>
        <Button
          variant="outlined"
          sx={{
            borderRadius: "30px",
            mr: 2,
            color: "#9b88ff",
            borderColor: "#9b88ff",
            "&:hover": { borderColor: "#7748ff", color: "#7748ff" },
          }}
          onClick={() => window.open(originalFileUrl, "_blank")}
        >
          Download Original
        </Button>
        <Button
          variant="outlined"
          sx={{
            borderRadius: "30px",
            color: "#9b88ff",
            borderColor: "#9b88ff",
            "&:hover": { borderColor: "#7748ff", color: "#7748ff" },
          }}
          onClick={async () => {
            try {
              const token = await getAccessToken();
              const response = await axios.get(processedFileUrl, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
                responseType: "blob",
              });

              const blob = new Blob([response.data], {
                type: "application/pdf",
              });
              const url = window.URL.createObjectURL(blob);
              const link = document.createElement("a");
              link.href = url;
              link.download = `processed_${fileName}.pdf`;
              document.body.appendChild(link);
              link.click();
              link.remove();
              window.URL.revokeObjectURL(url);
            } catch (err) {
              setError("Failed to download processed file.");
            }
          }}
        >
          Download Processed
        </Button>
      </Box>
    );
  }

  if (state.isLoading || isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress color="secondary" />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#1a1528",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "80px",
      }}
    >
      <TextOptions onApplyOptions={(opts) => setOptions(opts)} />
      <Box
        sx={{
          bgcolor: "#221b35",
          borderRadius: "20px",
          p: 4,
          width: { xs: "90%", md: "600px" },
          textAlign: "center",
          boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.1)",
        }}
      >
        <Typography variant="h4" fontWeight="bold" color="#C3A2FF">
          Want to <span style={{ color: "#9b88ff" }}>Learn</span>?
        </Typography>
        <Typography color="#ddd" mt={1} mb={3}>
          Upload the materials you want to learn here
        </Typography>

        <Box
          sx={{
            border: "2px dashed rgba(255, 255, 255, 0.3)",
            borderRadius: "15px",
            p: 5,
            textAlign: "center",
            cursor: "pointer",
            "&:hover": {
              bgcolor: "rgba(255, 255, 255, 0.1)",
            },
          }}
          onClick={() => document.getElementById("fileInput").click()}
        >
          <IconButton color="primary">
            <CloudUploadIcon sx={{ fontSize: 40, color: "#C3A2FF" }} />
          </IconButton>
          <Typography mt={1} color="white">
            {fileName ? fileName : "UPLOAD HERE"}
          </Typography>
          <input
            type="file"
            id="fileInput"
            hidden
            onChange={handleFileChange}
          />
        </Box>

        {previewUrl && (
          <div className="my-4 flex items-center space-x-3 border rounded p-3 bg-gray-50 shadow-sm w-fit">
            <a
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:underline text-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-500"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              <span className="text-sm">{fileName}</span>
            </a>
          </div>
        )}

        <Button
          variant="contained"
          sx={{
            bgcolor: "#9b88ff",
            borderRadius: "30px",
            mt: 3,
            px: 4,
            "&:hover": { bgcolor: "#7748ff" },
          }}
          onClick={handleUpload}
          disabled={uploading}
        >
          {uploading ? "Processing..." : "Upload"}
        </Button>

        {processedFileUrl && (
          <Button
            variant="outlined"
            sx={{
              borderRadius: "30px",
              ml: 2,
              mt: 3,
              color: "#9b88ff",
              borderColor: "#9b88ff",
              "&:hover": { borderColor: "#7748ff", color: "#7748ff" },
            }}
            onClick={() => window.open(processedFileUrl, "_blank")}
          >
            Download Processed
          </Button>
        )}

        <Snackbar
          open={success}
          autoHideDuration={3000}
          onClose={() => setSuccess(false)}
        >
          <Alert severity="success" onClose={() => setSuccess(false)}>
            File uploaded and processed successfully!
          </Alert>
        </Snackbar>

        <Snackbar
          open={Boolean(error)}
          autoHideDuration={3000}
          onClose={() => setError("")}
        >
          <Alert severity="error" onClose={() => setError("")}>
            {error}
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default FileUpload;
