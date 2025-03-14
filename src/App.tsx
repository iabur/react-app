import { useState } from "react";
import { produce } from "immer";

function App() {
  const [student, setStudent] = useState(["Iabur ", "Rakib ", "Probal "]);

  const handleClick = () => {
    setStudent(
      produce((draft) => {
        draft.push("Rakib");
      })
    );
  };

  return (
    <div>
      <h1>{student.map((student) => student)}</h1>
      <button onClick={handleClick}>Student</button>
    </div>
  );
}

export default App;
