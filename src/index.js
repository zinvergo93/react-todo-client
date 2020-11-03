import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      todo: e.target.value,
    });
  };

  addTodo = (e) => {
    console.log("add-todo", this.state.todo);
    e.preventDefault();
  };
  render() {
    return (
      <div className="app">
        <h1>TODO List</h1>
        <form className="add-todo" onSubmit={this.addTodo}>
          <input
            type="text"
            placeholder="Add Todo"
            value={this.state.todo}
            onChange={this.handleChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
