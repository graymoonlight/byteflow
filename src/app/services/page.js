"use client";

import styles from '@/styles/services.module.css'; 
import Image from 'next/image';

export default function Services() {

  return (
    <main className={styles.HomeMain}>
      {/* Hero Section */}
      <section className={styles.HeroSection}>
        <div className={styles.PresText}>
          <h3>
            Узнайте, как мы можем <br/>
            помочь вам воплотить ваш <br/>
            проект в жизнь.
            </h3>
          <p>
          На каждом этапе — от первой искры идеи до запуска готового<br/>
          продукта — мы работаем бок о бок с нашими клиентами, чтобы не <br/>
          просто понять их потребности, а превзойти их ожидания и создать <br/>
          решение, которое приносит реальные результаты.
          </p>
        </div>
        <div className={styles.PresImage}>
        <Image src="/services/question.svg" alt="Question Icon" width={406} height={387} sizes="(max-width: 768px) 100vw, 50vw"/>

        </div>
      </section>

    {/* Mission Section */}
    <div className={styles.TabBlock}>
    <h2>На что мы способны?</h2>
    </div>
    <section className={styles.CapabilitiesSection}>
    <div className={styles.CapabilitiesGrid}>
    <div className={styles.CapabilitiesBlock}>
    <h2>Веб-разработка</h2>
    <p>
    Создаем надежные и <br/>
    эффективные веб-сервисы, <br/>
    которые гарантируют <br/>
    отличный пользовательский <br/>
    опыт для вашего бизнеса:
    </p>

    <ul className={styles.CapabilitiesList}>
    <li>Маркетплейсы</li>
    <li>Социальные сети</li>
    <li>Образовательные платформы</li>
    </ul>
    </div>

    <div className={styles.CapabilitiesBlock}>
    <h2>Мобильная разработка</h2>
    <p>
    Мы разрабатываем мобильные <br/>
    приложения, которые гарантируют <br/>
    превосходный пользовательский <br/>
    опыт и поддерживают связь с <br/>
    вашими клиентами в любой точке <br/>
    мира:
    </p>

    <ul className={styles.CapabilitiesList}>
    <li>Мобильные соцсети</li>
    <li>Мобильный маркетплейс</li>
    <li>Приложения для доставки</li>
    </ul>
    </div>

    <div className={styles.CapabilitiesBlock}>
    <h2>Веб3.0-разработка</h2>
    <p>
    Есть идея, но не знаете, с чего <br/>
    начать? Мы поможем вам <br/>
    разработать концепцию продукта, <br/>
    что снизит риски и минимизирует <br/>
    ошибки на этапе разработки. Наша <br/>
    услуга включает:
    </p>

    <ul className={styles.CapabilitiesList}>
    <li>Сайт с веб 3.0</li>
    <li>Токены</li>
    <li>Приложения Telegram</li>
    </ul>
    </div>

    <div className={styles.CapabilitiesBlock}>
    <h2>Разработка концепции</h2>
    <p>
    Создаем надежные и <br/>
    эффективные веб-сервисы, <br/>
    которые гарантируют <br/>
    отличный пользовательский <br/>
    опыт для вашего бизнеса:
    </p>

    <ul className={styles.CapabilitiesList}>
    <li>Описание идеи вашего продукта</li>
    <li>Описание концепции вашего продукта</li>
    <li>Разработка технического задания</li>
    </ul>
    </div>

    <div className={styles.CapabilitiesBlock}>
    <h2>Разработка AI-сервисов</h2>
    <p>
     Интеллектуальные AI<br/>
    -сервисы, которые сделают ваш<br/> 
     бизнес более эффективным и <br/>
    конкурентоспособным:
    </p>

    <ul className={styles.CapabilitiesList}>
    <li>Платформы для генерации контента</li>
    <li>AI-ассистенты на основе ChatGPT</li>
    </ul>
    </div>

    <div className={styles.CapabilitiesBlock}>
    <h2>Разработка чат-ботов</h2>
    <p>
    Мы разрабатываем чат-ботов, <br/>
    которые автоматизируют <br/>
    общение с клиентами и <br/>
    повышают эффективность <br/>
    бизнес-процессов:
    </p>

    <ul className={styles.CapabilitiesList}>
    <li>Telegram-боты</li>
    <li>Боты для продаж</li>
    <li>Боты на основе ChatGPT</li>
    </ul>
    </div>

    <div className={styles.CapabilitiesBlock}>
    <h2>Анализ и доработка проекта</h2>
    <p>
    Осуществляем всесторонний <br/>
    анализ и оптимизацию ваших <br/>
    проектов:
    </p>

    <ul className={styles.CapabilitiesList}>
    <li>Оптимизация рабочих процессов</li>
    <li>Устранение багов</li>
    <li>Анализ приложения</li>
    </ul>
    </div>

    <div className={styles.CapabilitiesBlock}>
    <h2>Дизайн продукта</h2>
    <p>
    Разрабатываем уникальный <br/>
    дизайн продукта, который <br/>
    соответствует вашим целям и <br/>
    привлекает целевую <br/>
    аудиторию:
    </p>

    <ul className={styles.CapabilitiesList}>
    <li>Индивидуальный подход</li>
    <li>Фокус на пользовательском опыте</li>
    <li>Адаптивность и современные тренды</li>
    </ul>
    </div>

    </div>
    </section>
    </main>
  );
}