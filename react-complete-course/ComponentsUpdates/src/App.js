import React, { useState, useCallback } from "react";

import Button from "./components/Button/Button";

import "./App.css";
import DemoOutput from "./components/demo/demoOutput";

function App() {
  const [showPara, setShowPara] = useState(false);
  const [allowShow, setAllowShow] = useState(false);

  const onClickHandler = useCallback(() => {
    if (allowShow) {
      setShowPara((prevShowPara) => !prevShowPara);
    }
  }, [allowShow]);

  const allowShowHandler = () => {
    setAllowShow(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showPara} />
      <Button onClick={allowShowHandler}>Allow showing</Button>
      <Button onClick={onClickHandler}>Show hidden content</Button>
    </div>
  );
}

export default App;
