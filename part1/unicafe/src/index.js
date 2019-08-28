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

const StatisticLabel = ({ text, statistic, isPercentage }) => {
  if (isPercentage) {
    return (
      <p>{text} {statistic} %</p>
    );
  }

  return (
    <p>{text} {statistic}</p>
  );
};

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
      <StatisticLabel text='good' statistic={good} />
      <StatisticLabel text='neutral' statistic={neutral} />
      <StatisticLabel text='bad' statistic={bad} />
      <StatisticLabel text='all'
        statistic={good + neutral + bad}
      />
      <StatisticLabel text='average'
        statistic={(good + neutral + bad) / 3}
      />
      <StatisticLabel text='positive' isPercentage
        statistic={(good / (good + neutral + bad)) * 100}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
