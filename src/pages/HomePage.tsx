import React from "react";
import LocationSelector from "../components/LocationSelector";
import Checklist from "../components/Checklist/Checklist";
import BackgroundSection from "../components/BackgroundSection";

const HomePage = () => {
  const [location, setLocation] = React.useState<string>("");

  const handleLocationSelection = (selectedLocation: string) => {
    setLocation(selectedLocation);
  };

  return (
    <div>
      <BackgroundSection />

      {location ? (
        <Checklist location={location} />
      ) : (
        <LocationSelector onSelectLocation={handleLocationSelection} />
      )}
    </div>
  );
};

export default HomePage;
