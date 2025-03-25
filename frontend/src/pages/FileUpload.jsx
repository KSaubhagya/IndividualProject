import React, { useState } from "react";
import { Box, Typography, Button, Snackbar, Alert, IconButton } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file before uploading.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://127.0.0.1:8000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 200) {
        setSuccess(true);
        setFile(null);
        setFileName("");
      }
    } catch (err) {
      setError("Upload failed. Please try again.");
    }
  };

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
          <input type="file" id="fileInput" hidden onChange={handleFileChange} />
        </Box>

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
        >
          Upload
        </Button>

        <Snackbar open={success} autoHideDuration={3000} onClose={() => setSuccess(false)}>
          <Alert severity="success" onClose={() => setSuccess(false)}>
            File uploaded successfully!
          </Alert>
        </Snackbar>

        <Snackbar open={Boolean(error)} autoHideDuration={3000} onClose={() => setError("")}>
          <Alert severity="error" onClose={() => setError("")}>
            {error}
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default FileUpload;
