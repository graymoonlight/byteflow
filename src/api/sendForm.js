import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, company, phone, email, service, comment } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'email@example.com',
      subject: 'Заявка с сайта',
      text: `ФИО: ${name}\nКомпания: ${company}\nТелефон: ${phone}\nПочта: ${email}\nТип услуги: ${service}\nКомментарий: ${comment}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Заявка отправлена успешно' });
    } catch (error) {
      res.status(500).json({ message: 'Ошибка отправки', error });
    }
  } else {
    res.status(405).json({ message: 'Метод не разрешён' });
  }
}
