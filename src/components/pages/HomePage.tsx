import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import LocationSelector from "../LocationSelector";
import Checklist from "../Checklist/Checklist";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const location = useSelector(
    (state: RootState) => state.location.selectedLocation
  );
  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated
  );
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Typography variant="h4" gutterBottom>
        No more forgetting your stuff!
      </Typography>

      {location ? <Checklist location={location} /> : <LocationSelector />}
    </div>
  );
};

export default HomePage;
