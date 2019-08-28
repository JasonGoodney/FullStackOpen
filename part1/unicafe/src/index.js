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

const Statistics = (props) => {
  const { good, neutral, bad } = props;

  const total = good + neutral + bad;

  const average = () => total / 3;

  const positivePercentage = () => {
    if (good === 0) {
      return 0;
    }
    return (good / total) * 100;
  };

  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {average()}</p>
      <p>positive {positivePercentage()} %</p>
    </div>
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
