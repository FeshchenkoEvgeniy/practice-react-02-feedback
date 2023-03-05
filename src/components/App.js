import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Stats/Statistics ';
import { Notification } from './Notification/Notification';
import { Container } from './App.styled';

const options = ['good', 'neutral', 'bad'];

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = evt => {
    const elem = evt.target.innerText.toLowerCase();
    this.setState(prevState => ({
      [elem]: prevState[elem] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    let total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
    let totalFeedbackCount = this.countTotalFeedback();
    let positiveFeedback = this.countPositiveFeedbackPercentage();
    return (
      <Container>
        <Section title={'Please leave feedback'} />
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.handleFeedback}
        />
        <Section title={'Statistics'}>
        {totalFeedbackCount ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={totalFeedbackCount}
            positivePercentage={positiveFeedback}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
        </Section>
      </Container>
    );
  }
}

export default App;
