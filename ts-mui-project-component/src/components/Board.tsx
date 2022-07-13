import { useState, useEffect, useCallback, Fragment } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import TaskCard from "./TaskCard";
import Task from "../models/task";

const Board = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTasks = useCallback(async () => {
    setIsLoading(true);

    const response = await fetch("https://xxx.com/xxx");
    const data = await response.json();

    setTasks(data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <Fragment>
      <h1>Board</h1>
      <Paper variant="outlined">
        {isLoading && <p>Loading...</p>}
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing={1}
          p={1}
        >
          {!isLoading &&
            tasks.map((element) => (
              <Grid item xs={6} key={element.id}>
                <TaskCard
                  task={element.task}
                  dueDate={element.dueDate}
                  priority={element.priority}
                />
              </Grid>
            ))}
        </Grid>
      </Paper>
    </Fragment>
  );
};

export default Board;
