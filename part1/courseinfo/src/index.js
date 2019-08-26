import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Part = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
  );
};

const Content = (props) => {
  console.log(props.part1);
  return (
    <>
      <Part
        part={props.part1.part} exercises={props.part1.exercises}
      />
      <Part
        part={props.part2.part} exercises={props.part2.exercises}
      />
      <Part
        part={props.part3.part} exercises={props.part3.exercises}
      />
    </>
  );
};

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.total}</p>
    </>
  );
};

const App = () => {
  const course = 'Half Stack Application development';
  const part1 = 'Fundamentals fo React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  const parts = {
    part1: { part: part1, exercises: exercises1 },
    part2: { part: part2, exercises: exercises2 },
    part3: { part: part3, exercises: exercises3 }
  };
  return (
    <div>
      <Header course={course} />
      <Content {...parts} />
      <Total
        total={[exercises1, exercises2, exercises3].reduce((a, b) => a + b, 0)} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
