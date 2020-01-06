import React from "react";

const person = props => {
  return (
    <div>
      <p onClick={props.click}>
        I am {props.name} and {props.age}
      </p>
      <input type="text" onChange={props.changed} />
    </div>
  );
};

export default person;