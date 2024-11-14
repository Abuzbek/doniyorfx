import React from "react";
import styles from "../payment.module.scss";
type Props = {};

const CourseCard = (props: Props) => {
  return (
    <div className={styles.course_card}>
      <h3>Mobilografiya va Instagram 4.0</h3>
      <p>Kurs davomiyligi: 2,5 oy</p>
      <p>Start: 29-noyabr</p>
    </div>
  );
};

export default CourseCard;
