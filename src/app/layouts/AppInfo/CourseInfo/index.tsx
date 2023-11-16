import React, { FC } from "react";
import styles from "./styles.module.scss";
import { data } from "./course-info.data";
import CourseInfoCard from "./Card";
type Props = {};

const CourseInfo: FC<Props> = () => {
  return (
    <div className={styles.course_info}>
      {data.map((courseInfo, i) => (
        <CourseInfoCard {...courseInfo} key={i} />
      ))}
    </div>
  );
};

export default CourseInfo;
