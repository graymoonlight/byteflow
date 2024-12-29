"use client";

import styles from '@/styles/portfolio.module.css';
import kangrun from '../../../public/portfolio/kangrun.png';
import Image from 'next/image';
import { useLanguage } from "@/context/LanguageContext";

export default function Portfolio() {

    const { language } = useLanguage();

    const texts = {
        ru: {
            projectTitle: "Наши проекты",
            linkTitle: "Сайт по продаже автозапчастей",
            descTitle: ["Kangrun Auto — это современный веб-сайт,",
                "разработанный для иностранной компании,",
                "специализирующейся на продаже запчастей",
                "для транспортных средств. Сайт был создан с",
                "акцентом на пользовательский опыт и",
                "удобство навигации, чтобы клиенты могли",
                "легко находить необходимые запчасти и",
                "информацию о них."],
        },
        en: {
            projectTitle: "Our projects",
            linkTitle: "Auto parts sales website",
            descTitle: [
                "Kangrun Auto is a modern website,",
                "designed for a foreign company,",
                "specializing in the sale of auto parts",
                "for vehicles. The website was created with",
                "a focus on user experience and",
                "navigation convenience, so customers can",
                "easily find the necessary parts and",
                "information about them."
              ]              
        },
    };

    const t = texts[language];

    return(
        <main className={styles.mainFolio}>
            <div className={styles.titleContainer}>
                <h1>{t.projectTitle}</h1>
                <div></div>
            </div>
            <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <h1>{t.linkTitle} <a href='https://kangrun-auto.ru'>kangrun-auto</a></h1>
                    <div className={styles.descriptionContainer}>
                        <Image src={kangrun} width={599} height={472} alt='kangrun'/>
                        <p>
                            {(Array.isArray(t.descTitle) ? t.descTitle : t.descTitle?.split('\n')).map((line, index) => (
                                <span key={index}>
                                    {line}
                                    {index < (Array.isArray(t.descTitle) ? t.descTitle.length : t.descTitle?.split('\n').length) - 1 && <br />}
                                </span>
                            ))}
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}