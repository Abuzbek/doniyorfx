import React from "react";
import styles from "./styles.module.scss";
type Props = {
  price?: string;
};

const CreditCard = ({ price }: Props) => {
  function copy(text: string) {
    // Get the text field
    navigator.clipboard.writeText(text);
  }
  return (
    <div className="flex flex-col gap-2">
      <div
        className={styles.credit_card}
        onClick={() => copy("8600140413714511")}
      >
        <div className={styles.top}>
          <span>UZCARD</span>
          <span className={styles.price}>{price}</span>
        </div>
        <div className={styles.hr} />
        <div className={styles.bottom}>
          <div className={styles.card_number}>
            <span>8600 1404 1371 4511</span>
            <p>Xolidaxon Abdurahmonova</p>
          </div>
          <div className={styles.copy}>
            <div>
              <img src="/img/copy.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
