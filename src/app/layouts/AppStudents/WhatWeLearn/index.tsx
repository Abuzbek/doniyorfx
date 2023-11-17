import React from "react";
import { data } from "./data";
import Card from "./Card";
import styles from "./styles.module.scss";
type Props = {};

const WhatWeLearn = (props: Props) => {
  return (
    <div className={styles.what_we_learn}>
      <h3>Kursda nimalar o’rganasiz</h3>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        {data.map((data, i) => (
          <Card key={i} {...data} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <a href="#!">Kursga yozilish</a>
      </div>
    </div>
  );
};

export default WhatWeLearn;
