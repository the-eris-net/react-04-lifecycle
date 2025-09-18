import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div
        style={{
          border: "1px solid gray",
          borderRadius: "8px",
          padding: "10px",
        }}
      >
        <h2>{this.props.title}</h2>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <>
        <Card title="서류 제출 마감 기한">
          <input type="date" defaultValue="2025-09-15" />
        </Card>
        <Card title="오늘 공부 체크리스트">
          <ul>
            <li>스터디 준비</li>
            <li>예제 코드 작성</li>
          </ul>
        </Card>
      </>
    );
  }
}

export default App;
