import React, { FC, ReactNode } from "react";
import styles from "../payment.module.css";

interface Props {
  children: ReactNode;
}

const PaymentCard: FC<Props> = ({ children }) => {
  return <div className={styles.payment_card}>{children}</div>;
};

export default PaymentCard;
