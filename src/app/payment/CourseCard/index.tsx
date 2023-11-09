import React from "react";
import styles from "../payment.module.css";
type Props = {};

const CourseCard = (props: Props) => {
  return (
    <div className={styles.course_card}>
      <h3>Mobilografiya 1.0</h3>
      <p>Kurs davomiyligi: 2 oy</p>
      <p>Start: 1-dekabr</p>
    </div>
  );
};

export default CourseCard;
