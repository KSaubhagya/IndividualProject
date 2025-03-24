import React, { useState } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const FileUpload = () => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
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
      {/* Upload Box */}
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

        {/* File Upload Area */}
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

        {/* Upload Button */}
        <Button
          variant="contained"
          sx={{
            bgcolor: "#9b88ff",
            borderRadius: "30px",
            mt: 3,
            px: 4,
            "&:hover": { bgcolor: "#7748ff" },
          }}
        >
          Upload
        </Button>
      </Box>
    </Box>
  );
};

export default FileUpload;
