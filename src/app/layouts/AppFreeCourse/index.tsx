import React, { MutableRefObject } from "react";
import smm from "@/assets/img/red-gift-box-3d-png.webp";
import { Space_Grotesk } from "next/font/google";
import classNames from "classnames";
import { IModalMethods } from "@/app/components/UI/Modal";
type Props = {
  modalRef: MutableRefObject<IModalMethods | undefined>;
};
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

const AppFreeCourse = ({ modalRef }: Props) => {
  return (
    <>
      <div
        className={classNames(
          "bg-[#0A0A0A] py-20 flex-col md:hidden flex px-4",
          spaceGrotesk.className
        )}
      >
        <h3 className="text-white text-center text-[22px] not-italic font-bold leading-[normal] uppercase">
          Kontent marketing mini kursi
        </h3>
        <div className="p-5">
          <img src={smm.src} alt="smm-free" className="w-full" />
        </div>
        <button
          className="flex items-start justify-center gap-2.5 shadow-[0px_15px_36px_0px_rgba(198,49,251,0.3)] text-white text-xl not-italic font-medium leading-[normal] tracking-[0.8px] px-16 py-[30px] rounded-[20px] sm:w-auto w-full"
          style={{
            background: "linear-gradient(84deg, #6950ff 0%, #c631fb 100%)",
          }}
          onClick={() => modalRef.current?.openModal()}
        >
          Batafsil ma'lumot olish
        </button>
      </div>
      <div
        className={classNames(
          "bg-[#0A0A0A] py-20 md:block hidden",
          spaceGrotesk.className
        )}
      >
        <div className="max-w-[1180px] grid grid-cols-2 gap-8 mx-auto">
          <div className="flex flex-col gap-10 justify-center">
            <h3 className="text-white text-[48px] not-italic font-bold leading-[normal] uppercase">
              Kontent marketing mini kursi
            </h3>
            <div className="flex items-center justify-start">
              <button
                className="flex items-start justify-center gap-2.5 shadow-[0px_15px_36px_0px_rgba(198,49,251,0.3)] text-white text-xl not-italic font-medium leading-[normal] tracking-[0.8px] px-16 py-[30px] rounded-[20px] sm:w-auto w-full"
                style={{
                  background:
                    "linear-gradient(84deg, #6950ff 0%, #c631fb 100%)",
                }}
                onClick={() => modalRef.current?.openModal()}
              >
                Batafsil ma'lumot olish
              </button>
            </div>
          </div>
          <div className="p-5">
            <img src={smm.src} alt="smm-free" className="w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppFreeCourse;
