import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { logout } from "../redux/userSlice";
import ChecklistIcon from "@mui/icons-material/Checklist";
import { auth } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated
  );
  const username = useSelector((state: RootState) => state.user.user?.username);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(logout());
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error during logout:", error);
      });
  };

  const handleHomeClick = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
          <ChecklistIcon sx={{ mr: 1 }} />
          <Typography
            variant="h6"
            sx={{ cursor: "pointer" }}
            onClick={handleHomeClick}
          >
            ReMind
          </Typography>
        </Box>

        {isAuthenticated && (
          <Box display="flex" alignItems="center" sx={{ ml: 5 }}>
            <Typography
              variant="body2"
              sx={{
                mr: 2,
                fontSize: "14px",
                whiteSpace: "nowrap",
              }}
            >
              Welcome {username || "User"}
            </Typography>
          </Box>
        )}

        <Box display="flex" justifyContent="flex-end" width="100%" gap={2}>
          <Button color="inherit" onClick={handleHomeClick}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/lists">
            My Lists
          </Button>
          <Button color="inherit" component={Link} to="/feedback">
            Feedback
          </Button>

          {isAuthenticated ? (
            <>
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <Button
              color="primary"
              variant="contained"
              sx={{ borderRadius: 3 }}
              component={Link}
              to="/login"
            >
              Login
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
