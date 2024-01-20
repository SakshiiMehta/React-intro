// import logo from './logo.svg';
import "./App.css";
import ClassComponent from "./pages/ClassComponents";
import FunctionComponent from "./pages/FunctionComponent";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// HOC Layout
import BaseHoc from "./hoc/BaseHoc";

function App() {
  const author = "sakshi";

  const [name, Setname] = useState("DT");
  return (
    <Routes>
      <Route
        path="/"
        element={
          <BaseHoc>
            <ClassComponent />
          </BaseHoc>
        }
      />
      // Class component is used to call the path
      <Route
        path="/functional-component"
        element={
          <BaseHoc>
            <FunctionComponent name={name} age={10} author={author} />
          </BaseHoc>
        }
      />
    </Routes>
  );
}

export default App;
