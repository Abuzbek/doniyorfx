import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { Space_Grotesk } from "next/font/google";
type Props = {};
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const AppFooter = (props: Props) => {
  return (
    <footer className={classNames(styles.footer, spaceGrotesk.className)}>
      <div className={styles.container}>
        <span>2023 Online edu</span>
        <a href="tel:+998781137044">+998 78 113 70 44</a>
      </div>
    </footer>
  );
};

export default AppFooter;
