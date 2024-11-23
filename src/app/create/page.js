"use client";

import { useState } from 'react';
import styles from '@/styles/create.module.css';
import Link from 'next/link';

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert('Необходимо согласие на обработку персональных данных');
      return;
    }

    const response = await fetch('/api/sendForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Заявка отправлена!');
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
      alert('Ошибка отправки. Попробуйте еще раз.');
    }
  };

  return (
    <main className={styles.createMain}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Оставьте свою заявку</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.leftContainer}>
                <div className={styles.field}>
                    <label className={styles.label}>Напишите ваше ФИО*</label>
                </div>
                <div className={styles.field}>
                    <label className={styles.label}>Название вашей компании</label>
                </div>
                <div className={styles.field}>
                    <label className={styles.label}>Ваш номер телефона</label>
                </div>
                <div className={styles.field}>
                    <label className={styles.label}>Ваш почтовый ящик*</label>
                </div>
                <div className={styles.field}>
                    <label className={styles.label}>Тип услуги*</label>
                </div>
                <div className={styles.field}>
                    <label className={styles.label}>Комментарий</label>
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
                        <span className={styles.checkboxLabel}><Link href={'/privacy-policy'}>Я соглашаюсь на обработку персональных данных</Link></span>
                    </label>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.field3}>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className={styles.input} placeholder="Введите ФИО"/>
                </div>
                <div className={styles.field3}>
                    <input type="text" name="company" value={formData.company} onChange={handleChange} className={styles.input} placeholder="Введите название компании"/>
                </div>
                <div className={styles.field3}>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={styles.input} placeholder="Введите номер вашего телефона"/>
                </div>
                <div className={styles.field3}>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className={styles.input} placeholder="Введите ваш почтовый ящик"/>
                </div>
                <div className={styles.field3}>
                    <input type="text" name="service" value={formData.service} onChange={handleChange} required className={styles.input} placeholder="Выберите тип услуги"/>
                </div>
                <div className={styles.field3}>
                    <textarea name="comment" value={formData.comment} onChange={handleChange} className={styles.input} placeholder="Напишите ваши пожелания, идеи"/>
                </div>
                <button type="submit" className={styles.button}>Отправить</button>
            </div>
        </form>
      </div>
    </main>
  );
}
