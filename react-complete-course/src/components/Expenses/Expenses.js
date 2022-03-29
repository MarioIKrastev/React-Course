import { useState } from "react";

import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const expensesByYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter startUp={filteredYear} onFilter={filterChangeHandler} />
        <ExpensesList expenses={expensesByYear} />
      </Card>
    </li>
  );
};

export default Expenses;
