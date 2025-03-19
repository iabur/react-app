import { useState } from "react";
import ExpenseList from "./components/expense-tracker/components/ExpenseList";
import ExpenseFilter from "./components/expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./components/expense-tracker/components/ExpenseForm";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Food", "Entertainment", "Other"];

  const [expenses, setExpenses] = useState([
    { id: 1, description: "Food", amount: 10, category: "Food" },
    {
      id: 2,
      description: "Entertainment",
      amount: 20,
      category: "Entertainment",
    },
    {
      id: 3,
      description: "Other",
      amount: 30,
      category: "Other",
    },
  ]);

  const filteredExpenses =
    selectedCategory === "All"
      ? expenses
      : expenses.filter((expense) => expense.category === selectedCategory);

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const onSubmit = (data: any) => {
    setExpenses([...expenses, { ...data, id: expenses.length + 1 }]);
  };

  return (
    <div>
      <div className="mb-3">
        <ExpenseFilter
          categories={categories}
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList expenses={filteredExpenses} onDelete={handleDelete} />
      <ExpenseForm
        categories={categories.filter((c) => c !== "All")}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default App;
