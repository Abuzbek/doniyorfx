import React from "react";
import styles from "./styles.module.scss";
type Props = {
  name: string;
  color: string;
  textColor: string;
  advantages: { text: string; new: boolean }[];
  price: string;
};

const Card = (props: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.up}>
        <div
          className={styles.plan_type}
          style={{ backgroundColor: props.color }}
        >
          {props.name}
        </div>
        <ul>
          {props.advantages.map((n, i) => (
            <li key={i} className={n.new ? '' : 'opacity-60'}>
              <span>{n.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.down}>
        <p style={{ color: props.textColor }}>
          {props.price} <span>so‘m</span>
        </p>
        <a href="#!" style={{ backgroundColor: props.color }}>
          {props.name} tarifga yozilish
        </a>
      </div>
    </div>
  );
};

export default Card;
