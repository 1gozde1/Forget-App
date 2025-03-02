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
  InputLabel,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  createList,
  deleteList,
  addItemToList,
  removeItemFromList,
  selectLists,
} from "../../redux/listsSlice";

const ListsPage: React.FC = () => {
  const [listName, setListName] = useState("");
  const [location, setLocation] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [item, setItem] = useState("");
  const [isOtherLocation, setIsOtherLocation] = useState(false);
  const dispatch = useDispatch();
  const lists = useSelector(selectLists);

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
    "Park",
    "Hotel",
  ];

  const handleCreateList = () => {
    const finalLocation =
      isOtherLocation && newLocation.trim() ? newLocation : location;

    if (listName.trim() && finalLocation.trim()) {
      dispatch(createList({ name: listName, location: finalLocation }));
      setListName("");
      setLocation("");
      setNewLocation("");
      setIsOtherLocation(false);
    }
  };

  const handleDeleteList = (listId: string) => {
    dispatch(deleteList(listId));
  };

  const handleDeleteItem = (listId: string, itemId: string) => {
    dispatch(removeItemFromList({ listId, itemId }));
  };

  const handleAddItem = (listId: string) => {
    if (item.trim()) {
      dispatch(addItemToList({ listId, item }));
      setItem("");
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Location</InputLabel>
        <Select
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
            if (e.target.value === "Other") {
              setIsOtherLocation(true);
            } else {
              setIsOtherLocation(false);
            }
          }}
        >
          {locations.map((loc) => (
            <MenuItem key={loc} value={loc}>
              {loc}
            </MenuItem>
          ))}
          <MenuItem value="Other">Other</MenuItem>
        </Select>
      </FormControl>

      {isOtherLocation && (
        <TextField
          label="New Location"
          variant="outlined"
          fullWidth
          value={newLocation}
          onChange={(e) => setNewLocation(e.target.value)}
          sx={{ mb: 2 }}
        />
      )}

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
