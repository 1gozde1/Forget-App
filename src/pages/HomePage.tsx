import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import LocationSelector from "../components/LocationSelector";
import Checklist from "../components/Checklist/Checklist";

const HomePage = () => {
  const location = useSelector(
    (state: RootState) => state.location.selectedLocation
  );

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Forget Not App
      </Typography>

      {location ? <Checklist location={location} /> : <LocationSelector />}
    </div>
  );
};

export default HomePage;
