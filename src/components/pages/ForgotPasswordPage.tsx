import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email address!");
      return;
    }

    alert("Password reset link sent to your email!");

    navigate("/login");
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "auto", mt: 5, textAlign: "center" }}>
      <Typography variant="h5" gutterBottom>
        Forgot Password
      </Typography>
      <form onSubmit={handleResetPassword}>
        <TextField
          fullWidth
          label="Enter your email"
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Reset Password
        </Button>
      </form>
    </Box>
  );
};

export default ForgotPasswordPage;
