// import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const expenses = [
    {
      title: "Car Insurance",
      amount: 249.0,
      date: new Date(2022, 2, 25),
    },
    {
      title: "Boobs Insurance",
      amount: 2490.0,
      date: new Date(2022, 3, 26),
    },
    {
      title: "Hause Insurance",
      amount: 900.8,
      date: new Date(2023, 6, 15),
    },
  ];
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
  // without create-react-app
  // if import React from 'react' is included
  //you should create DOM elements like that

  /* return React.createElement(
    "div",
    React.createElement("h2", {}, "Let's get started!"),
    React.createElement(Expenses, { items: expenses })
  ); */
};

export default App;
