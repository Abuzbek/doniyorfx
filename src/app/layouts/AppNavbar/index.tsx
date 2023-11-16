import React, { FC } from "react";
import styles from "./styles.module.scss";
import { Space_Grotesk } from "next/font/google";
import classNames from "classnames";
import { links } from "./navbar.links";
type Props = {};
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

const AppNavbar: FC<Props> = (props) => {
  return (
    <div className={classNames(styles.navbar, spaceGrotesk.className)}>
      <div className={styles.navbar_menu}>
        <a href="#!" className={styles.navbar_brand}>
          DoniyorFX
        </a>
        <ul className={styles.navbar_menu_list}>
          {links.map((link, i) => (
            <li key={i}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.navbar_call}>
        <a href="tel:+998909905555">+998 90 990 55 55</a>
        <button>Qayta qo‘ng’iroq</button>
      </div>
    </div>
  );
};

export default AppNavbar;
