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
    { id: 1, title: 'sdf' },
    { id: 2, title: 'sdf' },
    { id: 3, title: 'sdf' },
    { id: 4, title: 'sdf' },

  ];

  return (
    // TODO: Стрелочки сделать двумя кнопками сверху справа слайдера, то есть на том же уровене что и заголовок, Точки хочу квадратными в 30px снизу слайдера по середине (это относится и к карусели и к слайдеру)
    // TODO: в карусели в каждой карточке должна быть картинка, заголовок и текст, который должен обрезаться на 3 строчках
    <div className={styles.carouselWrapper}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop
        // TODO: хочу чтобы выглядывала четвертая карточка на 10%
        slidesPerView={3}   // По 3 карточки макс
        spaceBetween={20}
        className={styles.mySwiper}
      >
        {items.map((item) => (
          <SwiperSlide key={Math.random()}>
            <div className={styles.card}>{item.title}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
