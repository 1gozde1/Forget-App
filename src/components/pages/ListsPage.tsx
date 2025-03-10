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
import { createList, deleteList, selectLists } from "../../redux/listsSlice";
import { useNavigate } from "react-router-dom";

const ListsPage: React.FC = () => {
  const [listName, setListName] = useState("");
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();
  const lists = useSelector(selectLists);
  const navigate = useNavigate();

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

  const handleReset = () => {
    navigate("/lists", { replace: true });
  };

  return (
    <Container sx={{ mt: 4 }}>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Location</InputLabel>
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
            <ListItemText
              primary={`${list.name} (${list.location})`}
              onClick={() => navigate(`/lists/${list.id}`)}
              sx={{
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            />
            <IconButton edge="end" onClick={() => handleDeleteList(list.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>

      <Button variant="contained" color="secondary" onClick={handleReset}>
        Reset
      </Button>
    </Container>
  );
};

export default ListsPage;
