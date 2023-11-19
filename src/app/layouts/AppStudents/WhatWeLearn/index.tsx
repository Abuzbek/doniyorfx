import React, { MutableRefObject } from "react";
import { data } from "./data";
import Card from "./Card";
import styles from "./styles.module.scss";
import { IModalMethods } from "@/app/components/UI/Modal";
type Props = {
  modalRef: MutableRefObject<IModalMethods | undefined>;
};

const WhatWeLearn = ({ modalRef }: Props) => {
  return (
    <div id="what-we-learn" className={styles.what_we_learn}>
      <h3>Kursda nimalar o’rganasiz</h3>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        {data.map((data, i) => (
          <Card key={i} {...data} />
        ))}
      </div>
      <div className="flex items-center justify-center w-full">
        <button onClick={() => modalRef.current?.openModal()}>
          Kursga ro’yxatdan o’tish
        </button>
      </div>
    </div>
  );
};

export default WhatWeLearn;
