import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Chip from "@mui/material/Chip";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const projects: string[] = [
  "Web Application",
  "Investment",
  "Fitness",
  "Skill and Knowledge",
];

const priorities: string[] = ["High", "Medium", "Low"];

const chips: string[] = [
  "python",
  "javascript",
  "statistics",
  "computer science",
  "cloud",
  "tennis",
  "react",
];

const NewTask: React.FC<{ open: boolean; onClose: () => void }> = (props) => {
  const [project, setProject] = useState(projects[0]);
  const [priority, setPriority] = useState(priorities[1]);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [dueDate, setDueDate] = useState<Date | null>(null);
  const [labels, SetLabels] = useState<string[]>([]);

  const handleProjectChange = (event: SelectChangeEvent) => {
    setProject(event.target.value as string);
  };

  const handlePriorityChange = (event: SelectChangeEvent) => {
    setPriority(event.target.value as string);
  };

  const handleLabelChange = (event: SelectChangeEvent<typeof labels>) => {
    const {
      target: { value },
    } = event;
    SetLabels(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Dialog open={props.open} onClose={props.onClose} fullWidth maxWidth="md">
      <DialogTitle>Create task</DialogTitle>
      <DialogContent>
        <Stack spacing={3}>
          <InputLabel>Project</InputLabel>
          <Select value={project} onChange={handleProjectChange}>
            {projects.map((project) => (
              <MenuItem key={project} value={project}>
                {project}
              </MenuItem>
            ))}
          </Select>

          <TextField
            margin="dense"
            label="Task"
            type="text"
            fullWidth
            variant="standard"
          />

          <InputLabel>Priority</InputLabel>
          <Select value={priority} onChange={handlePriorityChange}>
            {priorities.map((priority) => (
              <MenuItem key={priority} value={priority}>
                {priority}
              </MenuItem>
            ))}
          </Select>

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Start date"
              value={startDate}
              onChange={(newValue) => {
                setStartDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            ></DatePicker>

            <DatePicker
              label="Due date"
              value={dueDate}
              onChange={(newValue) => {
                setDueDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            ></DatePicker>
          </LocalizationProvider>

          <InputLabel>Labels</InputLabel>
          <Select
            multiple
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

        </Stack>
      </DialogContent>
      <DialogActions>
        <Button variant="text">Cancel</Button>
        <Button variant="contained">Create</Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewTask;
