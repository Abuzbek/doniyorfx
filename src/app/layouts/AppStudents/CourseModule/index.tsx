import React from "react";
import styles from "./styles.module.scss";
import { data } from "./module.data";
import Card from "./Card";
type Props = {};

const CourseModule = (props: Props) => {
  return (
    <div className={styles.course_module}>
      <h3>Kurs modullari</h3>
      <div className="grid sm:grid-cols-2 gap-5">
        {data.map((n, i) => (
          <Card key={i} {...n} />
        ))}
      </div>
    </div>
  );
};

export default CourseModule;
