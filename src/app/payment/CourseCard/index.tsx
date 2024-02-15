import React from "react";
import styles from "../payment.module.scss";
type Props = {};

const CourseCard = (props: Props) => {
  return (
    <div className={styles.course_card}>
      <h3>Professional Mobilografiya 2.0</h3>
      <p>Kurs davomiyligi: 2 oy</p>
      <p>Start: 4-mart</p>
    </div>
  );
};

export default CourseCard;
