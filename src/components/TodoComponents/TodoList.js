// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react"
import Todo from "./Todo"
import styled from "styled-components"

const Button = styled.button`
  border-radius: 5px;
  background: rebeccapurple;
  color: white;
  display: flex;
`
const TodoList = props => {
  return (
    <div className="chores-list">
      {props.myList.map(chore => (
        <Todo key={chore.id} chore={chore} toggleTask={props.toggleTask} />
      ))}
      <Button onClick={props.clearCompleted}>Clear Completed</Button>
    </div>
  )
}

export default TodoList
