import { useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [category, setCategory] = useState<string>("");

  return (
    <div>
      <h1>Select Category</h1>
      <select
        className="form-option"
        onClick={(event) =>
          setCategory((event.target as HTMLSelectElement).value)
        }
      >
        <option value=""></option>
        <option value="Household">Household</option>
        <option value="Clothing">Clothing</option>
      </select>
      <ProductList category={category} />
    </div>
  );
}

export default App;
