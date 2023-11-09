import React from "react";
import styles from "./telegram.module.css";
import { useAppContext } from "../context/AppContext";
type Props = {};

const TelegramQuestionCard = (props: Props) => {
  const { theme } = useAppContext();
  const isDark = theme === "dark";
  return (
    <div className={styles.telegram_card}>
      <span>
        Savollaringiz bormi?
        <br />
        Biz bilan telegramdan bog’laning
      </span>
      <a href="#!">
        {isDark ? (
          <img src="/img/telegram_dark.svg" alt="Telegram" />
        ) : (
          <img src="/img/telegram.svg" alt="Telegram" />
        )}
        Telegram orqali bog’lanish
      </a>
    </div>
  );
};

export default TelegramQuestionCard;
