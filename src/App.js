import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Person from './Person/Person'

const StyledButton = styled.button`
      background-color: ${props => props.alt ? 'red' : 'green'};
      color: white;
      font: inherit;
      border: 1px solid blue;
      padding: 8px;
      cursor: pointer;

      &:hover {
        background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
        color: black;
      }
      `;
class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 29 }
    ],
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.find(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHalder = (personIndex) => {
    //create copy to update IMMUTABLY
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {
    const style = {

    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHalder(index)}
              change={(event) => this.nameChangeHandler(event, person.id)}
              key={person.id} />
          })}
        </div>
      );
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    let classes = [];
    if (this.state.persons.length == 1) {
      classes.push('red');
    }
    if (this.state.persons.length == 0) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1> Hi, I am React App</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <StyledButton
          alt={this.state.showPersons}
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Name</StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;
