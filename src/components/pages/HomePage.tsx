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
    <div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Typography variant="h4" gutterBottom>
          ReMind!
        </Typography>

        {location ? <Checklist /> : <LocationSelector />}
      </div>
    </div>
  );
};

export default HomePage;
