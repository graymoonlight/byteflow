"use client";

import { useState } from 'react';
import styles from '@/styles/create.module.css';
import Link from 'next/link';
import { useLanguage } from "@/context/LanguageContext";

export default function Create() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: '',
    comment: '',
    consent: false,
  });

  const [modal, setModal] = useState({
    visible: false,
    message: '',
    success: true,
  });

  const serviceLabels = {
    web_dev: 'Веб-разработка',
    mobile_dev: 'Мобильная разработка',
    web3_dev: 'Веб3.0-разработка',
    concept_dev: 'Разработка концепции',
    ai_dev: 'Разработка AI-сервисов',
    chatbot_dev: 'Разработка чат-ботов',
    project_analysis: 'Анализ и доработка проекта',
    product_design: 'Дизайн продукта',
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "service") {
      setFormData({
        ...formData,
        [name]: serviceLabels[value],
      });
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.consent) {
      setModal({
        visible: true,
        message: 'Необходимо согласие на обработку персональных данных',
        success: false,
      });
      return;
    }

    try {
      const response = await fetch('/api/sendForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setModal({
          visible: true,
          message: 'Заявка отправлена!',
          success: true,
        });
        setFormData({
          name: '',
          company: '',
          phone: '',
          email: '',
          service: '',
          comment: '',
          consent: false,
        });
      } else {
        setModal({
          visible: true,
          message: 'Ошибка отправки. Попробуйте еще раз.',
          success: false,
        });
      }
    } catch (error) {
      setModal({
        visible: true,
        message: 'Произошла ошибка. Попробуйте еще раз.',
        success: false,
      });
    }
  };

  const { language } = useLanguage();

  const texts = {
    ru: {
      mainTitle: "Оставьте свою заявку",
      fioTitle: "Напишите ваше ФИО*",
      companyTitle: "Название вашей компании",
      phoneTitle: "Ваш номер телефона",
      mailTitle: "Ваш почтовый ящик*",
      serviceTitle: "Тип услуги*",
      commentTitle: "Комментарий",
      policyTitle: "Я соглашаюсь на обработку персональных данных",
      fioDesc: "Введите ФИО",
      companyDesc: "Введите название компании",
      phoneDesc: "Введите номер вашего телефона",
      mailDesc: "Введите ваш почтовый ящик",
      serviceDesc: "Выберите услугу",
      webDesc: "Веб-разработка",
      mobileDesc: "Мобильная разработка",
      web3Desc: "Веб3.0-разработка",
      conceptDesc: "Разработка концепции",
      aiDesc: "Разработка AI-сервисов",
      chatbotDesc: "Разработка чат-ботов",
      projectDesc: "Анализ и доработка проекта",
      productDesc: "Дизайн продукта",
      commentDesc: "Напишите ваши пожелания, идеи",
      submitTitle: "Отправить",
    },
    en: {
      mainTitle: "Submit Your Request",
      fioTitle: "Enter Your Full Name*",
      companyTitle: "Your Company Name",
      phoneTitle: "Your Phone Number",
      mailTitle: "Your Email Address*",
      serviceTitle: "Service Type*",
      commentTitle: "Comment",
      policyTitle: "I agree to the processing of personal data",
      fioDesc: "Enter Full Name",
      companyDesc: "Enter Company Name",
      phoneDesc: "Enter Your Phone Number",
      mailDesc: "Enter Your Email Address",
      serviceDesc: "Select Service",
      webDesc: "Web Development",
      mobileDesc: "Mobile Development",
      web3Desc: "Web 3.0 Development",
      conceptDesc: "Concept Development",
      aiDesc: "AI Service Development",
      chatbotDesc: "Chatbot Development",
      projectDesc: "Project Analysis and Improvement",
      productDesc: "Product Design",
      commentDesc: "Write your wishes, ideas",
      submitTitle: "Submit"
    },
  };

  const t = texts[language];

  return (
    <main className={styles.createMain}>
      {modal.visible && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalWindow}>
            <h2 className={styles.modalTitle}>
              {modal.success ? 'Успех' : 'Ошибка'}
            </h2>
            <p className={styles.modalMessage}>{modal.message}</p>
            <button
              className={styles.modalButton}
              onClick={() => setModal({ ...modal, visible: false })}
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
      <div className={styles.formContainer}>
        <h1 className={styles.title}>{t.mainTitle}</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.leftContainer}>
                <div className={styles.field}>
                    <label className={styles.label}>{t.fioTitle}</label>
                </div>
                <div className={styles.field}>
                    <label className={styles.label}>{t.companyTitle}</label>
                </div>
                <div className={styles.field}>
                    <label className={styles.label}>{t.phoneTitle}</label>
                </div>
                <div className={styles.field}>
                    <label className={styles.label}>{t.mailTitle}</label>
                </div>
                <div className={styles.field}>
                    <label className={styles.label}>{t.serviceTitle}</label>
                </div>
                <div className={styles.field}>
                    <label className={styles.label}>{t.commentTitle}</label>
                </div>
                <div className={styles.field2}>
                    <label className={styles.customCheckbox}>
                        <input
                            type="checkbox"
                            name="consent"
                            checked={formData.consent}
                            onChange={handleChange}
                            className={styles.checkbox}
                        />
                        <span className={styles.checkmark}></span>
                        <span className={styles.checkboxLabel}><Link href={'/privacy-policy'}>{t.policyTitle}</Link></span>
                    </label>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.field3}>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className={styles.input} placeholder={t.fioDesc}/>
                </div>
                <div className={styles.field3}>
                    <input type="text" name="company" value={formData.company} onChange={handleChange} className={styles.input} placeholder={t.companyDesc}/>
                </div>
                <div className={styles.field3}>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={styles.input} placeholder={t.phoneDesc}/>
                </div>
                <div className={styles.field3}>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className={styles.input} placeholder={t.mailDesc}/>
                </div>
                <div className={styles.field3}>
                  <select
                      name="service"
                      value={
                        Object.keys(serviceLabels).find(
                          (key) => serviceLabels[key] === formData.service
                          ) || ""
                      }
                      onChange={handleChange}
                      className={styles.select}
                    >
                    <option value="">{t.serviceDesc}</option>
                    <option value="web_dev">{t.webDesc}</option>
                    <option value="mobile_dev">{t.mobileDesc}</option>
                    <option value="web3_dev">{t.web3Desc}</option>
                    <option value="concept_dev">{t.conceptDesc}</option>
                    <option value="ai_dev">{t.aiDesc}</option>
                    <option value="chatbot_dev">{t.chatbotDesc}</option>
                    <option value="project_analysis">{t.projectDesc}</option>
                    <option value="product_design">{t.productDesc}</option>
                  </select>
                </div>
                <div className={styles.field3}>
                    <textarea name="comment" value={formData.comment} onChange={handleChange} className={styles.input} placeholder={t.commentDesc}/>
                </div>
                <div className={styles.field4}>
                    <label className={styles.customCheckbox}>
                        <input
                            type="checkbox"
                            name="consent"
                            checked={formData.consent}
                            onChange={handleChange}
                            className={styles.checkbox}
                        />
                        <span className={styles.checkmark}></span>
                        <span className={styles.checkboxLabel}><Link href={'/privacy-policy'}>{t.policyTitle}</Link></span>
                    </label>
                </div>
                <button type="submit" className={styles.button}>{t.submitTitle}</button>
            </div>
        </form>
      </div>
    </main>
  );
}
