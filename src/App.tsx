import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      {showAlert && (
        <Alert onClose={() => setShowAlert(false)}>
          <h1>Hello</h1>
        </Alert>
      )}
      <Button
        color="success"
        text="Click me"
        onClick={() => setShowAlert(true)}
      />
    </div>
  );
}

export default App;
