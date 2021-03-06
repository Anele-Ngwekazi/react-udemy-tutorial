import React from "react";

const person = props => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I am {props.name} and {props.age}
      </p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
