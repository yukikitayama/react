import { Fragment } from "react";

import DialogContextProvider from "./store/dialog-context";
import Home from "./pages/Home";

function App() {
  return (
    <Fragment>
      <DialogContextProvider>
        <Home />
      </DialogContextProvider>
    </Fragment>
  );
}

export default App;
