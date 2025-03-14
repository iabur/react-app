import { useState } from "react";
function App() {
  const [persion, setPersion] = useState({
    firstName: "John",
    lastName: "Doe",
    age: 20,
  });

  return (
    <div>
      {persion.firstName} {persion.lastName}
    </div>
  );
}

export default App;
