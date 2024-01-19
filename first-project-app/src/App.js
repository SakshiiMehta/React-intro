// import logo from './logo.svg';
import "./App.css";
import ClassComponent from "./components/ClassComponents";
import FunctionComponent from "./components/FunctionComponent";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
function App() {
  const author = "sakshi";

  const [name, Setname] = useState("DT");
  return (
    <div className="App">
      <p>Class Components</p>
      <ClassComponent />
      <br />
      <p> FunctionComponent</p>
      {/* <FunctionComponent name="Devtown" age={20} author={author} /> */}
      <FunctionComponent name={name} age={20} author={author} />
    </div>
  );
}

export default App;
