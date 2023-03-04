import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  postiveFeedbackIncrement = () => {
    this.setState({ good: this.state.good + 1 });
  };

  neutralFeedbackIncrement = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };

  badFeedbackIncrement = () => {
    this.setState({ bad: this.state.bad + 1 });
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    console.log(total);
  }
  render() {
    return (
      <div>
        <h1>Відгуки</h1>
        <button type="button" onClick={this.postiveFeedbackIncrement}>
          Good
        </button>
        <button type="button" onClick={this.neutralFeedbackIncrement}>
          Neutral
        </button>
        <button type="button" onClick={this.badFeedbackIncrement}>
          Bad
        </button>
        <div>
          <h2>Stats</h2>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.state.good + this.state.neutral + this.state.bad}</p>
        </div>
      </div>
    );
  }
}

export default App;
