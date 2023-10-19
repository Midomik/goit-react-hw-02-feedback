import css from './FeedbackOptions.module.css';
export const FeedbackOptions = ({ getFeedbeck }) => {
  return (
    <div className={css.buttons_container}>
      <button
        type="button"
        name="good"
        onClick={() => getFeedbeck('good')}
        className={css.btn}
      >
        Good
      </button>

      <button
        name="neutrall"
        onClick={() => getFeedbeck('neutral')}
        className={css.btn}
      >
        Neutral
      </button>

      <button name="bad" onClick={() => getFeedbeck('bad')} className={css.btn}>
        Bad
      </button>
    </div>
  );
};
