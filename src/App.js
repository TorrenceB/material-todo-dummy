import { AppBar, IconButton, Typography, Toolbar } from "@mui/material";
import { Add } from "@mui/icons-material";
import Todos from "./components/Todos";

import { useState } from "react";

function App() {
  /* Goals:
    1. Create
    2. Read
    3. Update
    4. Delete

    ------

    1. Completed --> Remove from list
    2. Incomplete...
  */
  const [todos, setTodos] = useState([
    {
      id: "00",
      title: "Dishes",
    },
    {
      id: "01",
      title: "Trash",
    },
  ]);

  /* 
    1. New todo object
    2. Add object to todos arr
      via setTodos.
  */
  const addTodo = () => {
    const newTodo = {
      id: Math.random(Math.floor() * 1000),
      title: "Test todo",
    };

    setTodos((prevArr) => [...prevArr, newTodo]);
  };

  const updateTodo = () => {};

  const deleteTodo = () => {};

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Typography>Todo List</Typography>
          <IconButton color="primary" onClick={addTodo}>
            <Add />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Todos todos={todos} />
    </div>
  );
}

export default App;
