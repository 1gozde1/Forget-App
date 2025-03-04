import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import LocationSelector from "../LocationSelector";
import Checklist from "../Checklist/Checklist";
import PhoneIcon from "@mui/icons-material/Phone";
import LaptopIcon from "@mui/icons-material/Laptop";
import KeyIcon from "@mui/icons-material/VpnKey";
import FeedbackForm from "../FeedbackForm";

const HomePage = () => {
  const location = useSelector(
    (state: RootState) => state.location.selectedLocation
  );

  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Remember every moment, forget nothing. Here's a simple tool to solve
          your forgetfulness problem!
        </Typography>

        {location ? <Checklist /> : <LocationSelector />}
      </div>

      <div className="icons">
        <PhoneIcon style={{ fontSize: 50 }} />
        <LaptopIcon style={{ fontSize: 50 }} />
        <KeyIcon style={{ fontSize: 50 }} />
      </div>

      <FeedbackForm />
    </div>
  );
};

export default HomePage;
