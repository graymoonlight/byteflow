"use client"; // Добавьте эту строку в начало файла

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

  const { language } = useLanguage();

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
      commentDesc: "Напишите ваши пожелания, идеи",
      submitTitle: "Отправить",
      modalAgree: "Заявка отправлена!",
      modalError1: "Ошибка отправки. Попробуйте еще раз.",
      modalError2: "Произошла ошибка. Попробуйте еще раз.",
      modalShould: "Необходимо согласие на обработку персональных данных",
      modalClose: "Закрыть",
      modalTitle1: "Успех",
      modalTitle2: "Ошибка"
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
      commentDesc: "Write your wishes, ideas",
      submitTitle: "Submit",
      modalAgree: "Application submitted!",
      modalError1: "Submission error. Please try again.",
      modalError2: "An error occurred. Please try again.",
      modalShould: "Consent to the processing of personal data is required",
      modalClose: "Close",
      modalTitle1: "Success",
      modalTitle2: "Error"
    },
    zh: {
      mainTitle: "提交您的请求",
      fioTitle: "请输入您的全名*",
      companyTitle: "公司名称",
      phoneTitle: "您的电话号码",
      mailTitle: "您的电子邮件地址*",
      serviceTitle: "服务类型*",
      commentTitle: "评论",
      policyTitle: "我同意处理个人数据",
      fioDesc: "请输入全名",
      companyDesc: "请输入公司名称",
      phoneDesc: "请输入您的电话号码",
      mailDesc: "请输入您的电子邮件地址",
      serviceDesc: "选择服务",
      commentDesc: "写下您的愿望和想法",
      submitTitle: "提交",
      modalAgree: "申请已提交！",
      modalError1: "提交错误。请再试一次。",
      modalError2: "发生错误。请再试一次。",
      modalShould: "需要同意个人数据处理",
      modalClose: "关闭",
      modalTitle1: "成功",
      modalTitle2: "错误"
    }
  };

  const t = texts[language];

  const handleChange = ({ target: { name, value, type, checked } }) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.consent) {
      showModal(t.modalShould, false);
      return;
    }

    try {
      const response = await fetch('/api/sendForm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        showModal(t.modalAgree, true);
        resetForm();
      } else {
        showModal(t.modalError1, false);
      }
    } catch (error) {
      showModal(t.modalError2, false);
    }
  };

  const showModal = (message, success) => {
    setModal({ visible: true, message, success });
  };

  const resetForm = () => {
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      service: '',
      comment: '',
      consent: false,
    });
  };

  const renderField = (label, placeholder, type = 'text', name) => (
    <div className={styles.field3}>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        required={type !== 'checkbox'}
        className={styles.input}
        placeholder={placeholder}
      />
    </div>
  );

  const renderCheckbox = (name, label) => (
    <div className={styles.field4}>
      <label className={styles.customCheckbox}>
        <input
          type="checkbox"
          name={name}
          checked={formData[name]}
          onChange={handleChange}
          className={styles.checkbox}
        />
        <span className={styles.checkmark}></span>
        <span className={styles.checkboxLabel}>
          <Link href="/privacy-policy">{label}</Link>
        </span>
      </label>
    </div>
  );

  return (
    <main className={styles.createMain}>
      {modal.visible && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalWindow}>
            <h2 className={styles.modalTitle}>
              {modal.success ? t.modalTitle1 : t.modalTitle2}
            </h2>
            <p className={styles.modalMessage}>{modal.message}</p>
            <button
              className={styles.modalButton}
              onClick={() => setModal({ ...modal, visible: false })}
            >
              {t.modalClose}
            </button>
          </div>
        </div>
      )}
      <div className={styles.formContainer}>
        <h1 className={styles.title}>{t.mainTitle}</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.leftContainer}>
            {[ 
              { label: t.fioTitle, name: 'name', placeholder: t.fioDesc },
              { label: t.companyTitle, name: 'company', placeholder: t.companyDesc },
              { label: t.phoneTitle, name: 'phone', placeholder: t.phoneDesc, type: 'tel' },
              { label: t.mailTitle, name: 'email', placeholder: t.mailDesc, type: 'email' },
              { label: t.serviceTitle, name: 'service', placeholder: t.serviceDesc, type: 'select' },
              { label: t.commentTitle, name: 'comment', placeholder: t.commentDesc, type: 'textarea' }
            ].map(({ label, name, placeholder, type = 'text' }) => (
              <div key={name} className={styles.field}>
                <label className={styles.label}>{label}</label>
                {type === 'select' ? (
                  <select
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    className={styles.input}
                  >
                    <option value="">{t.serviceDesc}</option>
                    {Object.entries(serviceLabels).map(([key, label]) => (
                      <option key={key} value={key}>{label}</option>
                    ))}
                  </select>
                ) : type === 'textarea' ? (
                  <textarea
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder={placeholder}
                  />
                ) : (
                  renderField(label, placeholder, type, name)
                )}
              </div>
            ))}
            {renderCheckbox('consent', t.policyTitle)}
          </div>
          <div className={styles.rightContainer}>
            <button type="submit" className={styles.button}>{t.submitTitle}</button>
          </div>
        </form>
      </div>
    </main>
  );
}
