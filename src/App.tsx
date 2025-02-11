import React, { useState } from "react";
import { Container, Typography, Button } from "@mui/material";
import LocationSelector from "./components/LocationSelector";
import Checklist from "./components/Checklist/Checklist";

const App = () => {
  const [location, setLocation] = useState<string>("");
  const [isLocationSelected, setIsLocationSelected] = useState<boolean>(false);

  const handleLocationSelection = (selectedLocation: string) => {
    setLocation(selectedLocation);
    setIsLocationSelected(true); // Yer seçildiğinde butonu aktif yapar
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
        Do Not Forget
      </Typography>

      {location ? (
        <>
          <Typography variant="h6" gutterBottom>
            Checklist for {location}
          </Typography>
          <Checklist location={location} />
        </>
      ) : (
        <>
          <LocationSelector onSelectLocation={handleLocationSelection} />
        </>
      )}
    </Container>
  );
};

export default App;
