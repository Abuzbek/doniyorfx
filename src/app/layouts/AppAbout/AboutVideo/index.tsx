import React from "react";
import { about_video } from "../about.data";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import classNames from "classnames";
import Fancybox from "@/app/components/UI/Fancybox";
import play from "@/assets/img/play.svg";
type Props = {};
const montserrat = Montserrat({ subsets: ["latin"] });
const AboutVideo = (props: Props) => {
  return (
    <div className="flex flex-col gap-6">
      <h3
        className={classNames(
          montserrat.className,
          "text-white text-center sm:text-[28px] text-xl not-italic font-bold leading-[normal]"
        )}
      >
        Mijozlar uchun tayyorlangan videolardan namunalar
      </h3>
      <Fancybox
        options={{
          Carousel: {
            infinite: false,
          },
        }}
        className="grid lg:grid-cols-4 grid-cols-2 sm:grid-rows-2 gap-5"
      >
        {about_video.map((video, i) => {
          if (i === 0) {
            return (
              <a
                href={video.video}
                data-fancybox="gallery"
                key={i}
                className="sm:row-span-2 col-span-2 sm:h-[400px] h-auto rounded-2xl overflow-hidden relative"
              >
                <img
                  src={video.img.src}
                  alt={"video" + i}
                  className="w-full h-full object-cover"
                />
                <div className="sm:w-[88px] w-[60px] sm:h-[88px] h-[60px] cursor-pointer absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <img src={play.src} alt="Play button" />
                </div>
              </a>
            );
          } else {
            return (
              <a
                href={video.video}
                data-fancybox="gallery"
                key={i}
                className="rounded-2xl overflow-hidden relative"
              >
                <img
                  src={video.img.src}
                  alt={"video" + i}
                  className="w-full h-full object-cover"
                />
                <div className="sm:w-[88px] w-[60px] sm:h-[88px] h-[60px] cursor-pointer absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <img src={play.src} alt="Play button" />
                </div>
              </a>
            );
          }
        })}
      </Fancybox>
    </div>
  );
};

export default AboutVideo;
