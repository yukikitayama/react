import { useRef } from "react";

import Input from "./components/Input.tsx";
import Button from "./components/Button.tsx";
import Container from "./components/Container.tsx";
import Form, { type FormHandle } from "./components/Form.tsx";

function App() {
  const customForm = useRef<FormHandle>(null);
  // const input = useRef<HTMLInputElement>(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customForm.current?.clear();
  }

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
      {/* <Input label="Test" id="test" ref={input} /> */}
      <Form onSave={handleSave} ref={customForm}>
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="Age" id="age" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
