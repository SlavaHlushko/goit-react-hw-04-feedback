import { Container } from './App.styled';
import { useState } from 'react';
import { Statistics } from './statistics/Statistics';
import { FeedbackList } from './feedbackList/FeedbackList';
import { Notification } from './notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Number.parseInt(
      countTotalFeedback() > 0 ? (good / countTotalFeedback()) * 100 : 0
    );
  };

  const incrementFeedback = type => {
    switch (type) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  };

  const totalFeedback = countTotalFeedback();
  const options = ['good', 'neutral', 'bad'];
  const positiveFeedback = countPositiveFeedbackPercentage();

  return (
    <Container>
      <h1>Please leave the feedback</h1>
      <FeedbackList options={options} onLeaveFeedback={incrementFeedback} />
      {totalFeedback > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedback={totalFeedback}
          PositiveFeedbackPercentage={positiveFeedback}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Container>
  );
};
