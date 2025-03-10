import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectLists, addItemToList } from "../../redux/listsSlice";
import {
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeItemFromList } from "../../redux/listsSlice";

const ListDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const lists = useSelector(selectLists) as unknown as any[];
  const dispatch = useDispatch();
  const [newItem, setNewItem] = useState("");
  const [list, setList] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const foundList = lists.find((item) => item.id === id);
      setList(foundList);
    }
  }, [id, lists]);

  const handleAddItem = () => {
    if (newItem.trim() && list) {
      dispatch(addItemToList({ listId: list.id, itemName: newItem }));
      setNewItem("");
    }
  };

  const handleDeleteItem = (itemId: string) => {
    if (list) {
      dispatch(removeItemFromList({ listId: list.id, itemId }));
    }
  };

  if (!list) {
    return <div>List not found</div>;
  }

  return (
    <div>
      <h1>{list.name}</h1>
      <p>Location: {list.location}</p>

      <h3>Items:</h3>
      <List>
        {list.items.length > 0 ? (
          list.items.map(
            (item: { id: string; name: string }, index: number) => (
              <ListItem key={item.id}>
                <ListItemText primary={item.name} />
                <IconButton
                  edge="end"
                  onClick={() => handleDeleteItem(item.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            )
          )
        ) : (
          <p>No items in this list.</p>
        )}
      </List>

      <TextField
        label="Add New Item"
        variant="outlined"
        fullWidth
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        sx={{ mb: 2 }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddItem();
          }
        }}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        onClick={handleAddItem}
      >
        Add Item
      </Button>
    </div>
  );
};

export default ListDetailPage;
