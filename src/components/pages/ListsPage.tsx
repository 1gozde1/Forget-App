import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, TextField, Button, List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { createList, deleteList, selectLists } from "../../redux/listsSlice";

const ListsPage: React.FC = () => {
  const [listName, setListName] = useState("");
  const dispatch = useDispatch();
  const lists = useSelector(selectLists);

  const handleCreateList = () => {
    if (listName.trim()) {
      dispatch(createList(listName));
      setListName(""); 
    }
  };

  const handleDeleteList = (id: string) => {
    dispatch(deleteList(id));
  };

  return (
    <Container sx={{ mt: 4 }}>
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
          <ListItem
            key={list.id}
            secondaryAction={
              <IconButton edge="end" onClick={() => handleDeleteList(list.id)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={list.name} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default ListsPage;
