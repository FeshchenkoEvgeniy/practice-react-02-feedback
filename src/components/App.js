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
    let total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  }
  countPositiveFeedbackPercentage = () => {
    let feedback = this.state.good / (this.state.good + this.state.bad + this.state.neutral) * 100;
    let abc = Math.round(feedback)
    return abc;
  }
  render() {
    let total = this.countTotalFeedback();
    let feedback = this.countPositiveFeedbackPercentage();
    console.log(isNaN(feedback))
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
          <p>Total: {total}</p>
          <p>Positive feedback: {isNaN(feedback) ? 0 : feedback}%</p>
        </div>
      </div>
    );
  }
}

export default App;
