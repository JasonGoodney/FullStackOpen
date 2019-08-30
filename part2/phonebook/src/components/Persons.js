import React from 'react';

const Persons = (props) => {
  const { persons, searchQuery = '' } = props;
  const rows = () => {
    return persons
      .filter((person) =>
        person.name.toLowerCase().includes(searchQuery.toLowerCase()))
      .map((person) =>
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      );
  };

  return (
    <div>
      {rows()}
    </div>
  );
};

export default Persons
;
