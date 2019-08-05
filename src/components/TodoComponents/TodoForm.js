import React from 'react';

class ListForm extends React.Component {
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

  submitItem = event => {
    event.preventDefault();
    this.props.addTask(this.state.chore);
  };

  render() {
    return (
      <form onSubmit={this.submitChore}>
        <input
          type="text"
          value={this.item}
          name="item"
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default ListForm;