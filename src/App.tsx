import { useState } from "react";
import ExpenseList from "./components/expense-tracker/components/ExpenseList";
function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Groceries" },
    { id: 2, description: "bbb", amount: 20, category: "Utilities" },
    { id: 3, description: "ccc", amount: 30, category: "Entertainment" },
  ]);

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div>
      <ExpenseList expenses={expenses} onDelete={handleDelete} />
    </div>
  );
}

export default App;
