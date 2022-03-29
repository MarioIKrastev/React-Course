import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const SET_EXPENSES = [
  {
    id: 1,
    title: "Car Insurance",
    amount: 249.0,
    date: new Date(2022, 2, 25),
  },
  {
    id: 2,
    title: "Olio",
    amount: 2490.0,
    date: new Date(2022, 3, 26),
  },
  {
    id: 3,
    title: "Food",
    amount: 900.8,
    date: new Date(2023, 6, 15),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(SET_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
