import React from "react"
import styled from "styled-components"

const Button = styled.button`
  border-radius: 5px;
  background: rebeccapurple;
  color: white;
  display: flex;
`

class TodoForm extends React.Component {
  constructor() {
    super()
    this.state = {
      chore: ""
    }
  }

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitChore = event => {
    event.preventDefault()
    this.props.addTask(this.state.chore)
    this.setState({
      chore: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.submitChore}>
        <input
          type="text"
          value={this.state.chore}
          name="chore"
          onChange={this.handleChanges}
        />
        <Button>Add</Button>
      </form>
    )
  }
}

export default TodoForm
