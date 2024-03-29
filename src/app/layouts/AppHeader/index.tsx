import React, { FC, MutableRefObject } from "react";
import AppNavbar from "../AppNavbar";
import styles from "./styles.module.scss";
import { Montserrat, Space_Grotesk } from "next/font/google";
import classNames from "classnames";
// import Link from "next/link";
import { IModalMethods } from "@/app/components/UI/Modal";
interface Props {
  modalRef: MutableRefObject<IModalMethods | undefined>;
}
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });
const AppHeader: FC<Props> = ({ modalRef }) => {
  return (
    <div className={styles.header}>
      <AppNavbar />
      <div className={styles.image_container}>
        <img src="/img/doniyor.webp" alt="Doniyor Abduganiyev" />
      </div>
      <div className={styles.container}>
        <div
          className={classNames(styles.text_content, spaceGrotesk.className)}
        >
          <div
            className={classNames(styles.starting_course, montserrat.className)}
          >
            Start: 4-mart <span>|</span> Online
          </div>
          <div className="flex flex-col gap-4 mb-2">
            <h1>Professional Mobilografiya 2.0</h1>
            <p>
              Bu shunchaki online kurs emas, bu online maktab. Zamonaviy va serdaromad kasbni men bilna o'rganing
            </p>
          </div>
          <div className="relative">
            <img
              src="/img/doniyor.webp"
              alt="Doniyor Abduganiyev"
              className="lg:hidden block"
            />
            <button onClick={() => modalRef.current?.openModal()}>
              Batafsil ma'lumot olish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
