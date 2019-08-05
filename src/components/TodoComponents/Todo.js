import React from 'react';

const Chore = props => {
  return (
    <div
      className={`chore${props.chore.completed ? ' completed' : ''}`}
      onClick={() => props.toggleTask(props.chore.id)}
    >
      <p>{props.chore.name}</p>
    </div>
  );
};

export default Chore;
