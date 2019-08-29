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
    <div>
      {parts.map((part) =>
        <Part key={part.id}
          part={part}
        />
      )}
    </div>
  );
};

const Part = ({ part }) => {
  return (
    <p>{part.name} {part.exercises}</p>
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
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ];

  const rows = () => {
    return courses.map((course) =>
      <>
        <Course key={course.id}
          course={course}
        />
      </>
    );
  };

  return (
    <div>
      {rows()}
    </div>
  );
};

export default App;
