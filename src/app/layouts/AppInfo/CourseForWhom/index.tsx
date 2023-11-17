import React from "react";
import styles from "./styles.module.scss";
import { data } from "./course-for-whom.data";
import Card from "./Card";
import { Space_Grotesk } from "next/font/google";
import classNames from "classnames";
type Props = {};
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const CourseForWhom = (props: Props) => {
  return (
    <div className={classNames(styles.course_from_whom, spaceGrotesk.className)}>
      <h3>Professional mobilografiya kursi kimlar uchun </h3>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
        {data.map((n, i) => (
          <Card {...n} key={i} />
        ))}
      </div>
    </div>
  );
};

export default CourseForWhom;
