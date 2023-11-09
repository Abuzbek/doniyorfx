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
    <div className={classNames("flex items-center gap-2", spaceGrotesk)}>
      <div className="flex flex-col gap-0.5">
        <p className="text-white text-sm not-italic font-medium leading-[normal]">
          {name}
        </p>
        <p className="text-white text-xs not-italic font-normal leading-[normal]">
          {phone}
        </p>
      </div>
      <UserIcon />
    </div>
  );
};

export default UserInfo;
