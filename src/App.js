import {
  AppBar,
  Container,
  Typography,
  Toolbar,
  TextField,
  Button,
} from "@mui/material";
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

    Todo: Add modal to allow for user input of todo,
      don't forget to make controlled, two way binding
  */
  const [todos, setTodos] = useState(() => [
    {
      id: "00",
      title: "Dishes",
    },
    {
      id: "01",
      title: "Trash",
    },
  ]);

  const addTodo = () => {
    const newTodo = {
      id: Math.random(Math.floor() * 1000),
      title: "Test todo",
    };

    setTodos((prevArr) => [newTodo, ...prevArr]);
  };

  const updateTodo = () => {};

  const deleteTodo = () => {};

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Typography>Todo List</Typography>
        </Toolbar>
      </AppBar>
      {/* Todo Input + Add Btn */}
      <Container
        sx={{ display: "flex", justifyContent: "space-between", pt: 2 }}
      >
        <TextField variant="outlined" label="Enter Todo" />
        <Button variant="outlined" onClick={addTodo}>
          Add Todo
          <Add />
        </Button>
      </Container>

      <Todos todos={todos} />
    </div>
  );
}

export default App;
