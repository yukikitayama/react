import { useState, useEffect, useContext, useCallback, Fragment } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";

import TaskCard from "./TaskCard";
import Task from "../models/task";
import { DialogContext } from "../store/dialog-context";

const Board = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const dialogCtx = useContext(DialogContext);

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
  }, [fetchTasks, dialogCtx.closing]);
  // });

  return (
    <Fragment>
      {isLoading && <div><CircularProgress /></div>}
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
                      task={task}
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
                      task={task}
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
                      task={task}
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
