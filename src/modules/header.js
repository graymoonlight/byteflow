"use client";


import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from '../styles/modules/header.module.css';
import logo from '../../public/logo.png';

const Header = () => {

  const pathname = usePathname();

  const getLinkClass = (linkPath) => {
    if (linkPath === '/create') {
      return pathname === linkPath ? styles.activeLinkCreate : styles.headerLinkCreate;
    }
    return pathname === linkPath ? styles.activeLink : styles.headerLink;
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        {/* Logo */}
        <div className={styles.logo}>
          <Image src={logo} alt="ByteFlow Studio Logo" width={209} height={42} />
        </div>

        {/* Navigation Links */}
        <nav className={styles.nav}>
          <Link href="/" className={getLinkClass('/')}>Главная</Link>
          <Link href="/about" className={getLinkClass('/about')}>О нас</Link>
          <Link href="/services" className={getLinkClass('/services')}>Услуги</Link>
          <Link href="/portfolio" className={getLinkClass('/portfolio')}>Портфолио</Link>
          <Link href="/create" className={getLinkClass('/create')}>Создать проект!</Link>
        </nav>

        {/* Language Switcher */}
        <div className={styles.languageSwitcher}>
          <button>Change language</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
