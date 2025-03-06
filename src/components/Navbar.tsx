import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { logout } from "../redux/userSlice";
import ChecklistIcon from "@mui/icons-material/Checklist";

const Navbar = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
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

          {!isAuthenticated ? (
            <Button
              color="primary"
              variant="contained"
              sx={{ borderRadius: 3 }}
              component={Link}
              to="/login"
            >
              Login
            </Button>
          ) : (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
