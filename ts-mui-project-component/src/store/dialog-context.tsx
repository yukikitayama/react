import React, { useState } from "react";

import Task from "../models/task";

type DialogContextObj = {
  isDialogOpen: boolean;
  isUpdateDialogOpen: boolean;
  closing: boolean;
  selectedTask: Task | null;
  openDialog: () => void;
  closeDialog: () => void;
  openUpdateDialog: () => void;
  closeUpdateDialog: () => void;
  setSelectedTask: (task: Task) => void;
};

interface Props {
  children: React.ReactNode;
}

const initialTask = {
  id: "",
  project: "",
  task: "",
  priority: "",
  startDate: "",
  dueDate: "",
  labels: [],
  status: "",
};

export const DialogContext = React.createContext<DialogContextObj>({
  isDialogOpen: false,
  isUpdateDialogOpen: false,
  closing: false,
  selectedTask: initialTask,
  openDialog: () => {},
  closeDialog: () => {},
  openUpdateDialog: () => {},
  closeUpdateDialog: () => {},
  setSelectedTask: (task: Task) => {},
});

const DialogContextProvider: React.FC<Props> = ({ children }) => {
  const [dialogState, setDialogState] = useState(false);
  const [updateDialogState, setUpdateDialogState] = useState(false);
  const [closingState, setClosingState] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task>(initialTask);

  const openDialogHandler = () => {
    setDialogState(true);
  };

  const closeDialogHandler = () => {
    setClosingState(prev => !prev);
    setDialogState(false);
  };

  const openUpdateDialogHandler = () => {
    setUpdateDialogState(true);
  };

  const closeUpdateDialogHandler = () => {
    setClosingState(prev => !prev);
    setUpdateDialogState(false);
  };

  const setSelectedTaskHandler = (task: Task) => {
    setSelectedTask(task);
  };

  const contextValue: DialogContextObj = {
    isDialogOpen: dialogState,
    isUpdateDialogOpen: updateDialogState,
    closing: closingState,
    selectedTask: selectedTask,
    openDialog: openDialogHandler,
    closeDialog: closeDialogHandler,
    openUpdateDialog: openUpdateDialogHandler,
    closeUpdateDialog: closeUpdateDialogHandler,
    setSelectedTask: setSelectedTaskHandler,
  };

  return (
    <DialogContext.Provider value={contextValue}>
      {children}
    </DialogContext.Provider>
  );
};

export default DialogContextProvider;
