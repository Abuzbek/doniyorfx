"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./pagination.scss";
import styles from "./styles.module.scss";
import Card from "./Card";
import { data } from "./opinion.data";
import Fancybox from "@/app/components/UI/Fancybox";
type Props = {};

const StudentsOpinion = (props: Props) => {
  return (
    <div id="feedbacks" className={styles.student_opinion}>
      <h3>O’quvchilar fikrlari</h3>
      <Fancybox className={"h-full"}>
        <Swiper
          slidesPerView={1.3}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          className={styles.swiper}
        >
          {data.map((n, i) => (
            <SwiperSlide key={i} className="!h-auto">
              <Card {...n} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Fancybox>
    </div>
  );
};

export default StudentsOpinion;
