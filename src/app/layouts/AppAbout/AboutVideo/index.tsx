import React from "react";
import { about_video } from "../about.data";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import classNames from "classnames";
import Fancybox from "@/app/components/UI/Fancybox";

type Props = {};
const montserrat = Montserrat({ subsets: ["latin"] });
const AboutVideo = (props: Props) => {
  return (
    <div className="flex flex-col gap-6">
      <h3
        className={classNames(
          montserrat.className,
          "text-white text-center text-[28px] not-italic font-bold leading-[normal]"
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
                {/* <pre>{JSON.stringify(video.img)}</pre> */}
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
                className="rounded-2xl overflow-hidden"
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
    </div>
  );
};

export default AboutVideo;
