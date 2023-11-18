import Image from "next/image";
import React from "react";
import smm from "@/assets/img/smm.png";
import Link from "next/link";
import { Space_Grotesk } from "next/font/google";
import classNames from "classnames";
type Props = {};
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

const AppFreeCourse = (props: Props) => {
  return (
    <>
      <div className={classNames('bg-[#0A0A0A] py-20 flex-col md:hidden flex px-4', spaceGrotesk.className)}>
        <h3 className="text-white text-center text-[22px] not-italic font-bold leading-[normal] uppercase">
          Sayt orqali ro’yhatdan otganlar uchun SMM mini kursi sovg’aga beriladi
        </h3>
        <div className="p-5">
          <Image src={smm} alt="smm-free" className="w-full" />
        </div>
        <Link
          href="/#plans"
          className="flex items-start justify-center gap-2.5 shadow-[0px_15px_36px_0px_rgba(198,49,251,0.3)] text-white text-xl not-italic font-medium leading-[normal] tracking-[0.8px] px-16 py-[30px] rounded-[20px] sm:w-auto w-full"
          style={{
            background: "linear-gradient(84deg, #6950ff 0%, #c631fb 100%)",
          }}
        >
          Kursga yozilish
        </Link>
      </div>
      <div className={classNames('bg-[#0A0A0A] py-20 md:block hidden', spaceGrotesk.className)}>
        <div className="max-w-[1180px] grid grid-cols-2 gap-8 mx-auto">
          <div className="flex flex-col gap-10 justify-center">
            <h3 className="text-white text-[40px] not-italic font-bold leading-[normal] uppercase">
              Sayt orqali ro’yhatdan otganlar uchun SMM mini kursi sovg’aga
              beriladi
            </h3>
            <div className="flex items-center justify-start">
              <Link
                href="/#plans"
                className="flex items-start justify-center gap-2.5 shadow-[0px_15px_36px_0px_rgba(198,49,251,0.3)] text-white text-xl not-italic font-medium leading-[normal] tracking-[0.8px] px-16 py-[30px] rounded-[20px] sm:w-auto w-full"
                style={{
                  background:
                    "linear-gradient(84deg, #6950ff 0%, #c631fb 100%)",
                }}
              >
                Kursga yozilish
              </Link>
            </div>
          </div>
          <div className="p-5">
            <Image src={smm} alt="smm-free" className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppFreeCourse;
