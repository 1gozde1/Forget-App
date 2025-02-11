import React from "react";
import { Box, Typography } from "@mui/material";

const BackgroundSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url('/images/backgroundimage.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h3">Do Not Forget App</Typography>
    </Box>
  );
};

export default BackgroundSection;
