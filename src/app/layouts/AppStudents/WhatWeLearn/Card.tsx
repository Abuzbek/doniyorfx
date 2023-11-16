import React from "react";
import styles from "./styles.module.scss";
type Props = {
  order: string;
  title: string;
  text: string;
};

const Card = ({ order, title, text }: Props) => {
  return (
    <div className={styles.card}>
      <span className="">{order}</span>
      <h5>{title}</h5>
      <p>{text}</p>
    </div>
  );
};

export default Card;
