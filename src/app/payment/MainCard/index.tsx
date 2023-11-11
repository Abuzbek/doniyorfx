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
  const { theme } = useAppContext();
  const isDark = theme === "dark";
  return (
    <div className={classNames(styles.payment, finish ? "pb-36" : "")}>
      <div className={styles.payment_top}>{children}</div>
      {!finish && (
        <div
          className={classNames(styles.payment_bottom, montserrat.className)}
        >
          <a href="/img/oferta-online-edu.docx" target="_blank">
            Ommaviy oferta
          </a>
          <p>
            MChJ “ONLINE EDU” Meros MFY, Bog’ibo’ston ko’chasi, 186-188-uy. INN:
            310890219 OKED: 85590 H/R 20208000005711026001 Bank: “IPAK YO’LI”
            AIT BANKING MIROBOD FILIALI MFO: 01101
          </p>
        </div>
      )}
    </div>
  );
};

export default MainCard;
