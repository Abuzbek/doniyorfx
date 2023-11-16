import React from "react";
import styles from "./styles.module.scss";
import { data } from "./accordion.data";
import Accordion from "./Accordion";
type Props = {};

const AppFAQ = (props: Props) => {
  return (
    <div className={styles.faq}>
      <div className={styles.container}>
        <h3>Ko’p beriladigan savollar</h3>
        <div className={styles.accordion}>
          {data.map((n, i) => (
            <Accordion key={i} {...n} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppFAQ;
