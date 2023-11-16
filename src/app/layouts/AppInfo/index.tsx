import React, { FC } from "react";
import CourseInfo from "./CourseInfo";
import styles from "./styles.module.scss";
import CourseForWhom from "./CourseForWhom";
import CourseWhyBuy from "./CourseWhyBuy";

type Props = {};

const AppInfo: FC<Props> = () => {
  return (
    <div className={styles.info}>
      <div className={styles.container}>
        <CourseInfo />
        <CourseForWhom/>
        <CourseWhyBuy />
      </div>
    </div>
  );
};

export default AppInfo;
