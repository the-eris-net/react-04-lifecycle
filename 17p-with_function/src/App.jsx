import React, { Component, useState } from 'react';

function Buttons({ setCount }) {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);

  function handleLikeClick() {
    let newLike = like + 1;
    setLike(newLike);
    setCount(newLike - disLike);
  }

  function handleDisLikeClick() {
    let newDisLike = disLike + 1;
    setDisLike(newDisLike);
    setCount(like - newDisLike);
  }

  return (
    <>
      <button onClick={handleLikeClick}>좋아요 : {like}</button>&nbsp;
      <button onClick={handleDisLikeClick}>싫어요 : {disLike}</button>
    </>
  );
}

function Result({ count }) {
  return <p> 호감지수 : {count}</p>;
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
