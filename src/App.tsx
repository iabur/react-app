import { useState } from "react";
import Message from "./Message";

function App() {
  const [student, setStudent] = useState(["Iabur ", "Rakib ", "Probal "]);

  const handleClick = () => {
    setStudent(student.map((student) => student + " Rakib"));
    setStudent(student.filter((student) => student !== "Iabur "));
  };

  return (
    <div>
      <h1>{student.map((student) => student)}</h1>
      <button onClick={handleClick}>Student</button>
    </div>
  );
}

export default App;
