import classNames from "classnames";
import React from "react";
import styles from "./styles.module.scss";
import { Space_Grotesk } from "next/font/google";
import { data } from "./course-why-buy.data";
import Card from "./Card";
import Link from "next/link";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

type Props = {};

const CourseWhyBuy = (props: Props) => {
  return (
    <div className={classNames(styles.course_why_buy, spaceGrotesk.className)}>
      <h3>Nega aynan bu kursni sotib olishingiz kerak </h3>
      <div className="grid sm:grid-cols-2 gap-5">
        {data.map((n, i) => (
          <Card {...n} key={i} />
        ))}
      </div>
      <div className="flex items-center justify-center">
      <Link href="/payment">Kursga yozilish</Link>
      </div>
    </div>
  );
};

export default CourseWhyBuy;
