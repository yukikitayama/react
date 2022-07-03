import { Fragment, useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
// import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';

import NewTask from './components/NewTask';
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
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
        <NewTask />
      </Modal>
    </Fragment>
  );
}

export default App;
