import { Container, Typography, Button, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { RootState } from "./redux/store";
import { logout } from "./redux/userSlice";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import Navbar from "./components/Navbar";

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
    <>
      <Navbar />
      <Container
        sx={{
          textAlign: "center",
          mt: 4,
          backgroundColor: "#f4f6f8",
          padding: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" gutterBottom></Typography>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/" /> : <LoginPage />}
          />
          <Route
            path="/register"
            element={isAuthenticated ? <Navigate to="/" /> : <RegisterPage />}
          />
        </Routes>

        {isAuthenticated && (
          <Box mt={2}>
            <Typography variant="h5" gutterBottom>
              Welcome {user?.username}!
            </Typography>
            <Button variant="contained" color="primary" onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        )}
      </Container>
    </>
  );
}

export default App;
