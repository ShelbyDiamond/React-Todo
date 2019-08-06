import React from 'react';

const Todo = props => {
  return (
    <div
      className={`chore${props.chore.completed ? 'completed' : ""}`}
      onClick={() => props.toggleTask(props.chore.id)}>
      <p>{props.chore.task}</p>
    </div>
  );
};

export default Todo;
