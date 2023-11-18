import React from "react";
import styles from "./styles.module.scss";
import WhatWeLearn from "./WhatWeLearn";
import { Space_Grotesk } from "next/font/google";
import classNames from "classnames";
import StudentsOpinion from "./StudentsOpinion";
import StudentsFeedback from "./StudentsFeedback";
import StudentsVideo from "./StudentsVideo";
import GuestSpeaker from "./GuestSpeaker";
import CourseModule from "./CourseModule";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
interface Props {}

const AppStudents = () => {
  return (
    <div className={classNames(styles.student, spaceGrotesk.className)}>
      <div className={styles.container}>
        <WhatWeLearn />
        <StudentsOpinion />
        {/* <StudentsFeedback /> */}
        {/* <StudentsVideo /> */}
        <GuestSpeaker />
        <CourseModule />
      </div>
    </div>
  );
};

export default AppStudents;
