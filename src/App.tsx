import { Container, Typography } from "@mui/material";
import LocationSelector from "./components/LocationSelector";
import Checklist from "./components/Checklist/Checklist";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

const App = () => {
  const location = useSelector(
    (state: RootState) => state.location.selectedLocation
  );

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
    </Container>
  );
};

export default App;
