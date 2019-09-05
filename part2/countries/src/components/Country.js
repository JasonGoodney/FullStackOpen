import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Country = ({ country }) => {
  const { name, capital, population, languages, flag } = country;
  const [currentWeather, setCurrentWeather] = useState({});

  useEffect(() => {
    axios
      .get(`http://api-cdn.apixu.com/v1/current.json?key=a784acade42443bc889154200190109&q=${name}`)
      .then(response => {
        setCurrentWeather(response.data.current);
      });
  }, []);

  const displayWeather = () => {
    const {
      condition,
      wind_kph: windKph,
      wind_dir: windDirection,
      temp_c: tempCelsius
    } = currentWeather;

    return (
      <div>
        <h3>Weather in {capital}</h3>
        <div>
          <h4 style={{ display: 'inline' }}>
            temperature:
          </h4>
          <p style={{ display: 'inline' }}> {tempCelsius} Celsius</p>
        </div>
        <img src={condition && iconSource(condition)} alt='icon' />

        <div>
          <h4 style={{ display: 'inline' }}>
            wind:
          </h4>
          <p style={{ display: 'inline' }}> {windKph} kph direction {windDirection}</p>
        </div>
      </div>
    );
  };

  const iconSource = (condition) => `https:${condition.icon}`;

  return (
    <div>
      <h1>{name}</h1>
      <div>capital {capital}</div>
      <div>population {population}</div>
      <h3>languages</h3>
      <ul>
        {
          languages.map((language) =>
            <li key={language.name}>
              {language.name}
            </li>
          )
        }
      </ul>
      <img src={flag} alt='flag' height={100} />
      {currentWeather && displayWeather()}
    </div>
  );
};

export default Country;
