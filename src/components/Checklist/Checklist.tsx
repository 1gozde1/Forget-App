import React, { useState } from "react";
import {
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  Divider,
} from "@mui/material";

interface ChecklistProps {
  location: string;
}

export const Checklist: React.FC<ChecklistProps> = ({ location }) => {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  const checklistItems = {
    Work: [
      "Ipad",
      "Logbook",
      "Passport",
      "2/ID cards",
      "Landing card",
      "Apron card",
      "Pen",
      "Hat",
      "Keys",
      "Wallet",
    ],
    Restaurant: ["Wallet", "Phone", "Keys"],
    Gym: ["Wallet", "Phone", "Keys", "Towel", "Chain lock"],
    Market: ["Shopping list", "Wallet", "Phone", "Keys"],
    PreRide: [
      "Helmet",
      "Gloves",
      "Ear plugs",
      "Boots",
      "Jacket",
      "Pants",
      "Balaclava",
      "Turn on Intercom",
      "Key Holder",
      "Tyre pressure",
      "Fuel",
      "Chain",
      "Brake fluid",
      "Wallet",
      "Phone",
      "Keys",
      "License",
      "Vehicle Registration",
    ],
    PostRide: [
      "Ear plugs",
      "Turn off Intercom",
      "Key Holder",
      "Tyre pressure",
      "Fuel",
      "Chain",
      "Brake fluid",
      "Wallet",
      "Phone",
      "Keys",
      "License",
      "Vehicle Registration",
    ],
  };

  const itemsToDisplay = checklistItems[location] || [];

  return (
    <List sx={{ maxWidth: 500, margin: "auto" }}>
      {itemsToDisplay.map((item, index) => (
        <div key={index}>
          <ListItem
            sx={{ display: "flex", justifyContent: "space-between", p: 1 }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedItems[`item${index + 1}`] || false}
                  onChange={handleCheckboxChange}
                  name={`item${index + 1}`}
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
