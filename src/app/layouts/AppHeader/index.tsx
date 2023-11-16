import React, { FC } from "react";
import AppNavbar from "../AppNavbar";
import styles from "./styles.module.scss";
import { Montserrat, Space_Grotesk } from "next/font/google";
import classNames from "classnames";
interface Props {}
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });
const AppHeader: FC<Props> = () => {
  return (
    <div className={styles.header}>
      <AppNavbar />
      <div className={styles.image_container}>
        <img src="/img/doniyor.png" alt="Doniyor Abduganiyev" />
      </div>
      <div className={styles.container}>
        <div
          className={classNames(styles.text_content, spaceGrotesk.className)}
        >
          <div
            className={classNames(styles.starting_course, montserrat.className)}
          >
            Start: 22-noyabr <span>|</span> Online
          </div>
          <div className="flex flex-col gap-4 mb-2">
            <h1>Professional Mobilografiya</h1>
            <p>
              Bu kurs video tahrirlash haqida. Trening davomida biz turli
              janrlar bilan ishlaymiz: reportaj, intervyu, shuningdek, treyler
              va reklama rolikini tahrirlaymiz. Materiallar bizdan, lekin agar
              sizda bo'lsa, ulardan foydalaning.
            </p>
          </div>
          <a href="#!">Kursga yozilish</a>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
