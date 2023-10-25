import React from "react";
import StaticCounter from "./component/StaticCounter";
import DynamicCounter from "./component/DynamicCounter";

const App = () => {
  return (
    <div>
      <StaticCounter />
      <DynamicCounter />
    </div>
  );
};

export default App;
