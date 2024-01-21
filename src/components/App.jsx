import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import css from './App.module.css';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedBack = value => {
    switch (value) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        alert(`that ${value} not found`);
    }
  };
  const countTotalFeedback = () => good + neutral + bad;
  const total = countTotalFeedback();
  const countPositiveFeedbackPercentage = () =>
    good > 0 ? Math.round((good / total) * 100) : 0;
  const persent = countPositiveFeedbackPercentage();

  return (
    <div className={css.app}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={feedBack}
        />
      </Section>

      <Section title="Statistic">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            persent={persent}
          />
        )}
      </Section>
    </div>
  );
};
