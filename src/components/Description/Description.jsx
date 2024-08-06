import clsx from "clsx";
import s from "./Description.module.css";
const description = () => {
  return (
    <div className={clsx(s.container)}>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default description;
