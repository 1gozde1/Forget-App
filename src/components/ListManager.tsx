import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  createList,
  deleteList,
  addItemToList,
  removeItemFromList,
  selectLists,
} from "../redux/listsSlice";

interface ListItem {
  id: string;
  name: string;
}

interface LocationList {
  id: string;
  name: string;
  location: string;
  items: ListItem[];
}

const ListsPage: React.FC = () => {
  const [listName, setListName] = useState("");
  const [location, setLocation] = useState("");
  const [item, setItem] = useState("");
  const dispatch = useDispatch();
  const lists = useSelector(selectLists) as LocationList[];

  const locations = [
    "Gym",
    "Work",
    "Office",
    "Home",
    "School",
    "Market",
    "Cafe",
    "Restaurant",
    "Car",
    "PreRideBike",
    "PostRideBike",
  ];

  const handleCreateList = () => {
    if (listName.trim() && location.trim()) {
      dispatch(createList({ name: listName, location }));
      setListName("");
      setLocation("");
    }
  };

  const handleDeleteList = (listId: string) => {
    dispatch(deleteList(listId));
  };

  const handleDeleteItem = (listId: string, itemId: string) => {
    dispatch(removeItemFromList({ listId, itemId }));
  };

  const handleAddItem = (locationId: string) => {
    if (item.trim()) {
      const newItem: ListItem = { id: new Date().toISOString(), name: item };
      dispatch(addItemToList({ listId: locationId, itemName: newItem.name }));
      setItem("");
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <TextField>Location</TextField>
        <Select value={location} onChange={(e) => setLocation(e.target.value)}>
          {locations.map((loc) => (
            <MenuItem key={loc} value={loc}>
              {loc}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="New List Name"
        variant="outlined"
        fullWidth
        value={listName}
        onChange={(e) => setListName(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleCreateList}>
        Create New List
      </Button>

      <List sx={{ mt: 3 }}>
        {lists.map((list) => (
          <ListItem key={list.id}>
            <ListItemText primary={`${list.name} (${list.location})`} />
            <TextField
              label="Add Item"
              variant="outlined"
              size="small"
              value={item}
              onChange={(e) => setItem(e.target.value)}
              sx={{ ml: 2 }}
            />
            <Button onClick={() => handleAddItem(list.id)} sx={{ ml: 1 }}>
              Add
            </Button>
            <IconButton edge="end" onClick={() => handleDeleteList(list.id)}>
              <DeleteIcon />
            </IconButton>
            <List>
              {list.items.map((item) => (
                <ListItem key={item.id}>
                  <ListItemText primary={item.name} />
                  <IconButton
                    onClick={() => handleDeleteItem(list.id, item.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              ))}
            </List>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ListsPage;
