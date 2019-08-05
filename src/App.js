import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import styled from 'styled-components';

const Background = styled.div`
background: lightpink;
`
const toDoList = [
  {
    task: 'Walk the fish',
    id: 1528817077286,
    completed: false
  },

  {
    task: 'Feed the car',
    id: 1528817084358,
    completed: false
  },

  {
    task: 'Paint with Russell',
    id: 2282017222817,
    completed: false
  },
  {
    task: 'Clean the soap',
    id: '0322201942579',
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state ={
      // myList: toDoList
      myList: []
     }
  }

  toggleTask = id => {
    this.setState({
      myList: this.state.myList.map(chore => {
        if (chore.id === id) {
          return {
            ...chore,
            completed: !chore.completed
          };
        } else {
          return chore;
        }
      })
    })
  }

  addTask = taskName =>{
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      myList: [...this.state.myList, newTask]
    })
  }


  render() {
    console.log(this.state.myList)
    return (
        <Background>
      <div className="App">
        <div className="header">        <h2>Hello, your Majesty!</h2>
        <p>What tasks can I complete for you today</p>
        <TodoForm addTask={this.addTask} />
        <TodoList myList={this.state.myList} toggleTask={this.toggleTask} />
        </div>
      </div>
</Background>
    );
  }
}

export default App;
