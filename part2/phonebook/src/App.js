import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Person from './components/Person';
import PersonForm from './components/PersonForm';
import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    personService
      .getAll()
      .then(intialPersons => {
        setPersons(intialPersons);
      });
  }, []);

  const addName = (event) => {
    event.preventDefault();

    const personObject = {
      name: newName,
      number: newNumber
    };

    const hasName = persons
      .map((person) => person.name)
      .includes(newName);

    if (hasName) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const person = persons.find(p => p.name === newName);
        updatePerson(person.id);
        setNewName('');
        setNewNumber('');
      }
      return;
    }

    personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson));
        setNewName('');
        setNewNumber('');
      });
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

  const removePerson = person => {
    if (window.confirm(`Delete ${person.name}`)) {
      personService
        .remove(person.id)
        .then(returnedPerson => {
          const copy = [...persons];
          const index = persons.indexOf(person);
          if (index !== -1) {
            copy.splice(index, 1);
            setPersons(copy);
          }
        });
    }
  };

  const updatePerson = id => {
    const person = persons.find(p => p.id === id);
    const updatedPerson = { ...person, number: newNumber };

    console.log('object', updatePerson);

    personService
      .update(id, updatedPerson)
      .then(returnedPerson => {
        console.log(returnedPerson);
        setPersons(
          persons.map(p => p.id !== id ? p : returnedPerson)
        );
      })
      .catch(error => {
        window.alert(
          `${error}: ${updatedPerson.name} was already deleted from the server`
        );
        setPersons(person.filter(p => p.id !== id));
      });
  };

  const personRows = () => {
    return persons
      .filter((person) =>
        person.name.toLowerCase().includes(searchQuery.toLowerCase()))
      .map((person) =>
        <Person
          key={person.id}
          person={person}
          removePerson={() => removePerson(person)}
        />
      );
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
      {/* <Persons
        persons={persons}
        searchQuery={searchQuery}
        removePerson={() => persons.map(person => removePerson(person.id))}
      /> */}
      {personRows()}
    </div>
  );
};

export default App;
