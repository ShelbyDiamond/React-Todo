// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Item from './Item';

const ChoreList = props => {

  return (
    <div className="shopping-list">
      {props.toDoList.map(chore => (
        <Item key={chore.id} chore={chore} toggleTask={props.toggleTask} />
      ))}
    </div>
  );
};

export default ChoreList;
