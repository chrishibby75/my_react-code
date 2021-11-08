import React, { Fragment } from "react";
import BackwardCounter from "./components/BackwardCounter/BackwardCounter";
import ForwardCounter from "./components/ForwardCounter/ForwardCouner";

const App = () => {
  return (
    <Fragment>
      <ForwardCounter />
      <BackwardCounter />
    </Fragment>
  )
};

export default App;