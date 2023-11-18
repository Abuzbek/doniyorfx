import React, { FC } from "react";
import AppHeader from "./layouts/AppHeader";
import AppInfo from "./layouts/AppInfo";
import AppAbout from "./layouts/AppAbout";
import AppStudents from "./layouts/AppStudents";
import AppPlan from "./layouts/AppPlan";
import AppFAQ from "./layouts/AppFAQ";
import AppFooter from "./layouts/AppFooter";
import AppFreeCourse from "./layouts/AppFreeCourse";

interface Props {}

const Home: FC<Props> = () => {
  return (
    <div>
      <AppHeader />
      <div className="main">
        <AppInfo />
        <AppAbout />
        <AppStudents />
        <AppPlan />
        {/* <AppFAQ /> */}
        <AppFreeCourse />
      </div>
      <AppFooter />
    </div>
  );
};

export default Home;
