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

  */
  const [userInput, setUserInput] = useState("");
  const [todos, setTodos] = useState(() => []);

  const changeHandler = (e) => {
    setUserInput(e.target.value);
  };

  const validateInput = (str) => (str === "" ? true : false);

  const addTodo = (e) => {
    const newTodo = {
      id: Math.random(Math.floor() * 1000),
      title: userInput,
    };
    e.preventDefault();

    if (!validateInput(userInput)) {
      setTodos((prevState) => [newTodo, ...prevState]);
      setUserInput("");
    }
  };

  const updateTodo = (todos) => {
    const updatedTodo = {
      id: 1,
      title: "Updated Todo",
    };

    const index = todos.findIndex((todo) => todo.id === updatedTodo.id);

    if (index !== -1) {
      setTodos([...todos.splice(index, 1, updatedTodo)]);
    }
  };

  const deleteTodo = () => {};

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Typography>Todo List</Typography>
        </Toolbar>
      </AppBar>
      <Container
        sx={{ display: "flex", justifyContent: "space-between", pt: 2 }}
      >
        <TextField
          // error={validateInput(userInput)}
          variant="outlined"
          label="Enter Todo"
          value={userInput}
          onChange={changeHandler}
        />
        <Button variant="outlined" onClick={addTodo}>
          Add Todo
          <Add />
        </Button>
      </Container>

      <Todos todos={todos} updateClickHandler={() => updateTodo(todos)} />
    </div>
  );
}

export default App;
