"use client";

import { useState, useEffect } from 'react';
import styles from '@/styles/modules/tab.module.css';

const Tab = () => {
  const [activeTab, setActiveTab] = useState('web');
  const [tabContent, setTabContent] = useState('');

  useEffect(() => {
    const loadContent = async () => {
      let contentModule;
      switch (activeTab) {
        case 'web':
          contentModule = await import('@/content/web');
          break;
        case 'mobile':
          contentModule = await import('@/content/web');
          break;
        case 'concept':
          contentModule = await import('@/content/web');
          break;
        case 'design':
          contentModule = await import('@/content/web');
          break;
        default:
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
          className={`${styles.tabButton} ${activeTab === 'web' ? styles.active : ''}`}
          onClick={() => setActiveTab('web')}
        >
          Веб-разработка
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'mobile' ? styles.active : ''}`}
          onClick={() => setActiveTab('mobile')}
        >
          Мобильная разработка
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'concept' ? styles.active : ''}`}
          onClick={() => setActiveTab('concept')}
        >
          Разработка концепции
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'design' ? styles.active : ''}`}
          onClick={() => setActiveTab('design')}
        >
          Дизайн продукта
        </button>
      </div>

      <p>{tabContent}</p>
    </div>
  );
};

export default Tab;
