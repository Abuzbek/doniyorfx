import React, { ReactNode, useState } from "react";
import styles from "../payment.module.scss";
import classNames from "classnames";
import { Montserrat } from "next/font/google";
import { useAppContext } from "@/app/context/AppContext";
import Link from "next/link";

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
          <Link href="/">
            DoniyorFX
          </Link>
          <p>
            {new Date().getFullYear().toString()}
          </p>
        </div>
      )}
    </div>
  );
};

export default MainCard;
