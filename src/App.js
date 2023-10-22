import React from "react";
import StaticCounter from "./component/StaticCounter";
import DynamicCounter from "./component/DynamicCounter";
import Todo from "./component/simpleTodo/Todo";
import SimpleTodo from "./component/simpleTodo/SimpleTodo";

const App = () => {
  return (
    <>
      {/* <StaticCounter />
      <DynamicCounter /> */}
      <SimpleTodo />
    </>
  );
};

export default App;
