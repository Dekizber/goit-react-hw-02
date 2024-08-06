import clsx from "clsx";
import s from "./Options.module.css";
const Options = ({ reviews, handleClick, total, reset }) => {
  return (
    <ul className={clsx(s.opList)}>
      {reviews.map((review) => (
        <li key={review}>
          <button onClick={() => handleClick(review)}>{review}</button>
        </li>
      ))}
      {total > 0 && (
        <li>
          <button onClick={reset}>Reset</button>
        </li>
      )}
    </ul>
  );
};

export default Options;
