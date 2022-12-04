import { Container } from './App.styled';
import { Component } from 'react';
import { Statistics } from './statistics/Statistics';
import { FeedbackList } from './feedbackList/FeedbackList';
import { Notification } from './notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(currentState => ({
      [option]: currentState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Number.parseInt(
      this.countTotalFeedback() > 0
        ? (good / this.countTotalFeedback()) * 100
        : 0
    );
  };

  render() {
    const { good, neutral, bad } = this.state;

    const totalFeedback = this.countTotalFeedback();

    const options = Object.keys(this.state);

    const PositiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <Container>
        <h1>Please leave the feedback</h1>
        <FeedbackList
          options={options}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        {totalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={totalFeedback}
            PositiveFeedbackPercentage={PositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Container>
    );
  }
}
