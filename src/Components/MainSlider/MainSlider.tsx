'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import styles from './MainSlider.module.scss';

const MainSlider: React.FC = () => {
  return (
    <div className={styles.sliderWrapper}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop
        className={styles.mySwiper}
      >
        <SwiperSlide>
          <img src="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainSlider;
