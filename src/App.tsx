import { useState } from "react";
import Message from "./Message";

function App() {
  const [customer, setCustomer] = useState({
    name: "John",
    age: 20,
    address: {
      city: "New York",
      state: "NY",
      zip: "10001",
    },
  });

  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, city: "Los Angeles" },
    });
  };

  return (
    <div>
      <h1>{customer.address.city}</h1>
      <button onClick={handleClick}>Customer</button>
    </div>
  );
}

export default App;
