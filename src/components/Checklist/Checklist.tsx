import React from "react";
import {
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  Divider,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { toggleChecklistItem } from "../../redux/checklistSlice";
import { RootState } from "../../redux/store";

interface ChecklistProps {
  location: string;
}

const Checklist: React.FC<ChecklistProps> = ({ location }) => {
  const dispatch = useDispatch();
  const checklist = useSelector(
    (state: RootState) => state.checklist.checklist
  );

  const handleCheckboxChange = (item: string) => {
    dispatch(toggleChecklistItem(item));
  };

  const locationChecklist = checklist[location];

  const safeLocationChecklist: Record<string, boolean> =
    locationChecklist && typeof locationChecklist === "object"
      ? locationChecklist
      : {};

  console.log("Location Checklist:", safeLocationChecklist);

  return (
    <List sx={{ maxWidth: 500, margin: "auto" }}>
      {Object.keys(safeLocationChecklist).map((item, index) => (
        <div key={index}>
          <ListItem
            sx={{ display: "flex", justifyContent: "space-between", p: 1 }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={safeLocationChecklist[item] || false}
                  onChange={() => handleCheckboxChange(item)}
                  color="primary"
                />
              }
              label={item}
            />
          </ListItem>
          <Divider />
        </div>
      ))}
    </List>
  );
};

export default Checklist;
