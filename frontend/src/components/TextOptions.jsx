import React, { useState } from "react";
import { Box, Slider, Switch, Typography, Button } from "@mui/material";

const TextOptionsPanel = ({ onOptionsChange, onApplyOptions }) => {
  const [textSize, setTextSize] = useState(16);
  const [spacing, setSpacing] = useState(false);
  const [font, setFont] = useState("Arial");
  const [themeColor, setThemeColor] = useState("#0000ff"); // Changed to blue as default

  const fonts = ["Arial", "Verdana", "Times New Roman", "Courier New"];

  const handleApply = () => {
    const options = {
      textSize,
      spacing,
      font,
      themeColor,
    };

    if (onOptionsChange) {
      onOptionsChange(options);
    }

    if (onApplyOptions) {
      onApplyOptions(options);
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        right: 50,
        bgcolor: "#383757",
        p: 3,
        borderRadius: 2,
        width: 250,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        color: "#fff",
        zIndex: 999,
      }}
    >
      <Typography variant="body1">Text Options</Typography>

      {/* Text Size */}
      <Box>
        <Typography variant="body2">Text Size</Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <span style={{ fontSize: 14 }}>Aa</span>
          <Slider
            min={8}
            max={40}
            value={textSize}
            onChange={(e, val) => setTextSize(val)}
            sx={{ flex: 1, color: "#6c63ff" }}
          />
          <span style={{ fontSize: 24 }}>Aa</span>
        </Box>
        <Typography variant="caption">{textSize}px</Typography>
      </Box>

      {/* Spacing */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body2">Increase Spacing</Typography>
        <Switch
          checked={spacing}
          onChange={() => setSpacing(!spacing)}
          sx={{
            "& .MuiSwitch-switchBase.Mui-checked": {
              color: "#6c63ff",
            },
            "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
              backgroundColor: "#6c63ff",
            },
          }}
        />
      </Box>

      {/* Font */}
      <Box>
        <Typography variant="body2">Font</Typography>
        <select
          value={font}
          onChange={(e) => setFont(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            marginTop: "4px",
            borderRadius: "6px",
            border: "1px solid #ddd",
            backgroundColor: "#fff",
          }}
        >
          {fonts.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
      </Box>

      {/* Theme Color */}
      <Box>
        <Typography variant="body2">Text Color</Typography>
        <input
          type="color"
          value={themeColor}
          onChange={(e) => setThemeColor(e.target.value)}
          style={{
            width: "100%",
            height: 40,
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            backgroundColor: "#fff",
          }}
        />
      </Box>

      {/* Apply Button */}
      <Button
        variant="contained"
        onClick={handleApply}
        sx={{
          bgcolor: "#9b88ff",
          borderRadius: "30px",
          mt: 2,
          px: 4,
          "&:hover": { bgcolor: "#7748ff" },
        }}
      >
        Apply
      </Button>
    </Box>
  );
};

export default TextOptionsPanel;
