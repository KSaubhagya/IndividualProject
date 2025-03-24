import React from "react";
import { Box, Stack, Typography, Button, IconButton } from "@mui/material";
import { Facebook, Twitter, LinkedIn, YouTube, Instagram, Pinterest } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#1a1528",
        color: "white",
        py: 5,
        px: { xs: 2, md: 10 },
        textAlign: "center",
      }}
    >
      {/* Main Footer Content */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={5}
        justifyContent="space-between"
        alignItems="center"
        textAlign={{ xs: "center", md: "left" }}
      >
        {/* Logo */}
        <Box>
          <img src="/logo.png" alt="Logo" style={{ width: 80 }} />
        </Box>

        {/* Navigation Sections */}
        <Stack spacing={1}>
          <Typography fontWeight="bold">ABOUT</Typography>
          <Typography>Services</Typography>
          <Typography>Technologies</Typography>
          <Typography>Join E-AD</Typography>
        </Stack>

        <Stack spacing={1}>
          <Typography fontWeight="bold">F.A.Q</Typography>
          <Typography>Sitemap</Typography>
          <Typography>Conditions</Typography>
          <Typography>Licenses</Typography>
        </Stack>

        {/* Social Section */}
        <Stack alignItems="center">
          <Typography fontWeight="bold">SOCIALIZE WITH E-AD</Typography>
          <Stack direction="row" spacing={1} mt={1}>
            <IconButton sx={{ color: "white" }}><Facebook /></IconButton>
            <IconButton sx={{ color: "white" }}><Twitter /></IconButton>
            <IconButton sx={{ color: "white" }}><LinkedIn /></IconButton>
            <IconButton sx={{ color: "white" }}><YouTube /></IconButton>
            <IconButton sx={{ color: "white" }}><Instagram /></IconButton>
            <IconButton sx={{ color: "white" }}><Pinterest /></IconButton>
          </Stack>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#9b88ff",
              borderRadius: "20px",
              px: 3,
              mt: 2,
              "&:hover": { bgcolor: "#7748ff" },
            }}
          >
            BUILD YOUR WORLD
          </Button>
        </Stack>
      </Stack>

      {/* Copyright Section */}
      <Typography mt={5} fontSize="12px">
        2024 © E-AD - ALL RIGHTS RESERVED
      </Typography>
    </Box>
  );
};

export default Footer;
