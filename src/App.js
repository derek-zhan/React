import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Manu', age: 29}
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: event.target.value, age: 28},
        {name: 'Manu', age: 29}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1> Hi, I am React App</h1>
        <p>This is really working</p>
        <button onClick={() => this.switchNameHandler('Derek')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Maxi')}
          change={this.nameChangeHandler} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />


      </div>
    );
  }
}

export default App;
