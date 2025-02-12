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

  const filteredChecklist: Record<string, boolean> =
    checklist &&
    checklist[location] &&
    typeof checklist[location] === "object" &&
    !Array.isArray(checklist[location])
      ? (checklist[location] as unknown as Record<string, boolean>)
      : {};

  console.log("Filtered Checklist:", filteredChecklist);

  return (
    <List sx={{ maxWidth: 500, margin: "auto" }}>
      {Object.keys(filteredChecklist).map((item, index) => (
        <div key={index}>
          <ListItem
            sx={{ display: "flex", justifyContent: "space-between", p: 1 }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={filteredChecklist[item] || false}
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
