import React from "react";
import styles from "./styles.module.scss";
import { data } from "./plan.data";
import Card from "./Card";
import { Space_Grotesk } from "next/font/google";
import classNames from "classnames";
type Props = {};

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const AppPlan = () => {
  return (
    <div className={classNames(styles.plan, spaceGrotesk.className)}>
      <div className={styles.container}>
        <h3>Kurs tafsilotlari</h3>
        <div className="grid xl:grid-cols-3 sm:grid-cols-2 gap-5">
          {data.map((n, i) => (
            <Card key={i} {...n} />
          ))}
        </div>
        <h4>*Narxlar 2 oy to’liq kurs uchun ko’rsatilgan</h4>
      </div>
    </div>
  );
};

export default AppPlan;
