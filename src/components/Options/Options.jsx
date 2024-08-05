const Options = ({ reviews, handleClick, total, reset }) => {
  return (
    <ul>
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
