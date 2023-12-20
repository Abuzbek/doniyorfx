import classNames from "classnames";
import { Space_Grotesk } from "next/font/google";
import React from "react";
import UserIcon from "./UserIcon";

type Props = {
  name: string;
  phone: string;
};
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

const UserInfo = ({ name, phone }: Props) => {
  return (
    <div className={classNames("flex items-center gap-2 text-right", spaceGrotesk)}>
      <div className="flex flex-col gap-0.5">
        <p className="text-black text-base not-italic font-medium leading-[normal] dark:text-white">
          {name}
        </p>
        <p className="text-black text-sm not-italic font-normal leading-[normal] dark:text-white">
          {phone}
        </p>
      </div>
      <UserIcon />
    </div>
  );
};

export default UserInfo;
