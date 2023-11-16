import React from "react";
import styles from "../styles.module.scss";
type Props = {
  icon: JSX.Element;
  text: string;
};

const Card = ({ icon, text }: Props) => {
  return (
    <div className={styles.course_from_whom_card}>
      <div className={styles.course_from_whom_card_icon}>{icon}</div>
      <p>{text}</p>
    </div>
  );
};

export default Card;
