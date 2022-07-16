import { Fragment, useContext } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import TaskDialog from "../components/TaskDialog";
import Board from "../components/Board";
import { DialogContext } from "../store/dialog-context";

const Home = () => {
  const dialogCtx = useContext(DialogContext);
  
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
          <li>Delete a task</li>
          <li>Archive a task</li>
        </ul>
      </div>
      <Button variant="contained" onClick={dialogCtx.openDialog}>
        Create
      </Button>
      <TaskDialog />

      <Board />
    </Fragment>
  );
};

export default Home;
