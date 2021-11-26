import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
} from "@mui/material";
import { Delete, Update } from "@mui/icons-material";

export default function Todos(props) {
  return (
    <div className="todos-wrapper">
      <List>
        {props.todos.length !== 0 && props.todos ? (
          props.todos.map((todo) => {
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
          })
        ) : (
          <ListItem></ListItem>
        )}
      </List>
    </div>
  );
}
