"use client";

import { useState, useEffect } from 'react';
import styles from '@/styles/modules/tab2.module.css';

const Tab2 = () => {
  const [activeTab, setActiveTab] = useState('markets');
  const [tabContent, setTabContent] = useState('');
  const [tabTitle, setTabTitle] = useState('Маркетплейсы'); // Добавлено состояние для названия вкладки

  useEffect(() => {
    const loadContent = async () => {
      let contentModule;
      switch (activeTab) {
        case 'markets':
          setTabTitle('Маркетплейсы');
          contentModule = await import('@/content/markets');
          break;
        case 'social':
          setTabTitle('Социальные сети');
          contentModule = await import('@/content/markets');
          break;
        case 'learn':
          setTabTitle('Образовательные платформы');
          contentModule = await import('@/content/markets');
          break;
        case 'web3':
          setTabTitle('Приложения Веб 3.0');
          contentModule = await import('@/content/markets');
          break;
        case 'contracts':
          setTabTitle('Смарт-контракты');
          contentModule = await import('@/content/markets');
          break;
        case 'other':
          setTabTitle('Другие сервисы и приложения');
          contentModule = await import('@/content/markets');
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
          Маркетплейсы
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'social' ? styles.active : ''}`}
          onClick={() => setActiveTab('social')}
        >
          Социальные сети
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'learn' ? styles.active : ''}`}
          onClick={() => setActiveTab('learn')}
        >
          Образовательные платформы
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'web3' ? styles.active : ''}`}
          onClick={() => setActiveTab('web3')}
        >
          Приложения Веб 3.0
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'contracts' ? styles.active : ''}`}
          onClick={() => setActiveTab('contracts')}
        >
          Смарт-контракты
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'other' ? styles.active : ''}`}
          onClick={() => setActiveTab('other')}
        >
          Другие сервисы и приложения
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
