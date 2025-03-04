import { Container, Typography, Box, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { RootState } from "./redux/store";
import { logout } from "./redux/userSlice";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ListsPage from "./components/pages/ListsPage";
import ForgotPasswordPage from "./components/pages/ForgotPasswordPage";
import Footer from "./components/footer";
import HowToUsePage from "./components/pages/howToUsePage";
import PrivacyPolicyPage from "./components/pages/privacyPolicyPage";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    primary: {
      main: "#f1c232",
    },
    secondary: {
      main: "#ffcc00",
    },
  },
});

function App() {
  const user = useSelector((state: RootState) => state.user.user);
  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated
  );
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Navbar />

        <Container
          sx={{
            flexGrow: 1,
            textAlign: "center",
            mt: 4,
            backgroundColor: "#f4f6f8",
            padding: 4,
            borderRadius: 2,
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage key="home" />} />
            <Route path="/lists" element={<ListsPage />} />
            <Route
              path="/login"
              element={isAuthenticated ? <Navigate to="/" /> : <LoginPage />}
            />
            <Route
              path="/register"
              element={isAuthenticated ? <Navigate to="/" /> : <RegisterPage />}
            />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/how-to-use" element={<HowToUsePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          </Routes>

          {isAuthenticated && (
            <Box mt={2}>
              <Typography variant="h5" gutterBottom>
                Welcome {user?.username}!
              </Typography>
              <Box mt={2}>
                <Typography variant="h6" gutterBottom>
                  You are logged in.
                </Typography>
              </Box>
              <Box mt={2}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleLogout}
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    backgroundColor: "#ffcc00",
                    ":hover": {
                      backgroundColor: "#f1c232",
                    },
                  }}
                >
                  Logout
                </Button>
              </Box>
            </Box>
          )}
        </Container>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
