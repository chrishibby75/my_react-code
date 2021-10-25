import React, { useState, useCallback } from "react";
import Button from "./components/Button/Button";
import DemoOutput from "./components/DemoOutput/DemoOutput";
import "./App.css";

const App = () => {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("App Running");

  const toggleParagraph = useCallback(() => {
    if (allowToggle) {
    setShowParagraph(prevShowParagraph => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(prevToggle => !prevToggle);
  };

  return(
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}/>
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraph}>Toggle Paragraph</Button>
    </div>
  );
};

export default  App;