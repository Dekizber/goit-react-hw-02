const Feedback = ({ reviews, positive, total }) => {
  return (
    <ul>
      {reviews.map(([key, value]) => (
        <li key={key}>
          {key}: {value}
        </li>
      ))}
      <li>Total: {total}</li>
      <li>Positive: {positive}%</li>
    </ul>
  );
};

export default Feedback;
