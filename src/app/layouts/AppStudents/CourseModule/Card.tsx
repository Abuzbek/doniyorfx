import React from "react";
import styles from "./styles.module.scss";
type Props = {
  order: string;
  name: string;
  result: string;
};

const Card = (props: Props) => {
  return (
    <div className={styles.card}>
      <div className="flex items-center mb-3">
        <span>Module {props.order}</span>
      </div>
      <h5>{props.name}</h5>
      <p>{props.result}</p>
    </div>
  );
};

export default Card;
