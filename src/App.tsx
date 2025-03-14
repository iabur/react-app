import { useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
let count = 3;
function App() {
  const [items, setItems] = useState(["item1 ", "item2 "]);

  const handleClick = () => {
    setItems([...items, " item " + count]);
    count++;
  };

  return (
    <div>
      <Navbar itemsCount={items.length} />
      <Card items={items} />
      <button onClick={handleClick}>Add Item</button>
    </div>
  );
}

export default App;
