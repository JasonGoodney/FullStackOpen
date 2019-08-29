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

export default Course;
