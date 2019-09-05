import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Title = ({ text }) => <div><h1>{text}</h1></div>;
const Quote = ({ text }) => <div>{text}</div>;
const Votes = ({ count }) => <div>has {count} votes</div>;

const Anecdote = (props) => {
  const { quoteText, voteCount } = props;
  return (
    <>
      <Quote text={quoteText} />
      <Votes count={voteCount} />
    </>
  );
};
const App = (props) => {
  const { anecdotes } = props;
  const [selected, setSelected] = useState(0); // index of selected value
  const [points, setPoints] = useState(
    new Array(anecdotes.length).fill(0)
  );
  const [max, setMax] = useState(0); // index of max value

  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  const handleRandomClick = () => {
    setSelected(getRandomInt(anecdotes.length));
  };

  const handleVoteClick = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);

    updateMostVoted();
  };

  const updateMostVoted = () => {
    const maxVotes = Math.max(...points);
    setMax(points.indexOf(maxVotes));
  };

  return (
    <div>
      <Title text='Anecdote of the day' />
      <Anecdote
        quoteText={anecdotes[selected]}
        voteCount={points[selected]}
      />
      <button onClick={handleVoteClick}>vote</button>
      <button onClick={handleRandomClick}>next anecdote</button>
      <Title text='Anecdote with most votes' />
      <Anecdote
        quoteText={anecdotes[max]}
        voteCount={points[max]}
      />
    </div>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
