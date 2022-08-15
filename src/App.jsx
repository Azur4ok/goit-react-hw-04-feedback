import React from 'react';

import {
  Notification,
  Section,
  FeedbackOptions,
  Statistics,
} from './components/index';

export const App = () => {
  const [feedback, setFeedback] = React.useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const handleClickButton = e => {
    const option = e.target.textContent;
    setFeedback( ({...feedback, [option]: feedback[option] + 1 }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    const goodFeedback = feedback.good;
    return Math.round((goodFeedback / totalFeedback) * 100);
  };

  const options = Object.keys(feedback);
  const total = countTotalFeedback()
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div className="app">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleClickButton}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </div>
  );
};
