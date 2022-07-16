import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";

import { DialogContext } from "../store/dialog-context";

const TaskCard: React.FC<{
  task: string;
  dueDate: string;
  priority: string;
}> = (props) => {
  const dialogCtx = useContext(DialogContext);  

  return (
    <Card>
      <CardActionArea onClick={dialogCtx.openDialog}>
        <CardContent>
          <Typography variant="subtitle1" component="div">
            {props.task}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.dueDate}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.priority}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TaskCard;
