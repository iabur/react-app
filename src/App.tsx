import { useState } from "react";
import ExpenseList from "./components/expense-tracker/components/ExpenseList";
import ExpenseFilter from "./components/expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./components/expense-tracker/components/ExpenseForm";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

type ExpenseFormData = {
  description: string;
  amount: number;
  category: string;
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Food", "Entertainment", "Other"];
  const [selectedExpense, setSelectedExpense] = useState<
    (ExpenseFormData & { id: number }) | null
  >(null);

  const [expenses, setExpenses] = useState<Expense[]>([
    { id: 1, description: "Food", amount: 10, category: "Food" },
    {
      id: 2,
      description: "Entertainment",
      amount: 20,
      category: "Entertainment",
    },
    { id: 3, description: "Other", amount: 30, category: "Other" },
  ]);

  const filteredExpenses =
    selectedCategory === "All"
      ? expenses
      : expenses.filter((expense) => expense.category === selectedCategory);

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const onSubmit = (data: ExpenseFormData) => {
    if (selectedExpense) {
      setExpenses(
        expenses.map((expense) =>
          expense.id === selectedExpense.id
            ? { ...data, id: selectedExpense.id }
            : expense
        )
      );
      setSelectedExpense(null);
    } else {
      const newExpense = {
        ...data,
        id: Math.max(0, ...expenses.map((e) => e.id)) + 1,
      };
      setExpenses([...expenses, newExpense]);
    }
  };

  const onEdit = (expense: Expense) => {
    setSelectedExpense(expense);
  };

  const handleCancel = () => {
    setSelectedExpense(null);
  };

  return (
    <div>
      <div className="mb-3">
        <ExpenseFilter
          categories={categories}
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <div className="mb-5">
        <ExpenseForm
          categories={categories.filter((c) => c !== "All")}
          onSubmit={onSubmit}
          expense={selectedExpense}
          onCancel={handleCancel}
        />
      </div>
      <ExpenseList
        expenses={filteredExpenses}
        onDelete={handleDelete}
        onEdit={onEdit}
      />
    </div>
  );
}

export default App;
