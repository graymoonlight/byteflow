'use client'

import styles from '@/styles/not-found.module.css';
import Link from 'next/link';
import { useLanguage } from "../context/LanguageContext";


export default function error404() {
  const { language } = useLanguage();

  const texts = {
    ru: {
      title: "Такой страницы не существует :(",
      description: "Извините, но данная страница отсутствует. Пожалуйста, вернитесь на главную.",
      linkText: "Вернуться на главную"
    },
    en: {
      title: "This page does not exist :(",
      description: "Sorry, but this page is missing. Please return to the main page.",
      linkText: "Return to the main page"
    },
    zh: {
      title: "此页面不存在 :(",
      description: "抱歉，此页面丢失了。请返回主页。",
      linkText: "返回主页"
    },
  };

  const currentTexts = texts[language] || texts["ru"];


   return (
    <main className={styles.main404}>
      <div className={styles.Container404}>
        <h1>{currentTexts.title}</h1>
        <p>{currentTexts.description}</p>
      </div>
      <Link href="/" className={styles.Link404}>
        {currentTexts.linkText}
      </Link>
    </main>
  );
}
  