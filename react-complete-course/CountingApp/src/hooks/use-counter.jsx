import { useState, useEffect } from "react";

const useCounter = (checker = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (checker) {
        setCounter((prevCounter) => prevCounter - 1);
      } else {
        setCounter((prevCounter) => prevCounter + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [checker]);
  return counter;
};

export default useCounter;
