import Image, { StaticImageData } from "next/image";
import React from "react";
import styles from "../style.module.scss";

type Props = {
  img: StaticImageData;
};

const AboutLinks = (props: Props) => {
  return (
    <div className={styles.about_links}>
      <img src={props.img.src} alt="image" />
    </div>
  );
};

export default AboutLinks;
