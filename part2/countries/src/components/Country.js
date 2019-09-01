import React from 'react';

const Country = ({ country }) => {
  const { name, capital, population, languages, flag } = country;

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
      <img src={flag} alt='flag' width={100} height={100} />
    </div>
  );
};

export default Country;
