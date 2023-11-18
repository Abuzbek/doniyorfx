import React from "react";
import styles from "./style.module.scss";

import { Space_Grotesk } from "next/font/google";
import classNames from "classnames";
import AboutStats from "./AboutStats";
import AboutVideo from "./AboutVideo";
type Props = {};
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

const AppAbout = (props: Props) => {
  return (
    <div className={classNames(styles.about, spaceGrotesk.className)} id="author">
      <div className={styles.container}>
        <AboutStats />
        <AboutVideo /> 
      </div>
    </div>
  );
};

export default AppAbout;
