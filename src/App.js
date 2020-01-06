import React, { Component } from "react";
import Person from "./Person/Person";
import "./styles.css";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
    ],
    otherState: "some other value"
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: newName, age: 29 },
        { name: "Stephanie", age: 26 }
      ]
    });
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Stephanie", age: 26 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello, I am a react App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler("Maximum")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(this, "Max!")}
          changed={this.nameChangeHandler}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
