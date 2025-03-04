import React from "react";
import { Box, Typography } from "@mui/material";

const PrivacyPolicyPage: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f4f6f8",
        padding: "20px",
        textAlign: "center",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
        Privacy Policy
      </Typography>

      <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
        Welcome to ReMind! We value your privacy and are committed to protecting
        your personal information. This Privacy Policy outlines how we collect,
        use, and safeguard your data.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        1. Information We Collect
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
        We collect information that you provide when you create an account, such
        as your username, email address, and other personal details.
        Additionally, we may collect usage data and logs as you interact with
        the app.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        2. How We Use Your Information
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
        The information we collect is used to enhance your user experience,
        provide app updates, and improve our services. We do not sell or share
        your data with third parties unless required by law.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        3. Data Security
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
        We take data security seriously and implement measures to protect your
        personal information. However, no method of transmission over the
        internet is 100% secure, and we cannot guarantee absolute security.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        4. Your Rights
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
        You have the right to access, update, or delete your personal
        information at any time. If you wish to do so, please contact us through
        the app's support features.
      </Typography>

      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
        5. Changes to This Policy
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
        We may update this Privacy Policy from time to time. Any changes will be
        posted here, and the effective date will be updated accordingly.
      </Typography>

      <Typography
        variant="body1"
        sx={{ fontSize: "0.9rem", color: "#888", mt: 5 }}
      >
        By using the ReMind app, you agree to the terms outlined in this Privacy
        Policy.
      </Typography>
    </Box>
  );
};

export default PrivacyPolicyPage;
