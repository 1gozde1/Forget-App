import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        padding: "10px",
        textAlign: "center",
        mt: "auto",
        borderRadius: 2,
      }}
    >
      <Typography variant="body2">
        <Link component={RouterLink} to="/" sx={{ marginRight: 2 }}>
          Home
        </Link>
        <Link component={RouterLink} to="/how-to-use" sx={{ marginRight: 2 }}>
          How to Use
        </Link>
        <Link
          component={RouterLink}
          to="/privacy-policy"
          sx={{ marginRight: 2 }}
        >
          Privacy Policy
        </Link>

        <Link component={RouterLink} to="/feedback" sx={{ marginRight: 2 }}>
          Contact Us
        </Link>
      </Typography>
      <Typography variant="body2" sx={{ marginTop: "10px" }}>
        © 2025 ReMind All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
