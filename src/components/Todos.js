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
  const [todos, setTodos] = useState([
    {
      id: "00",
      title: "Dishes",
    },
    {
      id: "01",
      title: "Trash",
    },
    {
      id: "02",
      title: "Homework",
    },
  ]);

  return (
    <div className="todos-wrapper">
      <List>
        {todos.map((todo) => {
          return (
            <ListItem key={todo.id}>
              <ListItemIcon>
                <Checkbox color="primary" />
              </ListItemIcon>
              <ListItemText primary={todo.title} />
              <IconButton>
                <Update color="info" />
              </IconButton>
              <IconButton>
                <Delete color="error" />
              </IconButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
