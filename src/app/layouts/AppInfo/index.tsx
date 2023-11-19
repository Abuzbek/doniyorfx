import React, { FC, MutableRefObject } from "react";
import CourseInfo from "./CourseInfo";
import styles from "./styles.module.scss";
import CourseForWhom from "./CourseForWhom";
import CourseWhyBuy from "./CourseWhyBuy";
import { IModalMethods } from "@/app/components/UI/Modal";

type Props = {
  modalRef: MutableRefObject<IModalMethods | undefined>;
};

const AppInfo: FC<Props> = ({ modalRef }) => {
  return (
    <div className={styles.info}>
      <div className={styles.container}>
        <CourseInfo />
        <CourseForWhom />
        <CourseWhyBuy modalRef={modalRef} />
      </div>
    </div>
  );
};

export default AppInfo;
