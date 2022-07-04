import { Fragment, useState } from "react";
import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";

import NewTaskDialog from "./components/NewTaskDialog";
// import Todos from "./components/Todos";
// import NewTodo from "./components/NewTodo";
// import TodosContextProvider from "./store/todos-context";

// const style = {
//   position: "absolute" as "absolute",
//   top: "50%",
//   left: "50%",
// };

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    // <TodosContextProvider>
    //   <NewTodo />
    //   <Todos />
    // </TodosContextProvider>
    <Fragment>
      <Button variant="contained" onClick={handleOpen}>
        Create
      </Button>
      <NewTaskDialog open={open} onClose={handleClose} />
      {/* <Box sx={style}>
          <Typography variant="h6" component="h2">
            Create task
          </Typography>
        </Box> */}
      {/* <Card>
          <Typography variant="h6" component="h2">
            Create task
          </Typography>
        </Card> */}
    </Fragment>
  );
}

export default App;
