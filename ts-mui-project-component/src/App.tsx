import { Fragment, useState } from "react";
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';

import NewTaskDialog from "./components/NewTaskDialog";

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Fragment>
      <Typography variant="h2" component="div">
        Functional requirement
      </Typography>
      <div>
        <ul>
          <li>Create a task</li>
          <li>Render list of tasks</li>
          <li>Change status of a task</li>
        </ul>
      </div>
      <Button variant="contained" onClick={handleOpen}>
        Create
      </Button>
      <NewTaskDialog open={open} onClose={handleClose} />
    </Fragment>
  );
}

export default App;
