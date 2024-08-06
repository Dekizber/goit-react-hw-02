import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import Options from "./components/Options/Options";
import { useState, useEffect } from "react";

const App = () => {
  const initialState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [reviews, setReviews] = useState(
    () => JSON.parse(window.localStorage.getItem("reviews")) ?? initialState
  );

  useEffect(
    () => window.localStorage.setItem("reviews", JSON.stringify(reviews)),
    [reviews]
  );

  const updateFeedback = (feedbackType) => {
    setReviews((prev) => ({ ...prev, [feedbackType]: prev[feedbackType] + 1 }));
  };

  const totalFeedback = Object.values(reviews).reduce(
    (acc, value) => acc + value,
    0
  );

  const resReviews = () => {
    setReviews({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const positiveFeedback = Math.round((reviews.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        reset={resReviews}
        reviews={Object.keys(reviews)}
        handleClick={updateFeedback}
        total={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          reviews={Object.entries(reviews)}
          positive={positiveFeedback}
          total={totalFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
