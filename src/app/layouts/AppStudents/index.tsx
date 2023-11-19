import React, { FC, MutableRefObject } from "react";
import styles from "./styles.module.scss";
import WhatWeLearn from "./WhatWeLearn";
import { Space_Grotesk } from "next/font/google";
import classNames from "classnames";
import StudentsOpinion from "./StudentsOpinion";
import StudentsFeedback from "./StudentsFeedback";
import StudentsVideo from "./StudentsVideo";
import GuestSpeaker from "./GuestSpeaker";
import CourseModule from "./CourseModule";
import { IModalMethods } from "@/app/components/UI/Modal";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
interface Props {
  modalRef: MutableRefObject<IModalMethods | undefined>;
}

const AppStudents: FC<Props> = ({ modalRef }) => {
  return (
    <div className={classNames(styles.student, spaceGrotesk.className)}>
      <div className={styles.container}>
        <WhatWeLearn modalRef={modalRef} />
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
