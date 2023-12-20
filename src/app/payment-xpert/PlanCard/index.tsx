import React from "react";
import styles from "../payment.module.scss";
export type PlanCardProps = {
  title: string;
  price: string;
  value: number;
};

const PlanCard = (props: PlanCardProps) => {
  return (
    <div className={styles.plan_card}>
      <div className={styles.plan_title}>
        <h3>{props.title}</h3>
        <h4>{props.price}</h4>
      </div>
      <p>Kurs davomiyligi: 2 oy</p>
    </div>
  );
};

export default PlanCard;
