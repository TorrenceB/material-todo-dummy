import { AppBar, IconButton, Typography, Toolbar, Fab } from "@mui/material";
import { Add } from "@mui/icons-material";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton></IconButton>
          <Typography>Todo List</Typography>
        </Toolbar>
      </AppBar>
      <Todos />
      <Fab color="primary">
        <Add />
      </Fab>
    </div>
  );
}

export default App;
