"use client"

import styles from '../styles/modules/footer.module.css';
import Image from 'next/image';
import logo from '../../public/logo2.png';
import vk from '../../public/vk.svg';
import tg from '../../public/telegram.svg';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContainerLeft}>
          <div className={styles.footerLogo}>
            <Image src={logo} alt="ByteFlow Studio Logo" width={218} height={116} />
          </div>
          <h2>Контактная информация</h2>
          <div className={styles.contactInfo}>
            <div>
              <h3>Номер телефона:</h3>
              <h3>Почта:</h3>
            </div>
            <div>
              <h3>89999999999</h3>
              <h3>some@gmail.com</h3>
            </div>
          </div>
          <h2>Социальные сети</h2>
          <div className={styles.mediaInfo}>
            <div>
              <Image src={vk} alt="VK Icon" width={54} height={54} />
            </div>
            <div>
              <Image src={tg} alt="Telegram Icon" width={54} height={54} />
            </div>
          </div>
          <div className={styles.footerRights}>
            <h3>© 2024 ByteFlow Studio. All rights reserved.</h3>
          </div>
        </div>
        <div className={styles.footerContainerRight}>
          <div className={styles.navLinks}>
            <h3>Навигационные ссылки</h3>
            <div><Link href="/">Главная</Link></div>
            <div><Link href="/about">О нас</Link></div>
            <div><Link href="/services">Услуги</Link></div>
            <div><Link href="/portfolio">Портфолио</Link></div>
            <div className={styles.footerLinksCreate}><Link href="/create">Создать проект!</Link></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
