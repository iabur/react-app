import { useState } from "react";
import Message from "./Message";

function App() {
  const [persion, setPersion] = useState({
    firstName: "John",
    lastName: "Doe",
    age: 20,
  });

  return (
    <div>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      {persion.firstName} {persion.lastName}
    </div>
  );
}

export default App;
