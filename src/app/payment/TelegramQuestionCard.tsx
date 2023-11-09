import React from "react";
import styles from "./telegram.module.css";
type Props = {};

const TelegramQuestionCard = (props: Props) => {
  return (
    <div className={styles.telegram_card}>
      <span>
        Savollaringiz bormi?
        <br />
        Biz bilan telegramdan bog’laning
      </span>
      <a href="#!">
        <img src="/img/telegram.svg" alt="Telegram" />
        Telegram orqali bog’lanish
      </a>
    </div>
  );
};

export default TelegramQuestionCard;
