import React from 'react';
import Country from './Country';

const Content = ({ countries }) => {
  const display = () => {
    if (countries.length > 10) {
      return <p>Too many matches, specify another filter</p>;
    } else if (countries.length > 1) {
      return countries.map((country) =>
        <p key={country.numericCode}>{country.name}</p>);
    } else if (countries.length === 1) {
      return <Country country={countries[0]} />;
    } else {
      return <></>;
    }
  };

  return (
    <div>
      {display()}
    </div>
  );
};

export default Content;
