'use client';

import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import styles from './MainSlider.module.scss';
import Image from 'next/image';

import { SlideType } from '@/types/globalTypes';

interface IMainSliderProps {
  data: SlideType[];
}

const MainSlider:FC<IMainSliderProps> = ({data}) => {

  return (
    <section className={styles.sliderSection}>
      <h2>Хуй</h2>
      <div className={styles.sliderWrapper} id='section1'>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          loop
          className={styles.mySwiper}
        >
          {data.map((item: SlideType) => (
            <SwiperSlide key={Math.random()}>
              <Image 
                src={item.image}
                alt={item.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MainSlider;
