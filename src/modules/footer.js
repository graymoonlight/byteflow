"use client";

import styles from "../styles/modules/footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import logo from "../../public/logo2.png";
import vk from "../../public/vk.svg";
import tg from "../../public/telegram.svg";

const Footer = () => {
  const { language } = useLanguage();

  const texts = {
    ru: {
      contactInfo: "Контактная информация",
      phone: "Номер телефона:",
      email: "Почта:",
      socialMedia: "Социальные сети",
      rights: "© 2024 ByteFlow Studio. Все права защищены.",
      navLinks: "Навигационные ссылки",
      home: "Главная",
      about: "О нас",
      services: "Услуги",
      portfolio: "Портфолио",
      create: "Создать проект!",
    },
    en: {
      contactInfo: "Contact Information",
      phone: "Phone Number:",
      email: "Email:",
      socialMedia: "Social Media",
      rights: "© 2024 ByteFlow Studio. All rights reserved.",
      navLinks: "Navigation Links",
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      create: "Create a project!",
    },
    zh: {
      contactInfo: "联系信息",
      phone: "电话号码:",
      email: "电子邮件:",
      socialMedia: "社交媒体",
      rights: "© 2024 ByteFlow Studio. 版权所有。",
      navLinks: "导航链接",
      home: "主页",
      about: "关于我们",
      services: "服务",
      portfolio: "作品集",
      create: "创建一个项目!",
      },
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContainerLeft}>
          <div className={styles.footerLogo}>
            <Image src={logo} alt="ByteFlow Studio Logo" width={218} height={100} />
          </div>
          <h2>{texts[language].contactInfo}</h2>
          <div className={styles.contactInfo}>
            <div>
              <h3>{texts[language].phone}</h3>
              <h3>{texts[language].email}</h3>
            </div>
            <div>
              <h3>89996163160</h3>
              <h3>info@byteflow-studio.com</h3>
            </div>
          </div>
          <h2>{texts[language].socialMedia}</h2>
          <div className={styles.mediaInfo}>
            <div>
              <a href="https://vk.com/byteflowstudio">
                <Image src={vk} alt="VK Icon" width={54} height={54}/>
              </a>
            </div>
            {language !== 'zh' && (
            <div>
              <a href="https://t.me/ByteFlowStudio">
                <Image src={tg} alt="Telegram Icon" width={54} height={54} />
              </a>
            </div>
            )}
          </div>
          <div className={styles.footerRights}>
            <h3>{texts[language].rights}</h3>
          </div>
        </div>
        <div className={styles.footerContainerRight}>
          <div className={styles.navLinks}>
            <h3>{texts[language].navLinks}</h3>
            <div><Link href="/">{texts[language].home}</Link></div>
            <div><Link href="/about">{texts[language].about}</Link></div>
            <div><Link href="/services">{texts[language].services}</Link></div>
            <div><Link href="/portfolio">{texts[language].portfolio}</Link></div>
            <div className={styles.footerLinksCreate}><Link href="/create">{texts[language].create}</Link></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;