import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return Object.keys(options).map(key => (
    <button className={css.btn} key={key} onClick={() => onLeaveFeedback(key)}>
      {key}
    </button>
  ));
};
