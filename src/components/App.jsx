import { Component } from 'react';

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

  render() {
    return (
      <div>
        <h1>Please leave the feedback</h1>
      </div>
    );
  }
}
