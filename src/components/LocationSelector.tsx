import React, { useState } from "react";
import {
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  Box,
} from "@mui/material";

export const LocationSelector = ({
  onSelectLocation,
}: {
  onSelectLocation: (location: string) => void;
}) => {
  const [selectedLocation, setSelectedLocation] = useState<string>("");

  const handleLocationChange = (event: SelectChangeEvent<string>) => {
    const location = event.target.value;
    setSelectedLocation(location);
    onSelectLocation(location);
  };

  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <FormControl fullWidth>
        <InputLabel id="location-select-label">Location</InputLabel>
        <Select
          labelId="location-select-label"
          id="location-select"
          value={selectedLocation}
          label="Location"
          onChange={handleLocationChange}
        >
          <MenuItem value={"Work"}>Work</MenuItem>
          <MenuItem value={"Restaurant"}>Restaurant</MenuItem>
          <MenuItem value={"Gym"}>Gym</MenuItem>
          <MenuItem value={"Market"}>Market</MenuItem>
          <MenuItem value={"PreRide"}>PreRide</MenuItem>
          <MenuItem value={"PostRide"}>Post-Ride</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default LocationSelector;
