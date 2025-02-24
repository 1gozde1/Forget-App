import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import LocationSelector from "../LocationSelector";
import Checklist from "../Checklist/Checklist";

const HomePage = () => {
  const location = useSelector(
    (state: RootState) => state.location.selectedLocation
  );

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Typography variant="h4" gutterBottom>
        No more forgetting your stuff!
      </Typography>

      {location ? <Checklist /> : <LocationSelector />}
    </div>
  );
};

export default HomePage;
