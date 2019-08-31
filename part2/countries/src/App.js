import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Content from './components/Content';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [countries, setCountries] = useState([]);
  const [countriesToShow, setCountriesToShow] = useState([]);

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log(response.data);
        setCountries(response.data);
      });
  }, []);

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
    const filter = countries
      .filter((country) =>
        country.name.toLowerCase().includes(searchQuery.toLowerCase()));
    setCountriesToShow(filter);
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        find countries <input onChange={handleSearchQueryChange} />
      </form>
      <Content countries={countriesToShow} />
    </div>
  );
};

export default App;
