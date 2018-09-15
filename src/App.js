import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id:'asdfadsf', name: 'Max', age: 28},
      {id:'fadsvvasd', name: 'Jordan', age:20},
      {id:'asdfvradfh', name: 'bill', age: 25},
      {id:'asdfegsd', name: 'John Cena', age: 26}
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangedHadler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style ={
      backgroundColor:'white',
      font: "inherit",
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
        {this.state.persons.map((person, index) => {
          return(
            <Person key={person.id} name={person.name} age={person.age} click={() => this.deletePersonHandler(index)} changed={(event) => this.nameChangedHadler(event, person.id)} />
          )
        })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, im a react App!</h1>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Cards</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hi i\'m a React App!!"));
  }
}

export default App;
