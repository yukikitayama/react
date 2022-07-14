import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const TaskCard: React.FC<{ task: string; dueDate: string, priority: string }> = (props) => {
  return (
    <Card>
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
    </Card>
  );
};

export default TaskCard;
