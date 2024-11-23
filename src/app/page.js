"use client";

import styles from '@/styles/home.module.css';
import codingImage from '../../public/home/programming.png';
import checkmark from '../../public/home/checkmark.svg';
import line from '../../public/home/line.svg';
import win from '../../public/home/win.svg';
import Tab from '@/modules/tab';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Tab2 from '@/modules/tab2';

export default function Home() {

  const router = useRouter();

  const NavCreate = () => {
    router.push('/create');
  };

  const NavServices = () => {
    router.push('/services');
  };

  return (
    <main className={styles.HomeMain}>
      <section className={styles.HeroSection}>
        <div className={styles.PresText}>
          <h3>Создаем будущее <br/> вашего бизнеса.<br/> Мощно. Результативно</h3>
          <p>Мы не просто разрабатываем<br/> сайты — мы создаем<br/> инструменты для успеха!<br/> Быстро. Гарантировано. Как<br/> будто завтра не наступит.</p>
        </div>
        <div className={styles.PresImage}>
          <Image src={codingImage} width={685} height={455} alt='codingImage'/>
        </div>
      </section>
      <section className={styles.AboutSection}>
        <div className={styles.LeftContainer}>
          <h3>Кто мы?</h3>
          <div className={styles.TextContainer}>
            <p>ByteFlow Studio - это не просто веб-студия,<br/> это команда, которая задает тренды в <br/>цифровом мире. Мы не подстраиваемся <br/>под правила — мы пишем их сами! Наша <br/>страсть к веб-разработке и дизайну <br/>позволяет нам создавать не однотипные <br/>сайты, а мощные инструменты для роста <br/>вашего бизнеса.</p>
            <Image src={checkmark} width={82} height={73} alt='checkmark'/>
          </div>
          <div className={styles.TextContainer}>
            <Image src={checkmark} width={82} height={73} alt='checkmark'/>
            <p>Мы — группа амбициозных <br/>профессионалов, которые понимают, что <br/>вам нужно. Мы знаем, как выделить вас <br/>среди конкурентов, и мы готовы вложить <br/>все свои знания и опыт, чтобы добиться <br/>результата. Каждое наше решение — это <br/>стратегия, каждая строчка кода — это шаг <br/>к вашему успеху.</p>
          </div>
          <div className={styles.TextContainer}>
            <p>Мы работаем с клиентами, которые не <br/>боятся мечтать по-крупному. Мы поможем <br/>превратить ваши мечты в реальность. Ваш <br/>успех - это наша цель. Вместе с нами вы <br/>создадите невероятное!</p>
            <Image src={checkmark} width={82} height={73} alt='checkmark'/>
          </div>
        </div>
        <div className={styles.RightContainer}>
          <Tab/>
        </div>
      </section>
      <section className={styles.AboutBtns}>
        <button onClick={NavCreate}>Стань лидером сейчас!</button>
        <button onClick={NavServices}>Узнать больше</button>
      </section>
      <section className={styles.StructureSection}>
        <h1 className={styles.StructureTitle}>Структура работы</h1>
        <div className={styles.ContentContainer}>
          <div className={styles.LeftContent}>
            <div className={styles.Content}>
              <div className={styles.TitleContainer}>
                <h1 className={styles.StepNumber}>1</h1>
                <h1 className={styles.StepTitle}>Расскажите о своей идее</h1>
              </div>
              <div className={styles.Description}>
                <p>У каждой великой идеи есть потенциал <br/>изменить мир! Не бойтесь делиться <br/>своими амбициями — это первый шаг к <br/>успеху. Расскажите нам о своей визии,<br/> и мы поможем превратить ее в <br/>реальность. Давайте действовать <br/>вместе и сделаем ваш проект <br/>выдающимся!</p>
              </div>
            </div>
            <div className={styles.Content}>
              <div className={styles.TitleContainer}>
                <h1 className={styles.StepNumber}>3</h1>
                <h1 className={styles.StepTitle}>Разработка дизайна</h1>
              </div>
              <div className={styles.Description}>
                <p>Как только концепция готова, мы сразу <br/>приступаем к дизайну вашего <br/>будущего приложения, если его еще <br/>нет. Мы создаем не просто красивый <br/>интерфейс — мы разрабатываем <br/>впечатляющее пользовательское <br/>ощущение, которое  оставит клиентов в <br/>восторге!</p>
              </div>
            </div>
            <div className={styles.Content}>
              <div className={styles.TitleContainer}>
                <h1 className={styles.StepNumber}>5</h1>
                <h1 className={styles.StepTitle}>Проведение тестов и оптимизация</h1>
              </div>
              <div className={styles.Description}>
                <p>Теперь, когда разработка завершена, <br/>мы выходим на важный этап — <br/>тестирование и оптимизация. Мы не <br/>оставляем ничего на удачу! Каждое <br/>приложение проходит строгую <br/>проверку, чтобы гарантировать, что <br/>оно работает безупречно. Мы ищем и <br/>устраняем любые недочеты, чтобы <br/>обеспечить максимальную <br/>производительность и удовлетворение <br/>пользователей.</p>
              </div>
            </div>
          </div>
          <div className={styles.MiddleLine}>
            <Image src={line} width={269} height={717} alt='line'/>
            <Image src={win} width={96} height={74} alt='win'/>
          </div>
          <div className={styles.RightContent}>
            <div className={styles.Content}>
              <div className={styles.TitleContainer}>
                <h1 className={styles.StepTitle2}>Создание концепции</h1>
                <h1 className={styles.StepNumber2}>2</h1>
              </div>
              <div className={styles.Description2}>
                <p>Как только мы поймем ваши <br/>потребности, мы сразу же начинаем <br/>формировать структуру продукта и <br/>искать лучшие пути его реализации. <br/>Мы не ждем, мы действуем! Ваша идея <br/>станет реальностью быстрее, чем вы <br/>думаете.</p>
              </div>
            </div>
            <div className={styles.Content}>
              <div className={styles.TitleContainer}>
                <h1 className={styles.StepTitle2}>Конструирование приложения</h1>
                <h1 className={styles.StepNumber2}>4</h1>
              </div>
              <div className={styles.Description2}>
                <p>Имея концепцию и дизайн на руках, <br/>мы сразу переходим к разработке <br/>программного обеспечения. Работа <br/>идет по спринтам, и вы сможете легко <br/>отслеживать ход разработки и статус <br/>задач в нашем таск-менеджере. Вы <br/>всегда будете в курсе процесса и <br/>уверены в том, что мы движемся к <br/>вашему успеху!</p>
              </div>
            </div>
            <div className={styles.Content}>
              <div className={styles.TitleContainer}>
                <h1 className={styles.StepTitle2}>Публикация продукта</h1>
                <h1 className={styles.StepNumber2}>6</h1>
              </div>
              <div className={styles.Description2}>
                <p>После завершения разработки и <br/>тестирования вашего приложения мы <br/>незамедлительно публикуем его на <br/>вашем домене или в магазинах <br/>приложений. И самое главное — мы <br/>передаем вам все права на <br/>интеллектуальную собственность <br/>разработанного продукта. Вы <br/>полностью контролируете свое <br/>творение!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.MakingSection}>
        <h1>Соберем для вас</h1>
        <Tab2 />
      </section>
    </main>
  );
}
