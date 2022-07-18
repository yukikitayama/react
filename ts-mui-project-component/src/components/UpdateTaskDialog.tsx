import React, { useState, useEffect, useContext } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Chip from "@mui/material/Chip";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

// import Task from "../models/task";
import { DialogContext } from "../store/dialog-context";

const projects: string[] = [
  "Web Application",
  "Investment",
  "Fitness",
  "Skill and Knowledge",
];

const priorities = [
  { label: "High", value: "high" },
  { label: "Medium", value: "medium" },
  { label: "Low", value: "low" },
];

const chips: string[] = [
  "python",
  "javascript",
  "statistics",
  "computer science",
  "cloud",
  "tennis",
  "react",
  "us-tax",
];

const statuses = [
  { label: "To do", value: "to do" },
  { label: "In progress", value: "in progress" },
  { label: "Done", value: "done" },
];

// const UpdateTaskDialog: React.FC<{ task: Task; }> = (props) => {
const UpdateTaskDialog: React.FC = () => {
  const [status, setStatus] = useState<string>("");
  const [project, setProject] = useState<string>("");
  const [priority, setPriority] = useState<string>("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [dueDate, setDueDate] = useState<Date | null>(null);
  const [labels, setLabels] = useState<string[]>([]);
  const [taskId, setTaskId] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  // const taskInputRef = useRef<HTMLInputElement>(null);
  const [taskText, setTaskText] = useState("");
  const dialogCtx = useContext(DialogContext);

  useEffect(() => {
    const selectedTask = dialogCtx.selectedTask!;

    // console.log(selectedTask);

    setStatus(selectedTask.status);
    setProject(selectedTask.project);
    setPriority(selectedTask.priority);
    setStartDate(new Date(selectedTask.startDate));
    setDueDate(new Date(selectedTask.dueDate));
    // Nullish coalescing operator (??) allow me to use if null then []
    setLabels(selectedTask.labels ?? []);
    setTaskId(selectedTask.id);
    setTaskText(selectedTask.task);
  }, [dialogCtx.selectedTask]);

  const handleStatusChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };

  const handleProjectChange = (event: SelectChangeEvent) => {
    setProject(event.target.value as string);
  };

  const taskTextChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTaskText(event.target.value);
  };

  const handlePriorityChange = (event: SelectChangeEvent) => {
    setPriority(event.target.value as string);
  };

  const handleLabelChange = (event: SelectChangeEvent<typeof labels>) => {
    const {
      target: { value },
    } = event;
    setLabels(typeof value === "string" ? value.split(",") : value);
  };

  const submitDataHandler = async () => {
    setIsLoading(true);

    // const enteredTask = taskInputRef.current?.value;
    const extractedStartDate = new Date(
      startDate!.getTime() - startDate!.getTimezoneOffset() * 60 * 1000
    )
      .toISOString()
      .split("T")[0];
    const extractedDueDate = new Date(
      dueDate!.getTime() - startDate!.getTimezoneOffset() * 60 * 1000
    )
      .toISOString()
      .split("T")[0];

    const response = await fetch(`${process.env.REACT_APP_API_URL}/project`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: status,
        project: project,
        // task: enteredTask,
        task: taskText,
        priority: priority!.toLowerCase(),
        startDate: extractedStartDate,
        dueDate: extractedDueDate,
        labels: labels,
        id: taskId
      }),
    });

    setIsLoading(false);

    if (response.ok) {
      dialogCtx.closeUpdateDialog();
    }
  };

  const deleteTaskHandler = async () => {
    setIsLoading(true);

    const response = await fetch(`${process.env.REACT_APP_API_URL}/project`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: taskId,
      }),
    });

    setIsLoading(false);

    if (response.ok) {
      dialogCtx.closeUpdateDialog();
    }
  };

  const archiveTaskHandler = async () => {
    setIsLoading(true);

    const response = await fetch(`${process.env.REACT_APP_API_URL}/project`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: taskId,
      }),
    });

    setIsLoading(false);

    if (response.ok) {
      dialogCtx.closeUpdateDialog();
    }
  };

  return (
    <Dialog
      open={dialogCtx.isUpdateDialogOpen}
      onClose={dialogCtx.closeUpdateDialog}
      fullWidth
      maxWidth="md"
    >
      <DialogTitle>Update task</DialogTitle>
      <DialogContent>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="stretch"
          spacing={2}
        >
          <Grid item>
            <InputLabel>Status</InputLabel>
            <Select value={status} onChange={handleStatusChange}>
              {statuses.map((element) => (
                <MenuItem key={element.value} value={element.value}>
                  {element.label}
                </MenuItem>
              ))}
            </Select>
          </Grid>

          <Grid item>
            <InputLabel>Project</InputLabel>
            <Select value={project} onChange={handleProjectChange}>
              {projects.map((project) => (
                <MenuItem key={project} value={project}>
                  {project}
                </MenuItem>
              ))}
            </Select>
          </Grid>

          <Grid item>
            <TextField
              margin="dense"
              label="Task"
              type="text"
              fullWidth
              multiline
              variant="standard"
              // inputRef={taskInputRef}
              value={taskText}
              onChange={taskTextChangeHandler}
            />
          </Grid>

          <Grid item>
            <InputLabel>Priority</InputLabel>
            <Select value={priority} onChange={handlePriorityChange}>
              {priorities.map((element) => (
                <MenuItem key={element.value} value={element.value}>
                  {element.label}
                </MenuItem>
              ))}
            </Select>
          </Grid>

          <Grid item>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Start date"
                value={startDate}
                onChange={(newValue) => {
                  setStartDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              ></DatePicker>
            </LocalizationProvider>
          </Grid>

          <Grid item>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Due date"
                value={dueDate}
                onChange={(newValue) => {
                  setDueDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              ></DatePicker>
            </LocalizationProvider>
          </Grid>

          <Grid item>
            <InputLabel>Labels</InputLabel>
            <Select
              multiple
              fullWidth
              value={labels}
              onChange={handleLabelChange}
              input={<OutlinedInput label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {chips.map((chip) => (
                <MenuItem key={chip} value={chip}>
                  {chip}
                </MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="error" onClick={deleteTaskHandler}>
          Delete
        </Button>
        <Button
          variant="contained"
          color="warning"
          onClick={archiveTaskHandler}
        >
          Archive
        </Button>
        <Button variant="text" onClick={dialogCtx.closeUpdateDialog}>
          Cancel
        </Button>
        <Button variant="contained" onClick={submitDataHandler}>
          Update
        </Button>
      </DialogActions>
      {isLoading && <LinearProgress />}
    </Dialog>
  );
};

export default UpdateTaskDialog;
