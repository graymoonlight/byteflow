"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";
import styles from "../styles/modules/header.module.css";
import logo from "../../public/logo.png";
import menuIcon from "../../public/option.svg";

const Header = () => {
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const texts = {
    ru: {
      home: "Главная",
      about: "О нас",
      services: "Услуги",
      portfolio: "Портфолио",
      create: "Создать проект!",
      changeLanguage: "Change language",
    },
    en: {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      create: "Create a project!",
      changeLanguage: "Сменить язык",
    },
  };

  const getLinkClass = (linkPath) => {
    if (linkPath === "/create") {
      return pathname === linkPath
        ? styles.activeLinkCreate
        : styles.headerLinkCreate;
    }
    return pathname === linkPath ? styles.activeLink : styles.headerLink;
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <Image src={logo} alt="ByteFlow Studio Logo" width={209} height={42} />
        </div>

        <div className={styles.menuToggle} onClick={toggleMenu}>
          <Image src={menuIcon} alt="Menu Icon" />
        </div>

        <nav className={`${styles.nav} ${menuOpen ? styles.active : ""}`}>
          <Link href="/" className={getLinkClass("/")}>
            {texts[language].home}
          </Link>
          <Link href="/about" className={getLinkClass("/about")}>
            {texts[language].about}
          </Link>
          <Link href="/services" className={getLinkClass("/services")}>
            {texts[language].services}
          </Link>
          <Link href="/portfolio" className={getLinkClass("/portfolio")}>
            {texts[language].portfolio}
          </Link>
          <Link href="/create" className={getLinkClass("/create")}>
            {texts[language].create}
          </Link>
          <div className={styles.languageSwitcher2}>
            <button onClick={toggleLanguage}>
              {texts[language].changeLanguage}
            </button>
          </div>
        </nav>

        <div className={styles.languageSwitcher1}>
          <button onClick={toggleLanguage}>
            {texts[language].changeLanguage}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
