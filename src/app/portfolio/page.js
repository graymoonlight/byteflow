import styles from '@/styles/portfolio.module.css';
import kangrun from '../../../public/portfolio/kangrun.png';
import Image from 'next/image';

export default function Portfolio() {
    return(
        <main className={styles.mainFolio}>
            <div className={styles.titleContainer}>
                <h1>Наши проекты</h1>
                <div></div>
            </div>
            <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <h1>Сайт по продаже автозапчастей <a href='https://kangrun-auto.ru'>kangrun-auto</a></h1>
                    <div className={styles.descriptionContainer}>
                        <Image src={kangrun} width={599} height={472} alt='kangrun'/>
                        <p>Kangrun Auto — это современный веб-сайт, <br/>разработанный для иностранной компании, <br/>специализирующейся на продаже запчастей <br/>для транспортных средств. Сайт был создан с <br/>акцентом на пользовательский опыт и <br/>удобство навигации, чтобы клиенты могли <br/>легко находить необходимые запчасти и <br/>информацию о них.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}