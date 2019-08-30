import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data);
      });
  }, []);

  const addName = (event) => {
    event.preventDefault();

    const hasName = persons
      .map((person) => person.name)
      .includes(newName);

    if (hasName) {
      window.alert(`${newName} is already added to phonebook`);
      return;
    }
    const personObject = {
      name: newName,
      number: newNumber
    };

    setPersons(persons.concat(personObject));
    setNewName('');
    setNewNumber('');
    console.log('number', newNumber);
  };

  const handleNewNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <div>debug: {searchQuery}</div>
      <h2>Phonebook</h2>
      <Filter
        searchQuery={searchQuery}
        onChange={handleSearchQueryChange}
      />
      <h2>Add a new</h2>
      <PersonForm
        onSubmit={addName}
        newName={newName}
        handleNewNameChange={handleNewNameChange}
        newNumber={newNumber}
        handleNewNumberChange={handleNewNumberChange}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        searchQuery={searchQuery}
      />
    </div>
  );
};

export default App;
