import React from "react";
import styles from "../styles.module.scss";
import Image, { StaticImageData } from "next/image";

type Props = {
  image: StaticImageData;
  title: string;
  text: string;
};

const Card = ({ image, title, text }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_content}>
        <h5>{title}</h5>
        <p>{text}</p>
      </div>
      <div className={styles.card_image}>
        <Image src={image} alt={title} />
      </div>
    </div>
  );
};

export default Card;
