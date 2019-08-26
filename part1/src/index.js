import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
  return (
    <div>
      <p>hello {props.name}, you are {props.age} years old</p>
    </div>
  );
};

const App = () => {
  const name = 'peter';
  const age = 26;
  return (
    <>
      <h1>greetings</h1>
      <Hello name='George' age={26 + 10} />
      <Hello name={name} age={age} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
