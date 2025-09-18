import React, { Component } from "react";

class Buttons extends Component {
  state = {
    like: 0,
    disLike: 0,
  };

  handleLikeClick = () => {
    const newLike = this.state.like + 1;
    this.setState({ like: newLike });
    this.props.setCount(newLike - this.state.disLike);
  };

  handleDisLikeClick = () => {
    const newDisLike = this.state.disLike + 1;
    this.setState({ disLike: newDisLike });
    this.props.setCount(this.state.like - newDisLike);
  };

  render() {
    const { like, disLike } = this.state;
    return (
      <>
        <button onClick={this.handleLikeClick}>좋아요 : {like}</button>&nbsp;
        <button onClick={this.handleDisLikeClick}>싫어요 : {disLike}</button>
      </>
    );
  }
}

class Result extends Component {
  render() {
    return <p>호감지수 : {this.props.count}</p>;
  }
}

class App extends Component {
  state = {
    count: 0,
  };

  setCount = (newCount) => {
    this.setState({ count: newCount });
  };

  render() {
    return (
      <div>
        <Result count={this.state.count} />
        <Buttons setCount={this.setCount} />
      </div>
    );
  }
}

export default App;
