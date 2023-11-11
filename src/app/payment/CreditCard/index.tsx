import React from "react";
import styles from "./styles.module.scss";
type Props = {
  price?: string;
  price_dollar?: string;
};

const CreditCard = ({ price, price_dollar }: Props) => {
  function copy(text: string) {
    // Get the text field
    navigator.clipboard.writeText(text);
  }
  return (
    <div className="flex flex-col gap-2">
      <div
        className={styles.credit_card}
        onClick={() => copy("8600570472435444")}
      >
        <div className={styles.top}>
          <span>UZCARD</span>
          <span className={styles.price}>{price}</span>
        </div>
        <div className={styles.hr} />
        <div className={styles.bottom}>
          <div className={styles.card_number}>
            <span>8600 5704 7243 5444</span>
            <p>Abduganiyev Doniyor</p>
          </div>
          <div className={styles.copy}>
            <div>
              <img src="/img/copy.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.credit_card}
        onClick={() => copy("4023060241293579")}
      >
        <div className={styles.top}>
          <span>VISA</span>
          <span className={styles.price}>{price_dollar}</span>
        </div>
        <div className={styles.hr} />
        <div className={styles.bottom}>
          <div className={styles.card_number}>
            <span>4023 0602 4129 3579</span>
            <p>Abduganiyev Doniyor</p>
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
