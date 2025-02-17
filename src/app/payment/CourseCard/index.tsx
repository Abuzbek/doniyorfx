import React from "react";
import styles from "../payment.module.scss";
type Props = {};

const CourseCard = (props: Props) => {
  return (
    <div className={styles.course_card}>
      <h3>Mobilografiya va Instagram 5.0</h3>
      <p>Kurs davomiyligi: 2,5 oy</p>
    </div>
  );
};

export default CourseCard;
