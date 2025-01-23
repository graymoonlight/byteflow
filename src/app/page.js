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
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {

  const router = useRouter();
  const { language } = useLanguage();

  const NavCreate = () => {
    router.push('/create');
  };

  const NavServices = () => {
    router.push('/services');
  };

  const texts = {
    ru: {
      heroTitle: ["Создаем будущее", "вашего бизнеса.", "Мощно. Результативно"],
      heroDesc: ["Мы не просто разрабатываем", "сайты — мы создаем", "инструменты для успеха!", "Быстро. Гарантировано. Как", "будто завтра не наступит."],
      aboutTitle: "Кто мы?",
      aboutText1: ["ByteFlow Studio - это не просто веб-студия,", "это команда, которая задает тренды в", "цифровом мире. Мы не подстраиваемся", "под правила — мы пишем их сами! Наша", "страсть к веб-разработке и дизайну", "позволяет нам создавать не однотипные", "сайты, а мощные инструменты для роста", "вашего бизнеса."],
      aboutText2: ["Мы — группа амбициозных",
                  "профессионалов, которые понимают, что",
                  "вам нужно. Мы знаем, как выделить вас",
                  "среди конкурентов, и мы готовы вложить",
                  "все свои знания и опыт, чтобы добиться",
                  "результата. Каждое наше решение — это",
                  "стратегия, каждая строчка кода — это шаг",
                  "к вашему успеху."],
      aboutText3: ["Мы работаем с клиентами, которые не",
                  "боятся мечтать по-крупному. Мы поможем",
                  "превратить ваши мечты в реальность. Ваш",
                  "успех - это наша цель. Вместе с нами вы",
                  "создадите невероятное!"],
      buttonCreate: "Стань лидером сейчас!",
      buttonServices: "Узнать больше",
      structureTitle: "Структура работы",
      makingTitle: "Соберем для вас",
      stepTitle1: "Расскажите о своей идее",
      stepDesc1: [
        "У каждой великой идеи есть потенциал",
        "изменить мир! Не бойтесь делиться",
        "своими амбициями — это первый шаг к",
        "успеху. Расскажите нам о своей визии,",
        "и мы поможем превратить ее в",
        "реальность. Давайте действовать",
        "вместе и сделаем ваш проект",
        "выдающимся!"],
      stepTitle2: "Создание концепции",
      stepDesc2: [
        "Как только мы поймем ваши",
        "потребности, мы сразу же начинаем",
        "формировать структуру продукта и",
        "искать лучшие пути его реализации.",
        "Мы не ждем, мы действуем! Ваша идея",
        "станет реальностью быстрее, чем вы",
        "думаете."],
      stepTitle3: "Разработка дизайна",
      stepDesc3: [
        "Как только концепция готова, мы сразу",
        "приступаем к дизайну вашего",
        "будущего приложения, если его еще",
        "нет. Мы создаем не просто красивый",
        "интерфейс — мы разрабатываем",
        "впечатляющее пользовательское",
        "ощущение, которое оставит клиентов в",
        "восторге!"],
      stepTitle4: "Конструирование приложения",
      stepDesc4: [
        "Имея концепцию и дизайн на руках,",
        "мы сразу переходим к разработке",
        "программного обеспечения. Работа",
        "идет по спринтам, и вы сможете легко",
        "отслеживать ход разработки и статус",
        "задач в нашем таск-менеджере. Вы",
        "всегда будете в курсе процесса и",
        "уверены в том, что мы движемся к",
        "вашему успеху!"],
      stepTitle5: "Проведение тестов и оптимизация",
      stepDesc5: [
        "Теперь, когда разработка завершена,",
        "мы выходим на важный этап —",
        "тестирование и оптимизация. Мы не",
        "оставляем ничего на удачу! Каждое",
        "приложение проходит строгую",
        "проверку, чтобы гарантировать, что",
        "оно работает безупречно. Мы ищем и",
        "устраняем любые недочеты, чтобы",
        "обеспечить максимальную",
        "производительность и удовлетворение",
        "пользователей."],
      stepTitle6: "Публикация продукта",
      stepDesc6: [
        "После завершения разработки и",
        "тестирования вашего приложения мы",
        "незамедлительно публикуем его на",
        "вашем домене или в магазинах",
        "приложений. И самое главное — мы",
        "передаем вам все права на",
        "интеллектуальную собственность",
        "разработанного продукта. Вы",
        "полностью контролируете свое",
        "творение!"],
    },
    en: {
      heroTitle: ["Creating the future", "of your business.", "Powerful. Effective."],
      heroDesc: ["We don't just build", "websites — we create", "tools for success!", "Fast. Guaranteed. As if", "tomorrow won't come."],
      aboutTitle: "Who are we?",
      aboutText1: ["ByteFlow Studio - is not just a web studio,", "it’s a team that sets trends in", "the digital world. We don’t follow", "the rules — we create them ourselves! Our", "passion for web development and design", "allows us to create not generic", "websites, but powerful tools for the growth", "of your business."],
      aboutText2: [
        "We are a group of ambitious",
        "professionals who understand what",
        "you need. We know how to make you stand out",
        "from your competitors, and we are ready to invest",
        "all our knowledge and experience to achieve",
        "results. Every solution we provide is a",
        "strategy, every line of code is a step",
        "towards your success."
      ],
      aboutText3: [
        "We work with clients who aren’t",
        "afraid to dream big. We will help",
        "turn your dreams into reality. Your",
        "success is our goal. Together with us, you",
        "will create something incredible!"
      ],    
      buttonCreate: "Become a leader now!",
      buttonServices: "Learn more",
      structureTitle: "Work structure",
      makingTitle: "We'll build for you",
      stepTitle1: "Tell us about your idea",
      stepDesc1: [
        "Every great idea has the potential",
        "to change the world! Don’t be afraid to share",
        "your ambitions — this is the first step to",
        "success. Tell us about your vision,",
        "and we’ll help turn it into",
        "reality. Let’s act together",
        "and make your project",
        "outstanding!"
        ],
      stepTitle2: "Creating the concept",
      stepDesc2: [
        "Once we understand your",
        "needs, we immediately start",
        "forming the product structure and",
        "finding the best ways to implement it.",
        "We don’t wait, we act! Your idea",
        "will become a reality faster than you",
        "think."
      ],
      stepTitle3: "Design development",
      stepDesc3: [
        "As soon as the concept is ready, we immediately",
        "start designing your",
        "future app, if it doesn’t exist yet.",
        "We create not just a beautiful",
        "interface — we develop",
        "an impressive user",
        "experience that will leave clients in",
        "awe!"
      ],
      stepTitle4: "App construction",
      stepDesc4: [
        "With the concept and design in hand,",
        "we immediately move on to the development",
        "of the software. Work is done in sprints, and you’ll easily",
        "track the development progress and task status",
        "in our task manager. You’ll",
        "always be up to date with the process and",
        "confident that we are moving toward",
        "your success!"
      ],
      stepTitle5: "Testing and optimization",
      stepDesc5: [
        "Now that development is complete,",
        "we move on to an important stage —",
        "testing and optimization. We leave nothing to chance! Every",
        "app undergoes rigorous",
        "testing to ensure that",
        "it works flawlessly. We find and",
        "fix any issues to",
        "ensure maximum",
        "performance and user satisfaction."
      ],
      stepTitle6: "Product launch",
      stepDesc6: [
        "After completing development and",
        "testing your app, we",
        "immediately launch it on",
        "your domain or in app stores.",
        "And most importantly, we",
        "transfer all intellectual property rights",
        "for the developed product to you.",
        "You fully control your",
        "creation!"
      ]
    },
    zh: {
      heroTitle: ["创造未来", "为您的事业。", "强大。高效。"],
      heroDesc: ["我们不仅构建", "网站——我们打造", "成功的工具！", "快速。保证。仿佛", "明天不会来一样。"],
      aboutTitle: "我们是谁？",
      aboutText1: [
        "ByteFlow Studio - 不仅仅是一个网络工作室，",
        "而是一个在数字世界设立趋势的团队。",
        "我们不遵循规则——我们自己创造规则！",
        "我们对网页开发和设计的热情",
        "使我们能够创建不仅是普通网站，",
        "而是为您的业务增长而设计的强大工具。"
      ],
      aboutText2: [
        "我们是一群充满抱负的专业人士，",
        "了解您的需求。我们知道如何让您",
        "从竞争对手中脱颖而出，并愿意投入",
        "我们所有的知识和经验来实现成果。",
        "我们提供的每一个解决方案都是一种战略，",
        "每一行代码都是通往成功的一步。"
      ],
      aboutText3: [
        "我们与敢于梦想的客户合作。",
        "我们将帮助您将梦想变为现实。",
        "您的成功是我们的目标。",
        "与我们一起，您将创造一些不可思议的事物！"
      ],
      buttonCreate: "立即成为领导者！",
      buttonServices: "了解更多",
      structureTitle: "工作结构",
      makingTitle: "我们为您构建",
      stepTitle1: "告诉我们您的想法",
      stepDesc1: [
        "每一个伟大的想法都有改变世界的潜力！",
        "不要害怕分享您的抱负——这是通往",
        "成功的第一步。告诉我们您的愿景，",
        "我们将帮助将其变为现实。",
        "让我们共同努力，",
        "让您的项目与众不同！"
      ],
      stepTitle2: "创建概念",
      stepDesc2: [
        "一旦我们了解了您的需求，",
        "我们会立即开始",
        "构建产品结构并找到",
        "实现它的最佳方式。",
        "我们不等待，我们行动！",
        "您的想法会比您想象的更快成为现实。"
      ],
      stepTitle3: "设计开发",
      stepDesc3: [
        "一旦概念准备好，",
        "我们会立即开始设计",
        "您的未来应用（如果还没有）。",
        "我们不仅创建一个漂亮的界面，",
        "我们还开发一个令人印象深刻的用户体验，",
        "让客户惊叹不已！"
      ],
      stepTitle4: "应用构建",
      stepDesc4: [
        "有了概念和设计，",
        "我们会立即进入软件开发阶段。",
        "工作以冲刺方式进行，您可以轻松地",
        "在我们的任务管理器中跟踪开发进度和任务状态。",
        "您将始终了解流程，",
        "并确信我们正朝着您的成功迈进！"
      ],
      stepTitle5: "测试与优化",
      stepDesc5: [
        "开发完成后，",
        "我们进入重要阶段——",
        "测试与优化。我们不留任何侥幸！每个",
        "应用都会经过严格的测试，",
        "以确保其运行无误。",
        "我们发现并修复所有问题，",
        "以确保最佳性能和用户满意度。"
      ],
      stepTitle6: "产品发布",
      stepDesc6: [
        "完成开发和测试后，",
        "我们会立即将您的应用",
        "发布到您的域名或应用商店。",
        "最重要的是，",
        "我们将所有开发产品的知识产权",
        "转移给您。",
        "您完全掌控您的创作！"
      ]
    }
  };

  const t = texts[language]

  return (
    <main className={styles.HomeMain}>
      <section className={styles.HeroSection}>
        <div className={styles.PresText}>
          <h3>
            {(Array.isArray(t.heroTitle) ? t.heroTitle : t.heroTitle?.split('\n')).map((line, index) => (
              <span key={index}>
                {line}
                {index < (Array.isArray(t.heroTitle) ? t.heroTitle.length : t.heroTitle?.split('\n').length) - 1 && <br />}
              </span>
            ))}
          </h3>
          <p>
            {(Array.isArray(t.heroDesc) ? t.heroDesc : t.heroDesc?.split('\n')).map((line, index) => (
              <span key={index}>
                {line}
                {index < (Array.isArray(t.heroDesc) ? t.heroDesc.length : t.heroDesc?.split('\n').length) - 1 && <br />}
              </span>
            ))}
          </p>
        </div>
        <div className={styles.PresImage}>
          <Image src={codingImage} width={685} height={455} alt='codingImage'/>
        </div>
      </section>
      <section className={styles.AboutSection}>
        <div className={styles.LeftContainer}>
          <h3>{t.aboutTitle}</h3>
          <div className={styles.TextContainer}>
            <p>
              {(Array.isArray(t.aboutText1) ? t.aboutText1 : t.aboutText1?.split('\n')).map((line, index) => (
                <span key={index}>
                  {line}
                  {index < (Array.isArray(t.aboutText1) ? t.aboutText1.length : t.aboutText1?.split('\n').length) - 1 && <br />}
                </span>
              ))}
            </p>
            <Image src={checkmark} width={82} height={73} alt='checkmark' className={styles.checkmark}/>
          </div>
          <div className={styles.TextContainer}>
            <Image src={checkmark} width={82} height={73} alt='checkmark' className={styles.checkmark}/>
            <p>
              {(Array.isArray(t.aboutText2) ? t.aboutText2 : t.aboutText2?.split('\n')).map((line, index) => (
                <span key={index}>
                  {line}
                  {index < (Array.isArray(t.aboutText2) ? t.aboutText2.length : t.aboutText2?.split('\n').length) - 1 && <br />}
                </span>
              ))}
            </p>
          </div>
          <div className={styles.TextContainer}>
            <p>
              {(Array.isArray(t.aboutText3) ? t.aboutText3 : t.aboutText3?.split('\n')).map((line, index) => (
                <span key={index}>
                  {line}
                  {index < (Array.isArray(t.aboutText3) ? t.aboutText3.length : t.aboutText3?.split('\n').length) - 1 && <br />}
                </span>
              ))}
            </p>
            <Image src={checkmark} width={82} height={73} alt='checkmark' className={styles.checkmark}/>
          </div>
        </div>
        <div className={styles.RightContainer}>
          <Tab/>
        </div>
      </section>
      <section className={styles.AboutBtns}>
        <button onClick={NavCreate}>{t.buttonCreate}</button>
        <button onClick={NavServices}>{t.buttonServices}</button>
      </section>
      <section className={styles.StructureSection}>
        <h1 className={styles.StructureTitle}>{t.structureTitle}</h1>
        <div className={styles.ContentContainer}>
          <div className={styles.LeftContent}>
            <div className={styles.Content}>
              <div className={styles.TitleContainer}>
                <h1 className={styles.StepNumber}>1</h1>
                <h1 className={styles.StepTitle}>{t.stepTitle1}</h1>
              </div>
              <div className={styles.Description}>
                <p>
                  {(Array.isArray(t.stepDesc1) ? t.stepDesc1 : t.stepDesc1?.split('\n')).map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < (Array.isArray(t.stepDesc1) ? t.stepDesc1.length : t.stepDesc1?.split('\n').length) - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            </div>
            <div className={styles.Content}>
              <div className={styles.TitleContainer}>
                <h1 className={styles.StepNumber}>3</h1>
                <h1 className={styles.StepTitle}>{t.stepTitle3}</h1>
              </div>
              <div className={styles.Description}>
                <p>
                  {(Array.isArray(t.stepDesc3) ? t.stepDesc3 : t.stepDesc3?.split('\n')).map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < (Array.isArray(t.stepDesc3) ? t.stepDesc3.length : t.stepDesc3?.split('\n').length) - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            </div>
            <div className={styles.Content}>
              <div className={styles.TitleContainer}>
                <h1 className={styles.StepNumber}>5</h1>
                <h1 className={styles.StepTitle}>{t.stepTitle5}</h1>
              </div>
              <div className={styles.Description}>
                <p>
                  {(Array.isArray(t.stepDesc5) ? t.stepDesc5 : t.stepDesc5?.split('\n')).map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < (Array.isArray(t.stepDesc5) ? t.stepDesc5.length : t.stepDesc5?.split('\n').length) - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.MiddleLine}>
            <Image src={line} width={269} height={717} alt='line' className={styles.line}/>
            <Image src={win} width={96} height={74} alt='win' className={styles.win}/>
          </div>
          <div className={styles.RightContent}>
            <div className={styles.Content}>
              <div className={styles.TitleContainer}>
                <h1 className={styles.StepTitle2}>{t.stepTitle2}</h1>
                <h1 className={styles.StepNumber2}>2</h1>
              </div>
              <div className={styles.Description2}>
                <p>
                  {(Array.isArray(t.stepDesc2) ? t.stepDesc2 : t.stepDesc2?.split('\n')).map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < (Array.isArray(t.stepDesc2) ? t.stepDesc2.length : t.stepDesc2?.split('\n').length) - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            </div>
            <div className={styles.Content}>
              <div className={styles.TitleContainer}>
                <h1 className={styles.StepTitle2}>{t.stepTitle4}</h1>
                <h1 className={styles.StepNumber2}>4</h1>
              </div>
              <div className={styles.Description2}>
                <p>
                  {(Array.isArray(t.stepDesc4) ? t.stepDesc4 : t.stepDesc4?.split('\n')).map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < (Array.isArray(t.stepDesc4) ? t.stepDesc4.length : t.stepDesc4?.split('\n').length) - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            </div>
            <div className={styles.Content}>
              <div className={styles.TitleContainer}>
                <h1 className={styles.StepTitle2}>{t.stepTitle6}</h1>
                <h1 className={styles.StepNumber2}>6</h1>
              </div>
              <div className={styles.Description2}>
                <p>
                  {(Array.isArray(t.stepDesc6) ? t.stepDesc6 : t.stepDesc6?.split('\n')).map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < (Array.isArray(t.stepDesc6) ? t.stepDesc6.length : t.stepDesc6?.split('\n').length) - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.MakingSection}>
        <h1>{t.makingTitle}</h1>
        <Tab2 />
      </section>
    </main>
  );
}
