import Image, { StaticImageData } from "next/image";
import play from "@/assets/img/play.png";
import React from "react";
import styles from "./styles.module.scss";
type Props = {
  img: StaticImageData;
  name: string;
};

const Card = (props: Props) => {
  return (
    <div className={styles.card}>
      <Image src={props.img} alt={props.name} />
      <div className={styles.play_button}>
        <Image src={play} alt="Play button" />
      </div>
      <div className={styles.card_body}>
        <span>{props.name}</span>
      </div>
    </div>
  );
};

export default Card;
