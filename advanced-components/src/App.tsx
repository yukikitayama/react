import { useRef } from "react";

import Input from "./components/Input.tsx";
import Button from "./components/Button.tsx";
import Container from "./components/Container.tsx";

function App() {
  const input = useRef<HTMLInputElement>(null);

  return (
    <main>
      {/* <Input id="name" label="Your name" type="text" />
    <Input id="age" label="Your age" type="number" /> */}
      {/* <p>
      <Button>A Button</Button>
    </p>
    <p>
      <Button href="https://google.com">A Link</Button>
    </p> */}
      {/* <Container as={Button}>Click me</Container> */}
      <Input label="Test" id="test" ref={input} />
    </main>
  );
}

export default App;
