import Input from "./components/Input.tsx";
import Button from "./components/Button.tsx";
import Container from "./components/Container.tsx";

function App() {
  return <main>
    {/* <Input id="name" label="Your name" type="text" />
    <Input id="age" label="Your age" type="number" /> */}
    {/* <p>
      <Button>A Button</Button>
    </p>
    <p>
      <Button href="https://google.com">A Link</Button>
    </p> */}
    <Container as={Button} />
  </main>;
}

export default App;
