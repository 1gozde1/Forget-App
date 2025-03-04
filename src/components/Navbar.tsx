import { AppBar, Toolbar, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { logout } from "../redux/userSlice";

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
        <Button color="inherit" onClick={handleHomeClick}>
          Home
        </Button>
        <Button color="inherit" component={Link} to="/lists">
          My Lists
        </Button>

        {!isAuthenticated ? (
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
        ) : (
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
