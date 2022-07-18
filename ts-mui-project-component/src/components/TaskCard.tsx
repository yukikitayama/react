import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";

import { DialogContext } from "../store/dialog-context";
import Task from "../models/task";

const TaskCard: React.FC<{
  task: Task;
}> = (props) => {
  const dialogCtx = useContext(DialogContext);
  
  const openUpdateDialogHandler = () => {
    // Set a certain task
    dialogCtx.setSelectedTask(props.task);

    // Open update task dialog
    dialogCtx.openUpdateDialog();
  };

  return (
    <Card>
      <CardActionArea onClick={openUpdateDialogHandler}>
        <CardContent>
          <Typography variant="subtitle1" component="div">
            {props.task.task}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.task.dueDate}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.task.priority}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TaskCard;
