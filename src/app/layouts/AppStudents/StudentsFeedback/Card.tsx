import React from "react";
import styles from "./styles.module.scss";
import Image, { StaticImageData } from "next/image";
import { Montserrat } from "next/font/google";
import classNames from "classnames";
type Props = {
  comment: string;
  name: string;
  img: StaticImageData;
};
const montserrat = Montserrat({ subsets: ["latin"] });

const Card = (props: Props) => {
  return (
    <div className={classNames(styles.card, montserrat.className)}>
      <p>{props.comment}</p>
      <div className="flex items-center gap-4">
        <Image src={props.img} alt={props.name} />
        <span>{props.name}</span>
      </div>
    </div>
  );
};

export default Card;
