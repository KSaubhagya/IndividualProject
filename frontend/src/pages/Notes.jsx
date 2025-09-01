import React from "react";
import {
  Box,
  Typography,
  Button,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";

const Notes = () => {
  const isLoading = false;
  const error = "";

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
          We got <span style={{ color: "#9b88ff" }}>You</span>!!
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
        ></Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2, // gap between the buttons
            mt: 3,
          }}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: "#9b88ff",
              borderRadius: "30px",
              px: 4,
              "&:hover": { bgcolor: "#7748ff" },
            }}
            onClick={() => {}}
            disabled={isLoading}
          >
            {isLoading ? "Downloading..." : "Download"}
          </Button>

          <Button
            variant="contained"
            sx={{
              bgcolor: "#9b88ff",
              borderRadius: "30px",
              px: 4,
              "&:hover": { bgcolor: "#7748ff" },
            }}
            onClick={() => {}}
            disabled={isLoading}
          >
            {isLoading ? "Viewing..." : "View Full Note"}
          </Button>
        </Box>

        <Snackbar
          open={Boolean(error)}
          autoHideDuration={3000}
          onClose={() => {}}
        >
          <Alert severity="error" onClose={() => {}}>
            {error}
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default Notes;
