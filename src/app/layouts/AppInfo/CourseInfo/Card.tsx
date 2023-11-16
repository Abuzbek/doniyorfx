import React from "react";
import styles from "./styles.module.scss";
type Props = {
  icon_text: string;
  text: string;
};

const CourseInfoCard = ({ icon_text, text }: Props) => {
  return (
    <div className={styles.course_info_card}>
      <div className={styles.course_icon}>{icon_text}</div>
      <div className={styles.course_text}>{text}</div>
    </div>
  );
};

export default CourseInfoCard;
