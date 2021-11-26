import { React, useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
} from "@mui/material";
import { Delete, Update } from "@mui/icons-material";

export default function Todos() {
  const [todos, setTodos] = useState([]); // [{...todo}, ...]

  return (
    <div className="todos-wrapper">
      <List>
        <ListItem color="black">
          <ListItemIcon>
            <Checkbox color="success" />
          </ListItemIcon>
          <ListItemText primary={"Todo number one"} />
          <IconButton>
            <Update color="info" />
          </IconButton>
          <IconButton>
            <Delete color="error" />
          </IconButton>
        </ListItem>
      </List>
    </div>
  );
}
