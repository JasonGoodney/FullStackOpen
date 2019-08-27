import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Title = ({ text }) => (
  <div><h1>{text}</h1></div>
);

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
};

const StatisticLabel = ({ text, counter }) => <p>{text} {counter}</p>;

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <Title text='give feedback' />
      <Button text='good' onClick={handleGoodClick} />
      <Button text='neutral' onClick={handleNeutralClick} />
      <Button text='bad' onClick={handleBadClick} />
      <Title text='statistics' />
      <StatisticLabel text='good' counter={good} />
      <StatisticLabel text='neutral' counter={neutral} />
      <StatisticLabel text='bad' counter={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
