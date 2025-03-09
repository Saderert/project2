"use client";

import Header from '@/Components/Header/Header';      
import MainSlider from '@/Components/MainSlider/MainSlider';
import Carousel from '@/Components/Carousel/Carousel';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <>
      <Header />

      <main className={styles.main}>
        {/* Главный слайдер */}
        <section className={styles.sliderSection}>
          <h2></h2>
          <MainSlider />
        </section>

        {/* Блок с плиткой  */}
        <section className={styles.tilesSection} id="section1">
          <h2></h2>
          <div className={styles.tilesGrid}>
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className={styles.tile}>
                Карточка {i + 1}
              </div>
            ))}
          </div>
        </section>

        {/* Блок со слайдером-каруселью */}
        <section className={styles.carouselSection} id="section2">
          <h2></h2>
          <Carousel />
        </section>

        {/* Пример ещё одной секции, если нужно (для 3-го якоря) */}
        <section style={{ minHeight: '50vh' }} id="section3">
          <h2></h2>
          <p></p>
        </section>
      </main>
    </>
  );
}
