import React from "react";
import styles from "./styles.module.scss";
import { data } from "./guest.data";
import Card from "./Card";
type Props = {};

const GuestSpeaker = (props: Props) => {
  return (
    <div className={styles.guest}>
      <h3>Kursning Mehmon spikerlari</h3>
      <div className="grid grid-cols-3 gap-5">
        {data.map((n, i) => (
          <Card key={i} {...n} />
        ))}
      </div>
    </div>
  );
};

export default GuestSpeaker;
