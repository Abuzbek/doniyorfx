import React from "react";
import styles from "./styles.module.scss";
import CopyButton from "./CopyButton";
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
      >
        <div className={styles.top}>
          <span>UZCARD</span>
          <span className={styles.price}>{price}</span>
        </div>
        <div className={styles.hr} />
        <div className={styles.bottom}>
          <div className={styles.card_number}>
            <span>5614 6816 0301 7256</span>
            <p>Abduganiyev Doniyor</p>
          </div>
          <div className={styles.copy}>
            <CopyButton textToCopy="5614681603017256" />
          </div>
        </div>
      </div>
      <div
        className={styles.credit_card}
      >
        <div className={styles.top}>
          <span>VISA</span>
          <span className={styles.price}>{price_dollar}</span>
        </div>
        <div className={styles.hr} />
        <div className={styles.bottom}>
          <div className={styles.card_number}>
            <span>4023 0602 3536 4220</span>
            <p>SARDOR ABDUGANIYEV</p>
          </div>
          <div className={styles.copy}>
            <CopyButton textToCopy="4023060235364220" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
