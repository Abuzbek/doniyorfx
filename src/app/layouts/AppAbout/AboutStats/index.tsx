import Image from "next/image";
import React from "react";
import videoPoster from "@/assets/img/image.png";
import play from "@/assets/img/play.png";
import { Montserrat } from "next/font/google";
import styles from "../style.module.scss";
import { data_links } from "../about.data";
import AboutLinks from "../AboutLinks";
import Fancybox from "@/app/components/UI/Fancybox";
import classNames from "classnames";

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
              data-fancybox="gallery"
              href={videoPoster.src}
              className="relative max-w-[480px] w-full overflow-hidden sm:h-[600px] h-auto rounded-3xl"
            >
              <Image
                src={videoPoster}
                alt="Doniyor Abduganiyev"
                className="object-cover w-full h-full"
              />
              <div className={styles.video_overlay}></div>
              <div className={styles.play_button}>
                <Image src={play} alt="Play button" />
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
              <span className={montserrat.className}>100+</span>
              <p>Xursand shogirdlar</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className={montserrat.className}>8+</span>
              <p>Yil Video Production tajriba</p>
            </div>
          </div>
        </div>
        <Fancybox className={classNames(styles.about_video, "lg:flex hidden")}>
          <a
            data-fancybox="gallery"
            href={videoPoster.src}
            className="relative max-w-[480px] w-full overflow-hidden sm:h-[600px] h-auto rounded-3xl"
          >
            <Image
              src={videoPoster}
              alt="Doniyor Abduganiyev"
              className="object-cover w-full h-full"
            />
            <div className={styles.video_overlay}></div>
            <div className={styles.play_button}>
              <Image src={play} alt="Play button" />
            </div>
          </a>
        </Fancybox>
      </div>
      <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-5">
        {data_links.map((n, i) => (
          <AboutLinks {...n} key={i} />
        ))}
      </div>
    </div>
  );
};

export default AboutStats;
