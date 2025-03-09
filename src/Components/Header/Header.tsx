'use client';

import React from 'react';
import { useRouter } from 'next/navigation'; // Импортируем useRouter для навигации
import styles from './Header.module.scss';    // Импортируем стили

export default function Header() {
  const router = useRouter();

  // Функция для плавной прокрутки к секции по её id
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Функция для возврата на предыдущую страницу
  const handleObratka = () => {
    router.back();
  };

  return (
    <header className={styles.header}>
      {/* Вместо div.circle используем контейнер с <img> */}
      <div className={styles.logoContainer}>
        <img
          src="/logo.png"         // Путь к логотипу (если лежит в public/logo.png)
          alt="Логотип"
          className={styles.logoImage}
        />
      </div>

      {/* Кнопки для перехода к разным секциям */}
      <div className={styles.anchors}>
        <button onClick={() => handleScrollToSection('section1')}>
          Section 1
        </button>
        <button onClick={() => handleScrollToSection('section2')}>
          Section 2
        </button>
        <button onClick={() => handleScrollToSection('section3')}>
          Section 3
        </button>
      </div>

      {/* Кнопка «Обратно» для возврата на предыдущую страницу */}
      <button className={styles.obratkaBtn} onClick={handleObratka}>
        Обратно
      </button>
    </header>
  );
}
