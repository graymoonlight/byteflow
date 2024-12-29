"use client";

import { useState, useEffect } from 'react';
import styles from '@/styles/modules/tab2.module.css';
import { useLanguage } from "@/context/LanguageContext";

const Tab2 = () => {
  const [activeTab, setActiveTab] = useState('markets');
  const [tabContent, setTabContent] = useState('');
  const [tabTitle, setTabTitle] = useState('');
  const { language } = useLanguage();

  const texts = {
    ru: {
      marketsTitle: "Маркетплейсы",
      socialTitle: "Социальные сети",
      learnTitle: "Образовательные платформы",
      web3Title: "Приложения Веб 3.0",
      smartTitle: "Смарт-контракты",
      otherTitle: "Другие сервисы и приложения",
    },
    en: {
      marketsTitle: "Marketplaces",
      socialTitle: "Social Networks",
      learnTitle: "Educational Platforms",
      web3Title: "Web 3.0 Applications",
      smartTitle: "Smart-contracts",
      otherTitle: "Other services and apps",
    },
  };

  const t = texts[language];

  useEffect(() => {
    const loadContent = async () => {
      let contentModule;
      switch (activeTab) {
        case 'markets':
          setTabTitle(t.marketsTitle);
          contentModule = await import(`@/content/markets_${language}`);
          break;
        case 'social':
          setTabTitle(t.socialTitle);
          contentModule = await import(`@/content/social_${language}`);
          break;
        case 'learn':
          setTabTitle(t.learnTitle);
          contentModule = await import(`@/content/learn_${language}`);
          break;
        case 'web3':
          setTabTitle(t.web3Title);
          contentModule = await import(`@/content/web3_${language}`);
          break;
        case 'contracts':
          setTabTitle(t.smartTitle);
          contentModule = await import(`@/content/smart_${language}`);
          break;
        case 'other':
          setTabTitle(t.otherTitle);
          contentModule = await import(`@/content/other_${language}`);
          break;
        default:
          setTabTitle('Содержимое отсутствует');
          contentModule = { default: 'Содержимое отсутствует' };
      }
      setTabContent(contentModule.default);
    };
    loadContent();
  }, [activeTab]);

  return (
    <div className={styles.content}>
      <div className={styles.tabs}>
        <button
          className={`${styles.tabButton} ${activeTab === 'markets' ? styles.active : ''}`}
          onClick={() => setActiveTab('markets')}
        >
          {t.marketsTitle}
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'social' ? styles.active : ''}`}
          onClick={() => setActiveTab('social')}
        >
          {t.socialTitle}
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'learn' ? styles.active : ''}`}
          onClick={() => setActiveTab('learn')}
        >
          {t.learnTitle}
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'web3' ? styles.active : ''}`}
          onClick={() => setActiveTab('web3')}
        >
          {t.web3Title}
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'contracts' ? styles.active : ''}`}
          onClick={() => setActiveTab('contracts')}
        >
          {t.smartTitle}
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'other' ? styles.active : ''}`}
          onClick={() => setActiveTab('other')}
        >
          {t.otherTitle}
        </button>
      </div>

      <div className={styles.textContainer}>
        <h3 className={styles.tabTitle}>{tabTitle}</h3>
        <p>{tabContent}</p>
      </div>
    </div>
  );
};

export default Tab2;
