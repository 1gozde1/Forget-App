import React from "react";
import {
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  Box,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setLocation, resetLocation } from "../redux/locationSlice";
import { RootState } from "../redux/store";
import { setChecklist } from "../redux/checklistSlice";

const LocationSelector: React.FC = () => {
  const dispatch = useDispatch();
  const selectedLocation = useSelector(
    (state: RootState) => state.location.selectedLocation || ""
  );

  const handleLocationChange = (event: SelectChangeEvent<string>) => {
    const selected = event.target.value;
    dispatch(setLocation(selected));
    dispatch(setChecklist(selected));
  };

  const handleReset = () => {
    dispatch(resetLocation());
    dispatch(setChecklist(""));
  };

  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <FormControl fullWidth>
        <InputLabel
          id="location-select-label"
          data-testid="location-select-label"
        >
          Quick Start
        </InputLabel>
        <Select
          labelId="location-select-label"
          id="location-select"
          value={selectedLocation}
          label="Location"
          onChange={handleLocationChange}
        >
          <MenuItem value="Work">Work</MenuItem>
          <MenuItem value="Office">Office</MenuItem>
          <MenuItem value="Restaurant">Restaurant</MenuItem>
          <MenuItem value="Cafe">Cafe</MenuItem>
          <MenuItem value="Gym">Gym</MenuItem>
          <MenuItem value="Market">Market</MenuItem>
          <MenuItem value="PreRideBike">PreRideBike</MenuItem>
          <MenuItem value="PostRideBike">PostRideBike</MenuItem>
          <MenuItem value="Car">Car</MenuItem>
        </Select>
      </FormControl>

      {selectedLocation && (
        <Button
          variant="contained"
          color="secondary"
          sx={{ mt: 2 }}
          onClick={handleReset}
        >
          Reset Location
        </Button>
      )}
    </Box>
  );
};

export default LocationSelector;
