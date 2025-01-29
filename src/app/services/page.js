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
      webpere4: "от 40.000",
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
      mobilepere4: "0т 80.000",
      web3Title: "Веб 3.0 разработка",
      web3Desc: ["Создаем инновационные и",
        "безопасные веб3.0-решения,",
        "обеспечивающие децентрализованный",
        "и бескомпромиссный пользовательский",
        "опыт для вашего бизнеса:"],
      web3pere1: "Сайт с веб 3.0",
      web3pere2: "Токены",
      web3pere3: "Приложения Telegram",
      web3pere4: "от 150.000",
      conceptTitle: "Разработка концепции",
      conceptDesc: ["Есть идея, но не знаете, с чего",
        "начать? Мы поможем вам",
        "разработать концепцию продукта,",
        "что снизит риски и минимизирует",
        "ошибки на этапе разработки. Наша",
        "услуга включает:"],
      conceptpere1: "Описание идеи вашего продукта",
      conceptpere2: "Описание концепции вашего продукта",
      conceptpere3: "Разработка технического задания",
      conceptpere4: "от 10.000",
      aiTitle: "Разработка AI-сервисов",
      aiDesc: ["Интеллектуальные AI",
        "-сервисы, которые сделают ваш,",
        "бизнес более эффективным и",
        "конкурентоспособным:"],
      aipere1: "Платформы для генерации контента",
      aipere2: "AI-ассистенты на основе ChatGPT",
      aipere3: "от 100.000",
      botTitle: "Разработка чат-ботов",
      botDesc: ["Мы разрабатываем чат-ботов,",
        "которые автоматизируют",
        "общение с клиентами и",
        "повышают эффективность",
        "бизнес-процессов:"],
      botpere1: "Telegram-боты",
      botpere2: "Боты для продаж",
      botpere3: "Боты на основе ChatGPT",
      botpere4: "от 20.000",
      analTitle: "Анализ и доработка проекта",
      analDesc: ["Осуществляем всесторонний",
        "анализ и оптимизацию ваших",
        "проектов:"],
      analpere1: "Оптимизация рабочих процессов",
      analpere2: "Устранение багов",
      analpere3: "Анализ приложения",
      analpere4: "от 150.000",
      designTitle: "Дизайн продукта",
      designDesc: ["Разрабатываем уникальный",
        "дизайн продукта, который",
        "соответствует вашим целям и",
        "привлекает целевую",
        "аудиторию:"],
      designpere1: "Индивидуальный подход",
      designpere2: "Фокус на пользовательском опыте",
      designpere3: "Адаптивность и современные тренды",
      designpere4: "от 50.000",
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
      "web3Desc": [
        "We create innovative and",
        "secure Web 3.0 solutions,",
        "providing decentralized",
        "and uncompromising user",
        "experiences for your business:"],      
      "web3pere1": "Web 3.0 websites",  
      "web3pere2": "Tokens",  
      "web3pere3": "Telegram applications",  
      "conceptTitle": "Concept Development",  
      "conceptDesc": [
        "Have an idea but don't know where to",
        "start? We will help you",
        "develop a product concept,",
        "which will reduce risks and minimize",
        "errors during the development stage. Our",
        "service includes:"],      
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
    zh: {
      "pressTitle": [
        "了解我们如何帮助您",
        "实现您的项目目标。"
      ],
      "pressDesc": [
        "在每一个阶段——从创意的初步火花到准备好产品的发布——我们与客户并肩合作，不仅仅是",
        "理解他们的需求，而是超越他们的期望，创造出能够带来真正成果的解决方案。"
      ],
      "canTitle": "我们的能力是什么？",
      "webTitle": "网页开发",
      "webDesc": [
        "我们创建可靠且高效的网页服务，",
        "确保为您的业务提供卓越的用户体验："
      ],
      "webpere1": "电商平台",
      "webpere2": "社交网络",
      "webpere3": "教育平台",
      "mobileTitle": "移动开发",
      "mobileDesc": [
        "我们开发移动应用，",
        "保证卓越的用户体验，",
        "让您随时随地与客户保持连接："
      ],
      "mobilepere1": "移动社交网络",
      "mobilepere2": "移动电商平台",
      "mobilepere3": "配送应用",
      "conceptTitle": "概念开发",
      "conceptDesc": [
        "有一个想法，但不知道从哪里开始？我们将帮助您",
        "开发产品概念，",
        "减少风险并最小化",
        "开发阶段的错误。我们的",
        "服务包括："
      ],
      "conceptpere1": "产品想法描述",
      "conceptpere2": "产品概念描述",
      "conceptpere3": "技术规格的开发",
      "analTitle": "项目分析与优化",
      "analDesc": [
        "我们为您的项目进行全面分析与优化："
      ],
      "analpere1": "工作流优化",
      "analpere2": "修复 缺陷",
      "analpere3": "应用分析",
      "designTitle": "产品设计",
      "designDesc": [
        "我们创造独特的产品设计，",
        "与您的目标对接，并吸引您的目标",
        "受众："
      ],
      "designpere1": "个性化方法",
      "designpere2": "专注于用户体验",
      "designpere3": "适应性与现代趋势",
 
    }    
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
    <li>{t.webpere4}</li>
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
    <li>{t.mobilepere4}</li>
    </ul>
    </div>

    {language !== 'zh' && (
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
          <li>{t.web3pere4}</li>
        </ul>
      </div>
    )}

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
    <li>{t.conceptpere1}</li>
    <li>{t.conceptpere2}</li>
    <li>{t.conceptpere3}</li>
    <li>{t.conceptpere4}</li>
    </ul>
    </div>
    
    {language !== 'zh' && (
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
    <li>{t.aipere3}</li>
    </ul>
    </div>
    )}

    {language !== 'zh' && (
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
    <li>{t.botpere4}</li>
    </ul>
    </div>
    )}

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
    <li>{t.analpere4}</li>
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
    <li>{t.designpere4}</li>
    </ul>
    </div>

    </div>
    </section>
    </main>
  );
}