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

const Statistic = (props) => {
  const { text, value, isPercentage = false } = props;

  if (isPercentage) {
    return (
      <div>
        <p>{text} {value} %</p>
      </div>
    );
  }

  return (
    <div>
      <p>{text} {value}</p>
    </div>
  );
};

const Statistics = (props) => {
  const { good, neutral, bad } = props;

  const total = good + neutral + bad;

  const average = () => {
    const score = (good * 1) + (neutral * 0) + (bad * -1);
    return score / total;
  };

  const positivePercentage = () => {
    return (good / total) * 100;
  };

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <div>
      <Statistic text='good' value={good} />
      <Statistic text='neutral' value={neutral} />
      <Statistic text='bad' value={bad} />
      <Statistic text='all' value={total} />
      <Statistic text='average' value={average()} />
      <Statistic text='positive' value={positivePercentage()} isPercentage />
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
