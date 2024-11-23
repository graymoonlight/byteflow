import styles from '@/styles/not-found.module.css';
import Link from 'next/link';


export default function error404() {
    return (
      <main className={styles.main404}>
        <div className={styles.Container404}>
          <h1>Такой страницы не существует :(</h1>
          <p>Извините, но данная<br/> страница отсутствует. Пожалуйста, вернитесь на <br/>главную</p>
        </div>
        <Link href="/" className={styles.Link404}>Вернуться на главную</Link>
      </main>
    );
}
  