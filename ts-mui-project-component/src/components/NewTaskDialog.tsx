import { useState } from 'react';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

const projects: string[] = [
  "Web Application",
  "Investment",
  "Fitness",
  "Skill and Knowledge",
];

const priorities: string[] = [
  'High',
  'Medium',
  'Low'
];

const NewTask: React.FC<{ open: boolean; onClose: () => void }> = (props) => {
  const [project, setProject] = useState('');

  const handleProjectChange = (event: SelectChangeEvent) => {
    setProject(event.target.value as string);
  };
  
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogTitle>Create task</DialogTitle>

      <InputLabel>Project</InputLabel>
      <Select value={project} onChange={handleProjectChange} >
        {projects.map(project => (
          <MenuItem key={project} value={project}>{project}</MenuItem>
        ))}
      </Select>

      <TextField margin="dense" label="Summary" type="text" fullWidth variant="standard"/>

      <InputLabel>Priority</InputLabel>
    </Dialog>
  );
};

export default NewTask;
