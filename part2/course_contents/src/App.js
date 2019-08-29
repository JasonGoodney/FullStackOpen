import React from 'react';

const Course = ({ course }) => {
  return (
    <div>
      <Header text={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

const Header = ({ text }) => <h1>{text}</h1>;

const Content = ({ parts }) => {
  return (
    <ul>
      {parts.map((part) =>
        <Part key={part.id}
          part={part}
        />
      )}
    </ul>
  );
};

const Part = ({ part }) => {
  return (
    <li>{part.name} {part.exercises}</li>
  );
};

const Total = ({ parts }) => {
  const sumOfExercises = () => {
    return parts
      .map((part) => part.exercises)
      .reduce((a, b) => a + b, 0);
  };
  return (
    <h3>total of {sumOfExercises()} exercises</h3>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  };

  return (
    <div>
      <Course course={course} />
    </div>
  );
};

export default App;
