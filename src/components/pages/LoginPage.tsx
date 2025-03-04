import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/userSlice";
import { RootState } from "../../redux/store";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Typography,
  Link,
  Checkbox,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please enter a username and password!");
      return;
    }

    const userData = { username, rememberMe };
    dispatch(login(userData));
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "auto", mt: 5, textAlign: "center" }}>
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleLogin}>
        <TextField
          fullWidth
          label="Username"
          variant="outlined"
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ marginBottom: "6px" }}
        />
        <TextField
          fullWidth
          label="Password"
          type={showPassword ? "text" : "password"}
          variant="outlined"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ marginBottom: "6px" }}
          InputProps={{
            endAdornment: (
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="start"
                sx={{ padding: 0 }}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            ),
          }}
        />

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mt: 1 }}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                sx={{ p: 0, m: 0 }}
              />
            }
            label="Remember me"
            sx={{ m: 0, width: "auto", p: 0 }}
            componentsProps={{ typography: { fontSize: "0.75rem" } }}
          />

          <Link
            component={RouterLink}
            to="/forgot-password"
            sx={{ fontSize: "0.875rem" }}
          >
            Forgot your password?
          </Link>
        </Box>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Login
        </Button>
      </form>

      <Typography sx={{ mt: 2, fontSize: "0.875rem" }}>
        Don't have an account?{" "}
        <Link
          component={RouterLink}
          to="/register"
          sx={{ fontSize: "0.875rem" }}
        >
          Register here
        </Link>
      </Typography>
    </Box>
  );
};

export default LoginPage;
