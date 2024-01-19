import React, { useState } from "react";

const FunctionComponent = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p> This is a Function Component</p>
      <button onClick={() => setCount(count + 1)}>
        Click me to increment by 1
      </button>
      <h2>{count}</h2>
      <h4>
        My company is: {props.name} it is of {props.age} years old and the
        author would be {props.author}
      </h4>
      <input onChange={(e) => console(e.target.value)} /> //used to give an
      input by the users in the box
    </div>
  );
};

export default FunctionComponent;

//  props: {
//   name: "Devtown",
//   age: 20,
//   author: "Sakshi",
// }
