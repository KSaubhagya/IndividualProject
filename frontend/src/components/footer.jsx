import {
  Box,
  Stack,
  Typography,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  LinkedIn,
  YouTube,
  Instagram,
} from "@mui/icons-material";

import logo from "../assests/logo.png";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#1a182b",
        color: "white",
        py: 5,
        px: { xs: 2, md: 10 },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1px 1fr 1px 1fr" },
          gap: { xs: 5, md: 14 },
          alignItems: "start",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
          <img src={logo} alt="Logo" style={{ width: 120 }} />
        </Box>

        <Divider
          orientation="vertical"
          flexItem
          sx={{
            borderColor: "rgba(255, 255, 255, 0.2)",
            display: { xs: "none", md: "block" },
            height: "100%",
          }}
        />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1px 1fr" },
            gap: { xs: 5, md: 14 },
          }}
        >
          <Stack spacing={1} textAlign={{ xs: "center", md: "left" }}>
            <Typography fontWeight="bold">ABOUT</Typography>
            <Typography>Services</Typography>
            <Typography>Technologies</Typography>
            <Typography>Join E-AD</Typography>
          </Stack>

          <Divider
            orientation="vertical"
            flexItem
            sx={{
              borderColor: "rgba(255, 255, 255, 0.2)",
              display: { xs: "none", md: "block" },
              height: "100%",
            }}
          />

          <Stack spacing={1} textAlign={{ xs: "center", md: "left" }}>
            <Typography fontWeight="bold">F.A.Q</Typography>
            <Typography>Sitemap</Typography>
            <Typography>Conditions</Typography>
            <Typography>Licenses</Typography>
          </Stack>
        </Box>

        <Divider
          orientation="vertical"
          flexItem
          sx={{
            borderColor: "rgba(255, 255, 255, 0.2)",
            display: { xs: "none", md: "block" },
            height: "100%",
          }}
        />

        <Box sx={{ textAlign: { xs: "center", md: "right" } }}>
          <Typography fontWeight="bold">SOCIALIZE WITH E-AD</Typography>
          <Stack
            direction="row"
            spacing={1}
            mt={1}
            justifyContent={{ xs: "center", md: "flex-end" }}
          >
            <IconButton sx={{ color: "white" }}>
              <Facebook />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <Twitter />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <LinkedIn />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <YouTube />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <Instagram />
            </IconButton>
          </Stack>
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
            }}
          >
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
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          mt: 5,
          textAlign: "center",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          pt: 3,
        }}
      >
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} E-AD |{" "}
          <a href="#terms" style={{ color: "white", textDecoration: "none" }}>
            Terms
          </a>{" "}
          |{" "}
          <a href="#privacy" style={{ color: "white", textDecoration: "none" }}>
            Privacy
          </a>{" "}
          - All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
