import Button from "./components/Button";
function App() {
  return (
    <div>
      <Button text="Click me" onClick={() => console.log("clicked")} />
    </div>
  );
}

export default App;
