import { useState } from "react";

const useInput = (validateInput) => {
  const [enteredInput, setEnteredInput] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateInput(enteredInput);
  const hasError = !valueIsValid && isTouched;

  const valueHandler = (event) => {
    setEnteredInput(event.target.value);
  };
  const inputBluerHandler = (event) => {
    setIsTouched(true);
  };
  const reset = () => {
    setEnteredInput("");
    setIsTouched(false);
  };

  return {
    value: enteredInput,
    isValid: valueIsValid,
    hasError,
    valueHandler,
    inputBluerHandler,
    reset,
  };
};

export default useInput;
