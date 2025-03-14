import { useState } from "react";
import Message from "./Message";

function App() {
  const [drink, setDrink] = useState({
    title: "Coke",
    price: 10,
  });

  const handleClick = () => {
    setDrink({ ...drink, price: 5 });
  };

  return (
    <div>
      <h1>{drink.price}</h1>
      <button onClick={handleClick}>Change Drink</button>
    </div>
  );
}

export default App;
