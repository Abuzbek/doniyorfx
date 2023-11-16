import React from "react";
import Image from "next/image";
import { Montserrat, Space_Grotesk } from "next/font/google";
import classNames from "classnames";
import Fancybox from "@/app/components/UI/Fancybox";
import { about_video } from "./video.data";
import styles from "../styles.module.scss";
type Props = {};
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const StudentsVideo = (props: Props) => {
  return (
    <div className="flex flex-col gap-10">
      <h3
        className={classNames(
          spaceGrotesk.className,
          "text-white text-[40px] not-italic font-bold leading-[normal] uppercase"
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
        className="grid grid-cols-4 grid-rows-2 gap-5"
      >
        {about_video.map((video, i) => {
          if (i === 0) {
            return (
              <a
                href={video.img.src}
                data-fancybox="gallery"
                key={i}
                className="row-span-2 col-span-2 h-[400px] rounded-2xl"
              >
                <Image
                  src={video.img}
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
                className="rounded-2xl"
              >
                <Image
                  src={video.img}
                  alt={"video" + i}
                  className="w-full h-full object-cover"
                />
              </a>
            );
          }
        })}
      </Fancybox>
      <div className="flex items-center justify-center">
        <a href="#!" className={styles.course_apply}>
          Kursga yozilish
        </a>
      </div>
    </div>
  );
};

export default StudentsVideo;