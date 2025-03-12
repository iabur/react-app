import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button
        color="success"
        text="Click me"
        onClick={() => console.log("clicked")}
      />
    </div>
  );
}

export default App;
