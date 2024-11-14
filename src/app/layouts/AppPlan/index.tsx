import React, { FC, MutableRefObject } from "react";
import styles from "./styles.module.scss";
import { data } from "./plan.data";
import Card from "./Card";
import { Space_Grotesk } from "next/font/google";
import classNames from "classnames";
import { IModalMethods } from "@/app/components/UI/Modal";
type Props = {
  modalRef: MutableRefObject<IModalMethods | undefined>;
};

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const AppPlan:FC<Props> = ({modalRef}) => {
  return (
    <div id="plans" className={classNames(styles.plan, spaceGrotesk.className)}>
      <div className={styles.container}>
        <h3>Kurs tafsilotlari</h3>
        <div className="grid xl:grid-cols-3 sm:grid-cols-2 gap-5">
          {data.map((n, i) => (
            <Card modalRef={modalRef} key={i} {...n} />
          ))}
        </div>
        <h4>*Narxlar 2,5 oy to’liq kurs uchun ko’rsatilgan</h4>
      </div>
    </div>
  );
};

export default AppPlan;
