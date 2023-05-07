import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 40, category: "Utilities" },
    { id: 2, description: "bbb", amount: 30, category: "Groceries" },
    { id: 3, description: "ccc", amount: 20, category: "Crockery" },
    { id: 4, description: "ddd", amount: 10, category: "Food" },
  ]);

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      ></ExpenseList>
    </div>
  );
}

export default App;
