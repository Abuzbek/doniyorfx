"use client";
import React, { FC, useRef } from "react";
import AppHeader from "./layouts/AppHeader";
import AppInfo from "./layouts/AppInfo";
import AppAbout from "./layouts/AppAbout";
import AppStudents from "./layouts/AppStudents";
import AppPlan from "./layouts/AppPlan";
// import AppFAQ from "./layouts/AppFAQ";
import AppFooter from "./layouts/AppFooter";
import AppFreeCourse from "./layouts/AppFreeCourse";
import ModalForm from "./ModalForm";
import { IModalMethods } from "./components/UI/Modal";

interface Props {}

const Home: FC<Props> = () => {
  const modalRef = useRef<IModalMethods>();
  return (
    <div>
      <AppHeader modalRef={modalRef} />
      <div className="main">
        <AppInfo modalRef={modalRef} />
        <AppAbout />
        <AppStudents modalRef={modalRef} />
        <AppPlan modalRef={modalRef} />
        <AppFreeCourse modalRef={modalRef} />
      </div>
      <AppFooter />

      <ModalForm ref={modalRef} />
    </div>
  );
};

export default Home;
