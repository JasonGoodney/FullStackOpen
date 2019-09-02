import React from 'react';

const Notification = ({ message, isError = false }) => {
  if (message === null) {
    return null;
  }

  const successStyle = {
    color: 'green',
    background: 'lightgray',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  };

  const errorStyle = {
    color: 'red',
    background: 'lightgray',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  };

  return (
    <div style={isError ? errorStyle : successStyle}>
      {message}
    </div>
  );
};

export default Notification
;
