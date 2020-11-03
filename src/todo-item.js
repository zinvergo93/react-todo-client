import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="todo-item">
        <input type="checkbox" />
        <h3>{this.props.todo.title}</h3>
      </div>
    );
  }
}

export default TodoItem;
