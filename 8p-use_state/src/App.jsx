import React, { Component } from "react";

class App extends Component {
    state = {
      count: 0,
    };

  handleIncrease = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  handleDecrease = () => {
    this.setState({ count: this.state.count - 1 });
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default App;