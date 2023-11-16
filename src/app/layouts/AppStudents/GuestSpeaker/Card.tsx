import React from "react";
import styles from "./styles.module.scss";
import Image, { StaticImageData } from "next/image";
type Props = {
  img: StaticImageData;
  name: string;
  description: string;
};

const Card = (props: Props) => {
  return (
    <div className={styles.card}>
      <Image src={props.img} alt={props.name} />
      <div className={styles.card_body}>
        <h5>{props.name}</h5>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
