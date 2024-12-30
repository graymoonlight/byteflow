"use client";

import styles from '@/styles/services.module.css'; 
import Image from 'next/image';
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {

  const { language } = useLanguage();

  const texts = {
    ru: {
      pressTitle: ["Узнайте, как мы можем",
            "помочь вам воплотить ваш",
            "проект в жизнь."],
      pressDesc: ["На каждом этапе — от первой искры идеи до запуска готового",
          "продукта — мы работаем бок о бок с нашими клиентами, чтобы не",
          "просто понять их потребности, а превзойти их ожидания и создать",
          "решение, которое приносит реальные результаты."],
      canTitle: "На что мы способны?",
      webTitle: "Веб-разработка",
      webDesc: ["Создаем надежные и",
        "эффективные веб-сервисы,",
        "которые гарантируют",
        "отличный пользовательский",
        "опыт для вашего бизнеса:"],
      webpere1: "Маркетплейсы",
      webpere2: "Социальные сети",
      webpere3: "Образовательные платформы",
      mobileTitle: "Мобильная разработка",
      mobileDesc: ["Мы разрабатываем мобильные",
        "приложения, которые гарантируют",
        "превосходный пользовательский",
        "опыт и поддерживают связь с",
        "вашими клиентами в любой точке",
        "мира:"],
      mobilepere1: "Мобильные соцсети",
      mobilepere2: "Мобильный маркетплейс",
      mobilepere3: "Приложения для доставки",
      web3Title: "Мобильная разработка",
      web3Desc: ["Есть идея, но не знаете, с чего",
        "начать? Мы поможем вам",
        "разработать концепцию продукта,",
        "что снизит риски и минимизирует",
        "ошибки на этапе разработки. Наша",
        "услуга включает:"],
      web3pere1: "Сайт с веб 3.0",
      web3pere2: "Токены",
      web3pere3: "Приложения Telegram",
      conceptTitle: "Разработка концепции",
      conceptDesc: ["Создаем надежные и",
        "эффективные веб-сервисы,",
        "которые гарантируют",
        "отличный пользовательский",
        "опыт для вашего бизнеса:"],
      conceptpere1: "Описание идеи вашего продукта",
      conceptpere2: "Описание концепции вашего продукта",
      conceptpere3: "Разработка технического задания",
      aiTitle: "Разработка AI-сервисов",
      aiDesc: ["Интеллектуальные AI",
        "-сервисы, которые сделают ваш,",
        "бизнес более эффективным и",
        "конкурентоспособным:"],
      aipere1: "Платформы для генерации контента",
      aipere2: "AI-ассистенты на основе ChatGPT",
      botTitle: "Разработка чат-ботов",
      botDesc: ["Мы разрабатываем чат-ботов,",
        "которые автоматизируют",
        "общение с клиентами и",
        "повышают эффективность",
        "бизнес-процессов:"],
      botpere1: "Telegram-боты",
      botpere2: "Боты для продаж",
      botpere3: "Боты на основе ChatGPT",
      analTitle: "Анализ и доработка проекта",
      analDesc: ["Осуществляем всесторонний",
        "анализ и оптимизацию ваших",
        "проектов:"],
      analpere1: "Оптимизация рабочих процессов",
      analpere2: "Устранение багов",
      analpere3: "Анализ приложения",
      designTitle: "Дизайн продукта",
      designDesc: ["Разрабатываем уникальный",
        "дизайн продукта, который",
        "соответствует вашим целям и",
        "привлекает целевую",
        "аудиторию:"],
      designpere1: "Индивидуальный подход",
      designpere2: "Фокус на пользовательском опыте",
      designpere3: "Адаптивность и современные тренды",
    },
    en: {
      "pressTitle": ["Learn how we can",  
                    "help bring your",  
                    "project to life."],  
      "pressDesc": ["At every stage — from the initial spark of an idea to the launch of a ready",  
                    "product — we work side by side with our clients to not just",  
                    "understand their needs, but to exceed their expectations and create",  
                    "solutions that deliver real results."],  
      "canTitle": "What Are We Capable Of?",  
      "webTitle": "Web Development",  
      "webDesc": ["We create reliable and",  
                  "efficient web services",  
                  "that ensure an excellent",  
                  "user experience for",  
                  "your business:"],  
      "webpere1": "Marketplaces",  
      "webpere2": "Social networks",  
      "webpere3": "Educational platforms",  
      "mobileTitle": "Mobile Development",  
      "mobileDesc": ["We develop mobile",  
                     "applications that guarantee",  
                     "outstanding user",  
                     "experience and keep you",  
                     "connected with your clients",  
                     "anywhere in the world:"],  
      "mobilepere1": "Mobile social networks",  
      "mobilepere2": "Mobile marketplaces",  
      "mobilepere3": "Delivery apps",  
      "web3Title": "Web 3.0 Development",  
      "web3Desc": ["Have an idea but don't know where",  
                   "to start? We help you",  
                   "develop a product concept",  
                   "that reduces risks and minimizes",  
                   "errors during the development phase. Our",  
                   "service includes:"],  
      "web3pere1": "Web 3.0 websites",  
      "web3pere2": "Tokens",  
      "web3pere3": "Telegram applications",  
      "conceptTitle": "Concept Development",  
      "conceptDesc": ["We create reliable and",  
                      "efficient web services",  
                      "that ensure an excellent",  
                      "user experience for",  
                      "your business:"],  
      "conceptpere1": "Description of your product idea",  
      "conceptpere2": "Description of your product concept",  
      "conceptpere3": "Development of technical specifications",  
      "aiTitle": "AI Services Development",  
      "aiDesc": ["Intelligent AI",  
                 "services that make your",  
                 "business more efficient and",  
                 "competitive:"],  
      "aipere1": "Content generation platforms",  
      "aipere2": "AI assistants based on ChatGPT",  
      "botTitle": "Chatbot Development",  
      "botDesc": ["We develop chatbots",  
                  "that automate",  
                  "client communication and",  
                  "enhance the efficiency",  
                  "of business processes:"],  
      "botpere1": "Telegram bots",  
      "botpere2": "Sales bots",  
      "botpere3": "ChatGPT-based bots",  
      "analTitle": "Project Analysis and Refinement",  
      "analDesc": ["We perform comprehensive",  
                   "analysis and optimization of",  
                   "your projects:"],  
      "analpere1": "Workflow optimization",  
      "analpere2": "Bug fixes",  
      "analpere3": "Application analysis",  
      "designTitle": "Product Design",  
      "designDesc": ["We create unique",  
                     "product designs that",  
                     "align with your goals and",  
                     "attract your target",  
                     "audience:"],  
      "designpere1": "Individual approach",  
      "designpere2": "Focus on user experience",  
      "designpere3": "Adaptability and modern trends",  
    },
  };

  const t = texts[language];

  return (
    <main className={styles.HomeMain}>
      {/* Hero Section */}
      <section className={styles.HeroSection}>
        <div className={styles.PresText}>
          <h3>
            {(Array.isArray(t.pressTitle) ? t.pressTitle : t.pressTitle?.split('\n')).map((line, index) => (
                <span key={index}>
                  {line}
                  {index < (Array.isArray(t.pressTitle) ? t.pressTitle.length : t.pressTitle?.split('\n').length) - 1 && <br />}
                </span>
            ))}
          </h3>
          <p>
            {(Array.isArray(t.pressDesc) ? t.pressDesc : t.pressDesc?.split('\n')).map((line, index) => (
                <span key={index}>
                  {line}
                  {index < (Array.isArray(t.pressDesc) ? t.pressDesc.length : t.pressDesc?.split('\n').length) - 1 && <br />}
                </span>
            ))}
          </p>
        </div>
        <div className={styles.PresImage}>
        <Image src="/services/question.svg" alt="Question Icon" width={406} height={387} className={styles.question}/>

        </div>
      </section>

    {/* Mission Section */}
    <div className={styles.TabBlock}>
    <h2>{t.canTitle}</h2>
    </div>
    <section className={styles.CapabilitiesSection}>
    <div className={styles.CapabilitiesGrid}>
    <div className={styles.CapabilitiesBlock}>
    <h2>{t.webTitle}</h2>
    <p>
      {(Array.isArray(t.webDesc) ? t.webDesc : t.webDesc?.split('\n')).map((line, index) => (
        <span key={index}>
          {line}
          {index < (Array.isArray(t.webDesc) ? t.webDesc.length : t.webDesc?.split('\n').length) - 1 && <br />}
        </span>
      ))}
    </p>

    <ul className={styles.CapabilitiesList}>
    <li>{t.webpere1}</li>
    <li>{t.webpere2}</li>
    <li>{t.webpere3}</li>
    </ul>
    </div>

    <div className={styles.CapabilitiesBlock}>
    <h2>{t.mobileTitle}</h2>
    <p>
      {(Array.isArray(t.mobileDesc) ? t.mobileDesc : t.mobileDesc?.split('\n')).map((line, index) => (
        <span key={index}>
          {line}
          {index < (Array.isArray(t.mobileDesc) ? t.mobileDesc.length : t.mobileDesc?.split('\n').length) - 1 && <br />}
        </span>
      ))}
    </p>

    <ul className={styles.CapabilitiesList}>
    <li>{t.mobilepere1}</li>
    <li>{t.mobilepere2}</li>
    <li>{t.mobilepere3}</li>
    </ul>
    </div>

    <div className={styles.CapabilitiesBlock}>
    <h2>{t.web3Title}</h2>
    <p>
      {(Array.isArray(t.web3Desc) ? t.web3Desc : t.web3Desc?.split('\n')).map((line, index) => (
        <span key={index}>
          {line}
          {index < (Array.isArray(t.web3Desc) ? t.web3Desc.length : t.web3Desc?.split('\n').length) - 1 && <br />}
        </span>
      ))}
    </p>

    <ul className={styles.CapabilitiesList}>
    <li>{t.web3pere1}</li>
    <li>{t.web3pere2}</li>
    <li>{t.web3pere3}</li>
    </ul>
    </div>

    <div className={styles.CapabilitiesBlock}>
    <h2>{t.conceptTitle}</h2>
    <p>
      {(Array.isArray(t.conceptDesc) ? t.conceptDesc : t.conceptDesc?.split('\n')).map((line, index) => (
        <span key={index}>
          {line}
          {index < (Array.isArray(t.conceptDesc) ? t.conceptDesc.length : t.conceptDesc?.split('\n').length) - 1 && <br />}
        </span>
      ))}
    </p>

    <ul className={styles.CapabilitiesList}>
    <li>{t.conceptpere1}а</li>
    <li>{t.conceptpere2}</li>
    <li>{t.conceptpere3}</li>
    </ul>
    </div>

    <div className={styles.CapabilitiesBlock}>
    <h2>{t.aiTitle}</h2>
    <p>
      {(Array.isArray(t.aiDesc) ? t.aiDesc : t.aiDesc?.split('\n')).map((line, index) => (
        <span key={index}>
          {line}
          {index < (Array.isArray(t.aiDesc) ? t.aiDesc.length : t.aiDesc?.split('\n').length) - 1 && <br />}
        </span>
      ))}
    </p>

    <ul className={styles.CapabilitiesList}>
    <li>{t.aipere1}</li>
    <li>{t.aipere2}</li>
    </ul>
    </div>

    <div className={styles.CapabilitiesBlock}>
    <h2>{t.botTitle}</h2>
    <p>
      {(Array.isArray(t.botDesc) ? t.botDesc : t.botDesc?.split('\n')).map((line, index) => (
        <span key={index}>
          {line}
          {index < (Array.isArray(t.botDesc) ? t.botDesc.length : t.botDesc?.split('\n').length) - 1 && <br />}
        </span>
      ))}
    </p>

    <ul className={styles.CapabilitiesList}>
    <li>{t.botpere1}</li>
    <li>{t.botpere2}</li>
    <li>{t.botpere3}</li>
    </ul>
    </div>

    <div className={styles.CapabilitiesBlock}>
    <h2>{t.analTitle}</h2>
    <p>
      {(Array.isArray(t.analDesc) ? t.analDesc : t.analDesc?.split('\n')).map((line, index) => (
        <span key={index}>
          {line}
          {index < (Array.isArray(t.analDesc) ? t.analDesc.length : t.analDesc?.split('\n').length) - 1 && <br />}
        </span>
      ))}
    </p>

    <ul className={styles.CapabilitiesList}>
    <li>{t.analpere1}</li>
    <li>{t.analpere2}</li>
    <li>{t.analpere3}</li>
    </ul>
    </div>

    <div className={styles.CapabilitiesBlock}>
    <h2>{t.designTitle}</h2>
    <p>
      {(Array.isArray(t.designDesc) ? t.designDesc : t.designDesc?.split('\n')).map((line, index) => (
        <span key={index}>
          {line}
          {index < (Array.isArray(t.designDesc) ? t.designDesc.length : t.designDesc?.split('\n').length) - 1 && <br />}
        </span>
      ))}
    </p>

    <ul className={styles.CapabilitiesList}>
    <li>{t.designpere1}</li>
    <li>{t.designpere2}</li>
    <li>{t.designpere3}</li>
    </ul>
    </div>

    </div>
    </section>
    </main>
  );
}