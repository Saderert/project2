export const dynamic = 'force-dynamic';

import Header from '@/Components/Header/Header';      
import MainSlider from '@/Components/MainSlider/MainSlider';
import Carousel from '@/Components/Carousel/Carousel';
import styles from './page.module.scss';
import { sliderData } from '@/consts/sliderData';

export default function HomePage() {
  // TODO: поправить якоря
  // TODO: чуть переделать хедер. Кнопка обратно должна быть кнопкой вызова попапа (открытия модульного окна, в котором будет затемняющий фон, кнопка с крестиком, закрывающая попап, заголовок и текст), также у попапа должна быть анимация появления, какая - похуй
  return (
    <>
      <Header />

      <main className={styles.main}>
        {/* Главный слайдер */}
        {/* TODO: переделать конструкцию (section и h2 увести внутрь компонента и там же стилизовать так) */}
        <section className={styles.sliderSection}>
          <h2>Хуй</h2>
          <MainSlider data={sliderData} />
        </section>

        {/* TODO: унести полностью в компонент + также как с слайдером сделать прокидывание данных + оставить логику с номерами карточек */}
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
