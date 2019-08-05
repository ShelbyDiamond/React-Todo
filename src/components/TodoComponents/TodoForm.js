import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
        chore: ''
    };
  }

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitChore = event => {
    event.preventDefault();
    this.props.addTask(this.state.chore);
    this.setState({
      chore: ''
    })
    };

  render() {
    return (
      <form onSubmit={this.submitChore}>
        <input
          type="text"
          value={this.state.chore}
          name="chore"
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;