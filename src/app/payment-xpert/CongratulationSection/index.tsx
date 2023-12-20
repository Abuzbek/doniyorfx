import React from "react";
import styles from "./congratulation.module.scss";
import { Montserrat } from "next/font/google";
import classNames from "classnames";
type Props = {};
const montserrat = Montserrat({ subsets: ["latin"] });

const CongratulationSection = (props: Props) => {
  return (
    <div
      className={classNames(
        styles.congratulation_section,
        montserrat.className
      )}
    >
      <div className={styles.icon}>
        <img src="/img/con.png" alt="" />
      </div>
      <div className={styles.text_content}>
        <h3>Tabriklaymiz!</h3>
        <h2>So’rovingiz muvaffaqiyatli qabul qilindi</h2>
        <p>Siz bilan 48 soat ichida bog‘lanamiz va batafsil ma’lumot beramiz</p>
      </div>
      <div className={styles.button_group}>
        <a
          href="https://instagram.com/halida_me"
          className={styles.instagram_link}
          target="_blank"
        >
          <img src="/img/instagram.svg" alt="" />
          @halida_me
        </a>
      </div>
    </div>
  );
};

export default CongratulationSection;
