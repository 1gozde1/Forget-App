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

const Checklist: React.FC = () => {
  const dispatch = useDispatch();
  const checklist = useSelector(
    (state: RootState) => state.checklist.checklist
  );

  const handleCheckboxChange = (item: string) => {
    dispatch(toggleChecklistItem(item));
  };

  return (
    <List sx={{ maxWidth: 500, margin: "auto" }}>
      {Object.keys(checklist).map((item, index) => (
        <div key={index}>
          <ListItem
            sx={{ display: "flex", justifyContent: "space-between", p: 1 }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={!!checklist[item]}
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
