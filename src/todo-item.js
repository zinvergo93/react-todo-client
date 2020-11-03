import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      done: this.props.todo.done,
    };
  }

  toggleDone = () => {
    this.setState((prevState) => ({
      done: !prevState.done,
    }));
  };
  render() {
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          checked={this.state.done}
          onChange={this.toggleDone}
        />
        <h3>{this.props.todo.title}</h3>
      </div>
    );
  }
}

export default TodoItem;
