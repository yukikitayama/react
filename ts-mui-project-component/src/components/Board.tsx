import { useState, useEffect, useCallback, Fragment } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import TaskCard from "./TaskCard";
import Task from "../models/task";

const Board = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTasks = useCallback(async () => {
    setIsLoading(true);

    const url = `${process.env.REACT_APP_API_URL}/project`;
    const response = await fetch(url);
    const data = await response.json();

    setTasks(data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <Fragment>
      {isLoading && <p>Loading...</p>}
      <Grid container direction="row" spacing={2} p={2}>
        <Grid item xs={4}>
          <Paper sx={{ p: 2 }} variant="outlined" square>
            TO DO
            {!isLoading &&
              tasks
                .filter((task) => task.status === "to do")
                .map((task) => (
                  <Grid item key={task.id} m={1}>
                    <TaskCard
                      task={task.task}
                      dueDate={task.dueDate}
                      priority={task.priority}
                    />
                  </Grid>
                ))}
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{ p: 2 }} variant="outlined" square>
            IN PROGRESS
            {!isLoading &&
              tasks
                .filter((task) => task.status === "in progress")
                .map((task) => (
                  <Grid item key={task.id} m={1}>
                    <TaskCard
                      task={task.task}
                      dueDate={task.dueDate}
                      priority={task.priority}
                    />
                  </Grid>
                ))}
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{ p: 2 }} variant="outlined" square>
            DONE
            {!isLoading &&
              tasks
                .filter((task) => task.status === "done")
                .map((task) => (
                  <Grid item key={task.id} m={1}>
                    <TaskCard
                      task={task.task}
                      dueDate={task.dueDate}
                      priority={task.priority}
                    />
                  </Grid>
                ))}
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Board;
