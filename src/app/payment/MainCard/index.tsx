import React, { ReactNode, useState } from "react";
import styles from "../payment.module.scss";
import classNames from "classnames";
import { Montserrat } from "next/font/google";
import { useAppContext } from "@/app/context/AppContext";

const montserrat = Montserrat({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
  finish: boolean;
};

const MainCard = ({ children, finish }: Props) => {
  const {theme} = useAppContext()
  const isDark = theme === 'dark'
  return (
    <div className={classNames(styles.payment, finish ? "pb-36" : "")}>
      <div className={styles.payment_top}>{children}</div>
      {!finish && (
        <div
          className={classNames(styles.payment_bottom, montserrat.className)}
        >
          <a href="#!">Ommaviy oferta</a>
          <p>
            OOO “ONLINE EDU” Toshkent shahri, Yunusobod tumani, Buyuk Turon MFY,
            Ц-2, 24A uy. H/R 2020 8000 5055 5783 4001 “KDB BANK UZBEKISTAN” MFO:
            01065 INN: 309769049
          </p>
        </div>
      )}
    </div>
  );
};

export default MainCard;
