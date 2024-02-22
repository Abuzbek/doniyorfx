import Image, { StaticImageData } from "next/image";
import play from "@/assets/img/play.svg";
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
      <a data-fancybox href={props.video} className={styles.card}>
        <img
          src={props.img.src}
          alt={props.name}
          className="w-full h-full object-cover rounded-3xl"
        />
        <div className={styles.play_button}>
          <img src={play.src} alt="Play button" />
        </div>
        <div className={styles.card_body}>
          <span>{props.name}</span>
        </div>
      </a>
  );
};

export default Card;
