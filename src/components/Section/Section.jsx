import css from './Section.module.css'

export const Section = ({ title, children }) => {
  return (
    <div className={css.section}>
      <p className={css.title}>{title}</p>
      {children}
    </div>
  );
};
