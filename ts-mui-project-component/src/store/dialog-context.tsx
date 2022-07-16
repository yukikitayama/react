import React, { useState } from "react";

type DialogContextObj = {
  isDialogOpen: boolean;
  openDialog: () => void;
  closeDialog: () => void;
};

interface Props {
  children: React.ReactNode;
}

export const DialogContext = React.createContext<DialogContextObj>({
  isDialogOpen: false,
  openDialog: () => {},
  closeDialog: () => {},
});

const DialogContextProvider: React.FC<Props> = ({ children }) => {
  const [dialogState, setDialogState] = useState(false);

  const openDialogHandler = () => {
    setDialogState(true);
  };

  const closeDialogHandler = () => {
    setDialogState(false);
  };

  const contextValue: DialogContextObj = {
    isDialogOpen: dialogState,
    openDialog: openDialogHandler,
    closeDialog: closeDialogHandler,
  };

  return (
    <DialogContext.Provider value={contextValue}>
      {children}
    </DialogContext.Provider>
  );
};

export default DialogContextProvider;
