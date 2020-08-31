import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29}
    ],
    otherState:'blah'
  });

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {name: 'Maximilian', age: 28},
        {name: 'Manu', age: 29}
      ]
    })
  }

    return (
      <div className="App">
        <h1> Hi, I am React App</h1>
        <p>This is really working</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />


      </div>
    );
}

export default app;
