import { AppBar, IconButton, Typography, Toolbar } from "@mui/material";
import { Add } from "@mui/icons-material";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar style={{ justifyContent: "space-between" }}>
          <Typography>Todo List</Typography>
          <IconButton color="primary">
            <Add />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Todos />
    </div>
  );
}

export default App;
