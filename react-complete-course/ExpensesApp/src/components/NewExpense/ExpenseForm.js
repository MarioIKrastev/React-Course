import { useState } from "react";

import "../NewExpense/ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  /*  const [userInput, setUserInput] = useState({
    //collect the userinput data
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  }); */
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value); // we use the useState(setEnteredTitle) to save the value
    /* setUserInput({
      ...userInput, // featch all 3 userinputs key pairs above
      enteredTitle: event.target.value,
    });
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    }); */
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value); // we use the useState(setEnteredAmount) to save the value
    /* setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    }); */
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value); // we use the useState(setEnteredDate) to save the value
    /* setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    }); */
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpense(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancle}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
