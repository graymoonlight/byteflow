"use client";

import { useState, useEffect } from "react";
import styles from "@/styles/modules/tab.module.css";
import { useLanguage } from "@/context/LanguageContext";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("web");
  const [tabContent, setTabContent] = useState("");
  const { language } = useLanguage();

  const texts = {
    ru: {
      webTitle: "Веб-разработка",
      mobileTitle: "Мобильная разработка",
      conceptTitle: "Разработка концепции",
      designTitle: "Дизайн продукта",
    },
    en: {
      webTitle: "Web Development",
      mobileTitle: "Mobile Development",
      conceptTitle: "Concept Development",
      designTitle: "Product Design",
    },
    zh: {
      webTitle: "网页开发",
      mobileTitle: "移动开发",
      conceptTitle: "概念开发",
      designTitle: "产品设计"
    }
  };

  const t = texts[language];

  useEffect(() => {
    const loadContent = async () => {
      let contentModule;
      switch (activeTab) {
        case "web":
          contentModule = await import(`@/content/web_${language}`);
          break;
        case "mobile":
          contentModule = await import(`@/content/mobile_${language}`);
          break;
        case "concept":
          contentModule = await import(`@/content/concept_${language}`);
          break;
        case "design":
          contentModule = await import(`@/content/design_${language}`);
          break;
        default:
          contentModule = { default: "Содержимое отсутствует" };
      }
      setTabContent(contentModule.default);
    };
    loadContent();
  }, [activeTab, language]);

  return (
    <div className={styles.content}>
      <div className={styles.tabs}>
        <button
          className={`${styles.tabButton} ${activeTab === "web" ? styles.active : ""}`}
          onClick={() => setActiveTab("web")}
        >
          {t.webTitle}
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === "mobile" ? styles.active : ""}`}
          onClick={() => setActiveTab("mobile")}
        >
          {t.mobileTitle}
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === "concept" ? styles.active : ""}`}
          onClick={() => setActiveTab("concept")}
        >
          {t.conceptTitle}
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === "design" ? styles.active : ""}`}
          onClick={() => setActiveTab("design")}
        >
          {t.designTitle}
        </button>
      </div>

      <div>{tabContent}</div>
    </div>
  );
};

export default Tab;
