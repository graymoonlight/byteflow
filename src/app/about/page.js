"use client";

import styles from '@/styles/about.module.css';
import { useRouter } from 'next/navigation';
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const router = useRouter();
  const { language } = useLanguage();

  const texts = {
    ru: {
      companyTitle: "Компания и наша команда",
      companyDesc: ["Мы занимаемся не только веб-разработкой. Мы — те, кто",
            "переводит ваш бизнес на новый уровень. Мы создаем",
            "платформы, которые заставляют ваш бизнес работать быстрее,",
            "эффективнее и прибыльнее. В мире, где технологии",
            "стремительно развиваются с каждым днём,",
            "мы — ваши проводники в новый мир возможностей."],
      mainTitle: "Наша миссия?",
      mainDesc: ["Дать вам инструмент, который превратит ваш бизнес в",
         "мощную машину для зарабатывания денег.Мы здесь,",
         "чтобы не просто выполнять ваши задачи, а доводить их",
         "до совершенства.Быстро. Четко. С точностью хищника,",
        "идущего на охоту."],
      doTitle: "Как мы это делаем?",
      doDesc: ["Мы слушаем. Понимаем. И сразу начинаем",
            "действовать. Мы фокусируемся на результате.",
            "Разработчики, дизайнеры, программисты — всё под",
            "контролем. Мы знаем, как важны для вас сроки и",
            "качество, и мы никогда не подводим."],
      cenTitle: "Наши ценности?",
      cenDesc: ["Каждый проект для нас — это возможность доказать,",
         "что мы лучшие в своем деле. Мы не просто партнеры —",
         "мы ваш главный актив. Мы вкладываемся в каждый",
         "проект, как если бы делали его для себя. И мы знаем,",
        "как сделать так, чтобы результат вас впечатлил."],
      nextTitle: "Что дальше?",
      nextDesc: ["Дальше — только рост. С нами вы получите не просто",
         "сайт, а инструмент для достижения успеха. Мы",
         "поможем вам захватить свою долю рынка и двигаться",
         "вперед. Готовы? Тогда давайте начнем."],
      futureTitle: "Мы работаем с взглядом на будущее",
      futureDesc: ["ByteFlow Studio— это не просто компания веб-",
        "разработки сегодняшнего дня. Мы строим",
        "решения, которые будут актуальны завтра и в",
        "следующие десятилетия.",
        "Мы движемся вперед с",
        "технологиями Web 3.0, блокчейном,",
        "искусственным интеллектом и децентрализацией.",
        "Это не просто тренды — это будущее бизнеса, и мы",
        "уже прокладываем вам путь туда.",
        "Каждый проект, который мы создаем, рассчитан на",
        "будущее, где ваш бизнес не просто выживет, а",
        "станет лидером. В мире, где всё меняется с",
        "бешеной скоростью, мы делаем продукты, которые",
        "готовы к любым переменам. И с ByteFlow Studio вы",
        "не просто идете в ногу со временем —"],
      futureDescMini: "вы опережаете его",
      createbtnTitle: "Создать проект",
    },
    en: {
      companyTitle: "The Company and Our Team",
      companyDesc: ["We are not just about web development. We are the ones",
      "who elevate your business to the next level. We create",
      "platforms that make your business run faster,",
      "more efficiently, and profitably. In a world where technology",
      "evolves rapidly every day,",
      "we are your guides to a new world of opportunities."],
      mainTitle: "Our Mission?",
      mainDesc: ["To give you the tool that transforms your business into",
      "a powerful money-making machine. We are here",
      "not just to complete your tasks but to perfect them.",
      "Quickly. Clearly. With the precision of a predator",
      "on the hunt."],
      doTitle: "How Do We Do It?",
      doDesc: ["We listen. Understand. And start acting right away.",
      "We focus on results.",
      "Developers, designers, programmers — everything is",
      "under control. We know how important deadlines and",
      "quality are for you, and we never let you down."],
      cenTitle: "Our Values?",
      cenDesc: ["Every project for us is an opportunity to prove",
      "that we are the best in our field. We are not just partners —",
      "we are your greatest asset. We invest in every",
      "project as if we were making it for ourselves. And we know",
      "how to deliver results that will impress you."],
      nextTitle: "What's Next?",
      nextDesc: ["Next is only growth. With us, you get not just",
      "a website but a tool for achieving success. We",
      "will help you secure your share of the market and move",
      "forward. Ready? Then let's get started."],
      futureTitle: "We Work with an Eye on the Future",
      futureDesc: ["ByteFlow Studio is not just a web development company",
      "for today. We build",
      "solutions that will remain relevant tomorrow and",
      "for decades to come.",
      "We move forward with",
      "technologies like Web 3.0, blockchain,",
      "artificial intelligence, and decentralization.",
      "These are not just trends — they are the future of business, and we",
      "are already paving the way for you.",
      "Every project we create is designed for",
      "a future where your business not only survives but",
      "becomes a leader. In a world where everything changes",
      "at lightning speed, we create products that",
      "are ready for any changes. And with ByteFlow Studio, you",
      "not only keep up with the times —"],
      futureDescMini: "you stay ahead of it",
      createbtnTitle: "Create a Project"
    },
    zh: {
      companyTitle: "公司和我们的团队",
      companyDesc: [
        "我们不仅仅是关于网页开发。我们是",
        "让您的业务提升到新水平的人。我们创建",
        "让您的业务运行得更快、",
        "更高效、更有利可图的平台。在一个技术",
        "每天迅速发展的世界里，",
        "我们是您通往新机遇世界的向导。"
      ],
      mainTitle: "我们的使命是什么？",
      mainDesc: [
        "为您提供一个工具，将您的业务转变为",
        "一个强大的盈利机器。我们在这里",
        "不仅仅是完成您的任务，而是将其做到完美。",
        "快速。明确。像捕猎中的掠食者一样精准。"
      ],
      doTitle: "我们如何做到？",
      doDesc: [
        "我们倾听。理解。并立即开始行动。",
        "我们专注于结果。",
        "开发人员、设计师、程序员——一切都",
        "在掌控之中。我们知道截止日期和",
        "质量对您有多重要，我们从不让您失望。"
      ],
      cenTitle: "我们的价值观是什么？",
      cenDesc: [
        "对我们来说，每一个项目都是一个证明",
        "我们是该领域最优秀的机会。我们不仅是合作伙伴——",
        "我们是您最宝贵的资产。我们投入每一个",
        "项目，就像我们为自己制作的一样。我们知道",
        "如何交付让您印象深刻的成果。"
      ],
      nextTitle: "接下来是什么？",
      nextDesc: [
        "接下来只有增长。与我们合作，您不仅仅得到",
        "一个网站，而是一个实现成功的工具。我们",
        "将帮助您确保您的市场份额并向前迈进。",
        "准备好了吗？那么让我们开始吧。"
      ],
      futureTitle: "我们以未来为目标开展工作",
      futureDesc: [
        "ByteFlow Studio 不仅仅是一家面向今天的网页开发公司。",
        "我们构建",
        "将来仍然具有相关性的解决方案，甚至",
        "未来几十年也是如此。",
        "这些不仅仅是趋势——它们是商业的未来，而我们",
        "已经在为您铺平道路。",
        "我们创建的每一个项目都旨在",
        "一个未来，在这个未来中，您的业务不仅存活，",
        "还成为领导者。在一个一切都以",
        "闪电般速度变化的世界里，我们创造的产品",
        "准备好应对任何变化。与 ByteFlow Studio 合作，您",
        "不仅与时俱进——"
      ],
      futureDescMini: "您将领先一步",
      createbtnTitle: "创建一个项目"
    },
  };

  const t = texts[language];

  return (
    <main className={styles.AboutMain}>
      {/* Hero Section */}
      <section className={styles.HeroSection}>
        <div className={styles.PresText}>
          <h3>{t.companyTitle}</h3>
          <p>
            {(Array.isArray(t.companyDesc) ? t.companyDesc : t.companyDesc?.split('\n')).map((line, index) => (
                <span key={index}>
                  {line}
                  {index < (Array.isArray(t.companyDesc) ? t.companyDesc.length : t.companyDesc?.split('\n').length) - 1 && <br />}
                </span>
            ))}
          </p>
        </div>
      </section>

     {/* Mission Section */}
<section className={styles.MissionSection}>
  <div className={styles.MissionGrid}>
    <div className={styles.MissionBlock}>
      <h2>{t.mainTitle}</h2>
      <p>
        {(Array.isArray(t.mainDesc) ? t.mainDesc : t.mainDesc?.split('\n')).map((line, index) => (
                <span key={index}>
                  {line}
                  {index < (Array.isArray(t.mainDesc) ? t.mainDesc.length : t.mainDesc?.split('\n').length) - 1 && <br />}
                </span>
        ))}
      </p>
    </div>
    <div className={styles.MissionBlock}>
      <h2>{t.doTitle}</h2>
      <p>
        {(Array.isArray(t.doDesc) ? t.doDesc : t.doDesc?.split('\n')).map((line, index) => (
                <span key={index}>
                  {line}
                  {index < (Array.isArray(t.doDesc) ? t.doDesc.length : t.doDesc?.split('\n').length) - 1 && <br />}
                </span>
        ))}
      </p>
    </div>
    <div className={styles.MissionBlock}>
      <h2>{t.cenTitle}</h2>
      <p>
        {(Array.isArray(t.cenDesc) ? t.cenDesc : t.cenDesc?.split('\n')).map((line, index) => (
                <span key={index}>
                  {line}
                  {index < (Array.isArray(t.cenDesc) ? t.cenDesc.length : t.cenDesc?.split('\n').length) - 1 && <br />}
                </span>
        ))}
      </p>
    </div>
    <div className={styles.MissionBlock}>
      <h2>{t.nextTitle}</h2>
      <p>
        {(Array.isArray(t.nextDesc) ? t.nextDesc : t.nextDesc?.split('\n')).map((line, index) => (
                <span key={index}>
                  {line}
                  {index < (Array.isArray(t.nextDesc) ? t.nextDesc.length : t.nextDesc?.split('\n').length) - 1 && <br />}
                </span>
        ))}
      </p>
    </div>
  </div>
</section>


      {/* Future Section */}
      <section className={styles.FutureSection}>
        <h3>{t.futureTitle}</h3>
        <p>
        {(Array.isArray(t.futureDesc) ? t.futureDesc : t.futureDesc?.split('\n')).map((line, index) => (
                <span key={index}>
                  {line}
                  {index < (Array.isArray(t.futureDesc) ? t.futureDesc.length : t.futureDesc?.split('\n').length) - 1 && <br />}
                </span>
        ))}<br/>
        <h2>{t.futureDescMini}</h2>
        </p>
        <button
          className={styles.CreateProjectBtn}
          onClick={() => router.push('/create')}
        >
          {t.createbtnTitle}
        </button>
      </section>
    </main>
  );
}
