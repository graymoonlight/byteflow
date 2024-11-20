"use client"

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from '../styles/modules/header.module.css';
import logo from '../../public/logo.png';

const Header = () => {

    const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
            <Image src={logo} alt="ByteFlow Studio Logo" width={209} height={42} />
        </div>
        <nav className={styles.headerLinks}>
          <div className={pathname === "/" ? styles.activeLink : styles.headerLinksHome}>
            <Link href="/">Главная</Link>
          </div>
          <div className={pathname === "/about" ? styles.activeLink : styles.headerLinksAbout}>
            <Link href="/about">О нас</Link>
          </div>
          <div className={pathname === "/services" ? styles.activeLink : styles.headerLinksServi}>
            <Link href="/services">Услуги</Link>
          </div>
          <div className={pathname === "/portfolio" ? styles.activeLink : styles.headerLinksPortf}>
            <Link href="/portfolio">Портфолио</Link>
          </div>
          <div className={pathname === "/create" ? styles.activeLinkCreate : styles.headerLinksCreate}>
            <Link href="/create">Создать проект!</Link>
          </div>
        </nav>
        <div className={styles.headerLanguage}>
          <button>Change language</button>
        </div>
      </div>
    </header>
  );
};

export default Header;





