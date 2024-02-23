import React, { MutableRefObject } from "react";
import Image from "next/image";
import { Montserrat, Space_Grotesk } from "next/font/google";
import classNames from "classnames";
import Fancybox from "@/app/components/UI/Fancybox";
import { about_video } from "./video.data";
import styles from "../styles.module.scss";
import Link from "next/link";
import { IModalMethods } from "@/app/components/UI/Modal";
type Props = {
  modalRef: MutableRefObject<IModalMethods | undefined>;
};
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const StudentsVideo = ({ modalRef }: Props) => {
  return (
    <div id="feedbacks" className="flex flex-col gap-10">
      <h3
        className={classNames(
          spaceGrotesk.className,
          "text-white sm:text-[40px] text-[22px] text-center not-italic font-bold leading-[normal] uppercase"
        )}
      >
        O’quvchilar bajargan ishlari
      </h3>
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
          },
        }}
        className="grid lg:grid-cols-4 sm:grid-cols-2 sm:grid-rows-2 gap-5"
      >
        {about_video.map((video, i) => {
          if (i === 0) {
            return (
              <a
                href={video.img.src}
                data-fancybox="gallery"
                key={i}
                className="sm:row-span-2 sm:col-span-2 sm:h-[400px] h-auto rounded-2xl overflow-hidden"
              >
                <img
                  src={video.img.src}
                  alt={"video" + i}
                  className="w-full h-full object-cover"
                />
              </a>
            );
          } else {
            return (
              <a
                href={video.img.src}
                data-fancybox="gallery"
                key={i}
                className="rounded-2xl overflow-hidden"
              >
                <img
                  src={video.img.src}
                  alt={"video" + i}
                  className="w-full h-full object-cover"
                />
              </a>
            );
          }
        })}
      </Fancybox>
      <div className="flex items-center justify-center w-full">
        <button
          onClick={() => modalRef.current?.openModal()}
          className={styles.course_apply}
        >
          Batafsil ma'lumot olish
        </button>
      </div>
    </div>
  );
};

export default StudentsVideo;
