import css from './Statistics.module.css'
export const Statistics = ({ good, neutral, bad, total, persent }) => {
  return (
    <ul className={css.title}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {persent}%</li>
    </ul>
  );
};
