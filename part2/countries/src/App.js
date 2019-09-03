import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Country from './components/Country';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [countriesToShow, setCountriesToShow] = useState([]);

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data);
        setCountriesToShow(response.data);
      });
  }, []);

  const handleSearchQueryChange = (event) => {
    setCountriesToShow(countries
      .filter((country) =>
        country.name.toLowerCase()
          .includes(event.target.value.toLowerCase()))
    );

    if (event.target.value === '') {
      setCountriesToShow(countries);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const display = () => {
    if (countriesToShow.length > 10) {
      return <div>Too many matches, specify another filter</div>;
    } else if (countriesToShow.length > 1) {
      return countriesToShow.map((country) =>
        <div key={country.numericCode}>
          {country.name}
          <button id={country.numericCode}
            onClick={handleShowCountry}
          >
            show
          </button>
        </div>
      );
    } else if (countriesToShow.length === 1) {
      return <Country country={countriesToShow[0]} />;
    } else {
      return <></>;
    }
  };

  const handleShowCountry = (event) => {
    const code = event.target.id;
    setCountriesToShow(
      countriesToShow.filter((country, i) => country.numericCode === code)
    );
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        find countries <input onChange={handleSearchQueryChange} />
      </form>
      {display()}
    </div>
  );
};

export default App;
