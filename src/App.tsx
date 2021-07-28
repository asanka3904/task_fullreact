import React from "react";
import logo from "./logo.svg";

import "./App.scss";
import { Addform } from "./components/Addform";
import { SaveTodo, Todo } from "./interface/Todo";
import { ListTodo } from "./components/ListTodo";

function App() {
  return (
    <div className="App">
      <Addform />
      <ListTodo />
    </div>
  );
}

export default App;
