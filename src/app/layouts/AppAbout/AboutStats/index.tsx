"use client";
import Image from "next/image";
import React from "react";
import videoPoster from "@/assets/img/infoImage.png";
import play from "@/assets/img/play.svg";
import { Montserrat } from "next/font/google";
import styles from "../style.module.scss";
import { data_links } from "../about.data";
import AboutLinks from "../AboutLinks";
import Fancybox from "@/app/components/UI/Fancybox";
import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const montserrat = Montserrat({ subsets: ["latin"] });
type Props = {};

const AboutStats = (props: Props) => {
  return (
    <div className="flex flex-col gap-10">
      <div className={styles.about_stats}>
        <div className={styles.about_content}>
          <div>
            <span className={montserrat.className}>Kurs muallifi</span>
            <h3>Doniyor Abduganiyev</h3>
          </div>
          <Fancybox
            className={classNames(styles.about_video, "lg:hidden flex")}
          >
            <a
              data-fancybox
              href="https://www.youtube.com/watch?v=-WdWSajM_08"
              className="relative max-w-[480px] w-full overflow-hidden sm:h-[600px] h-auto rounded-3xl"
            >
              <img
                src={videoPoster.src}
                alt="Doniyor Abduganiyev"
                className="object-cover w-full h-full"
              />
              <div className={styles.video_overlay}></div>
              <div className={styles.play_button}>
                <img src={play.src} alt="Play button" />
              </div>
            </a>
          </Fancybox>
          <div className={styles.stats_info}>
            <div className="flex flex-col gap-1">
              <span className={montserrat.className}>8+</span>
              <p>Yil Video Production tajriba</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className={montserrat.className}>50+</span>
              <p>Yakunlangan yirik loyihalar</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className={montserrat.className}>400+ </span>
              <p>Xursand shogirdlar</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className={classNames(montserrat.className, "!text-2xl")}>
                DoniyorFX
              </span>
              <p>Online maktabi asoschisi</p>
            </div>
          </div>
        </div>
        <Fancybox className={classNames(styles.about_video, "lg:flex hidden")}>
          <a
            data-fancybox
            href="https://www.youtube.com/watch?v=-WdWSajM_08"
            className="relative max-w-[480px] w-full overflow-hidden sm:h-[600px] h-auto rounded-3xl"
          >
            <img
              src={videoPoster.src}
              alt="Doniyor Abduganiyev"
              className="object-cover w-full h-full"
            />
            <div className={styles.video_overlay}></div>
            <div className={styles.play_button}>
              <img src={play.src} alt="Play button" />
            </div>
          </a>
        </Fancybox>
      </div>
      <div className="">
        <Swiper
          slidesPerView={2.3}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          className={styles.swiper}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {data_links.map((n, i) => (
            <SwiperSlide key={i}>
              <AboutLinks {...n} key={i} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AboutStats;
