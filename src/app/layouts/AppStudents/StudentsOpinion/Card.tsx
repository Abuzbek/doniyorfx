import Image, { StaticImageData } from "next/image";
import play from "@/assets/img/play.png";
import React from "react";
import styles from "./styles.module.scss";
import Fancybox from "@/app/components/UI/Fancybox";
type Props = {
  img: StaticImageData;
  name: string;
  video: string;
};

const Card = (props: Props) => {
  return (
    <Fancybox className={styles.card}>
      <Image src={props.img} alt={props.name} />
      <a data-fancybox href={props.video} className={styles.play_button}>
        <Image src={play} alt="Play button" />
      </a>
      <div className={styles.card_body}>
        <span>{props.name}</span>
      </div>
    </Fancybox>
  );
};

export default Card;
