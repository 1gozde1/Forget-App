import { Container, Typography, Button, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { login, logout } from "./redux/userSlice";
import LocationSelector from "./components/LocationSelector";
import Checklist from "./components/Checklist/Checklist";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";

function App() {
  const location = useSelector(
    (state: RootState) => state.location.selectedLocation
  );
  const user = useSelector((state: RootState) => state.user.user);
  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated
  );
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Container
      sx={{
        textAlign: "center",
        mt: 4,
        backgroundColor: "#f4f6f8",
        padding: 4,
        borderRadius: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Forget Not App
      </Typography>

      {isAuthenticated ? (
        <Box>
          <Typography variant="h5" gutterBottom>
            Hoşgeldiniz, {user?.username}!
          </Typography>
          <Button variant="contained" color="primary" onClick={handleLogout}>
            Çıkış Yap
          </Button>

          {location ? (
            <>
              <Typography variant="h6" gutterBottom>
                {location}
              </Typography>
              <Checklist location={location} />
            </>
          ) : (
            <LocationSelector />
          )}
        </Box>
      ) : (
        <Box>
          <Typography variant="h6" gutterBottom>
            Lütfen giriş yapın veya kaydolun
          </Typography>
          <LoginPage />
          <RegisterPage />
        </Box>
      )}
    </Container>
  );
}

export default App;
