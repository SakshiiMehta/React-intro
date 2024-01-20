import React from "react";
import BaseHoc from "../hoc/BaseHoc";

class ClassComponent extends React.Component {
  //classcomponent will inherit component from react
  constructor(props) {
    super(props); //To call something that is already defined eg: to call the parent component (React.Component ) of the child component (Class Component)

    this.state = {
      name: "DevTown",
      age: "5",
    };
  }
  render() {
    return (
      <>
        // This is a fragment used instead of div
        <p>This is Class Components</p>;
      </>
    );
  }
}

export default BaseHoc(ClassComponent);
