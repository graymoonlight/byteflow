import nodemailer from 'nodemailer';

// Экспортируем POST как именованный метод
export async function POST(req) {
  try {
    const { name, company, phone, email, service, comment } = await req.json();

    console.log('Получены данные:', { name, company, phone, email, service, comment });

    // Настроим транспорт для отправки почты
    const transporter = nodemailer.createTransport({
      host: 'smtp.yandex.ru',  // Яндекс SMTP-сервер
      port: 587,               // Порт для TLS
      secure: false,           // Использовать STARTTLS
      auth: {
        user: process.env.EMAIL_USER,  // Почта отправителя
        pass: process.env.EMAIL_PASS,  // Приложение пароля (в .env)
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,  // Почта отправителя
      to: 'info@byteflow-studio.com',  // Адрес получателя
      subject: 'Заявка с сайта',
      text: `ФИО: ${name}\nКомпания: ${company}\nТелефон: ${phone}\nПочта: ${email}\nТип услуги: ${service}\nКомментарий: ${comment}`,
    };

    // Отправка письма
    const info = await transporter.sendMail(mailOptions);
    console.log('Письмо отправлено:', info);

    return new Response(JSON.stringify({ message: 'Заявка отправлена успешно' }), { status: 200 });
  } catch (error) {
    console.error('Ошибка при отправке письма:', error);
    return new Response(JSON.stringify({ message: 'Ошибка отправки', error: error.message }), { status: 500 });
  }
}