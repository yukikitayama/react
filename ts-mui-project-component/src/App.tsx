import { Fragment, useState } from "react";
import Button from "@mui/material/Button";

import NewTaskDialog from "./components/NewTaskDialog";

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Fragment>
      <Button variant="contained" onClick={handleOpen}>
        Create
      </Button>
      <NewTaskDialog open={open} onClose={handleClose} />
    </Fragment>
  );
}

export default App;
