'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import styles from './Carousel.module.scss';

const Carousel: React.FC = () => {
  // Массив объектов, которые хотим прокрутить
  const items = [
    { id: 1, title: '' },
    { id: 2, title: '' },
    { id: 3, title: '' },
    { id: 4, title: '' },

  ];

  return (
    <div className={styles.carouselWrapper}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop
        slidesPerView={3}   // По 3 карточки макс
        spaceBetween={20}
        className={styles.mySwiper}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={styles.card}>{item.title}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
