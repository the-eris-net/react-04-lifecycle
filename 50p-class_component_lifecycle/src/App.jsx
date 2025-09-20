import React, { Component } from 'react';

class Sub extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('constructor: 컴포넌트 생성');
  }

  componentDidMount() {
    console.log('componentDidMount: DOM에 마운트 완료');
    console.log('----------------------------------');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: 업데이트 완료',
      prevState,'=>',this.state);
    console.log('----------------------------------');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: 컴포넌트 제거');
    console.log('----------------------------------');
  }

  render() {
    console.log("render: UI 그리기");
    return (
      <div>
        <h2>자식 컴포넌트 : {this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          count 증가
        </button>
      </div>
    );
  }
}

class App extends Component {
  state = {
    visible: false,
  };

  handleToggle = () => {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    return (
      <>
        <button onClick={this.handleToggle}>
          {this.state.visible ? '숨기기' : '보이기'}
        </button>
        {this.state.visible && <Sub />}
      </>
    );
  }
}

export default App;
