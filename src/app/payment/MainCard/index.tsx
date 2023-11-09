import React, { ReactNode } from "react";
import styles from "../payment.module.css";
import classNames from "classnames";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
};

const MainCard = ({ children }: Props) => {
  return (
    <div className={styles.payment}>
      <div className={styles.payment_top}>{children}</div>
      <div className={classNames(styles.payment_bottom, montserrat.className)}>
        <a href="#!">Ommaviy oferta</a>
        <p>
          OOO “ONLINE EDU” Toshkent shahri, Yunusobod tumani, Buyuk Turon MFY,
          Ц-2, 24A uy. H/R 2020 8000 5055 5783 4001 “KDB BANK UZBEKISTAN” MFO:
          01065 INN: 309769049
        </p>
      </div>
    </div>
  );
};

export default MainCard;
