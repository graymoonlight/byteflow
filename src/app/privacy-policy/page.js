"use client";

import styles from '@/styles/privacy-policy.module.css';
import { useLanguage } from "@/context/LanguageContext";

export default function Policy() {

    const { language } = useLanguage();

    const texts = {
        ru: {
          policyTitle: "Политика обработки персональных данных",
          desc1: ["Настоящим я, заполняя форму на сайте byteflow-studio.com, даю свое",
          "согласие ByteFlow Studio (далее — «Компания») на обработку моих", 
          "персональных данных в соответствии с Федеральным законом от 27.07.2006",
          "№152-ФЗ «О персональных данных», на следующих условиях:"],
          desc2: "Цели обработки данных:",
          desc3: "Оказание консультационных и информационных услуг;",
          desc4: "Обработка заявок на продукцию и услуги Компании;",
          desc5: ["Направление информационных и рекламных материалов о товарах и",
          "услугах Компании;"],
          desc6: ["Улучшение качества обслуживания клиентов и проведение",
          "маркетинговых исследований."],
          desc7: "Перечень обрабатываемых данных:",
          desc8: "Фамилия, имя, отчество;",
          desc9: "Контактный телефон;",
          desc10: "Адрес электронной почты;",
          desc11: ["Иная информация, предоставленная мной в форме на сайте (компания,",
          "проект и т.д.)."],
          desc12: "Условия обработки:",
          desc13: ["Обработка данных будет осуществляться с использованием",
          "автоматизированных и неавтоматизированных средств. Компания",
          "обязуется не передавать полученные персональные данные третьим лицам",
          "без моего согласия, за исключением случаев, предусмотренных",
          "действующим законодательством Российской Федерации."],
          desc14: "Права субъекта данных:",
          desc15: ["Я имею право на получение информации, касающейся обработки моих",
          "персональных данных."],
          desc16: ["Я имею право требовать уточнения, блокирования или уничтожения",
          "моих персональных данных в случае, если они являются неполными,",
          "устаревшими или недостоверными."],
          desc17: ["Я имею право в любое время отозвать данное согласие путем",
          "направления соответствующего уведомления на адрес электронной",
          "почты info@byteflow-studio.com."],
          desc18: "Срок действия согласия:",
          desc19: ["Согласие действует с момента его предоставления и может быть отозвано",
          "мной в любой момент. Отзыв согласия не влияет на законность обработки",
          "данных до момента его отзыва."],
          desc20: "Отзыв согласия:",
          desc21: ["Я уведомлен(а) о возможности отзыва согласия путем направления",
          "письменного уведомления на адрес электронной почты info@byteflow-studio.com. Я",
          "подтверждаю, что ознакомлен(а) с политикой конфиденциальности сайта и",
          "понимаю условия обработки моих персональных данных."],
        },
        en: {
            "policyTitle": "Personal Data Processing Policy",
            "desc1": [
              "By filling out the form on the website byteflow-studio.com, I hereby give my",
              "consent to ByteFlow Studio (hereinafter referred to as the 'Company') for the",
              "processing of my personal data in accordance with Federal Law No. 152-FZ",
              "dated July 27, 2006, 'On Personal Data,' under the following terms:"
            ],
            "desc2": "Purposes of Data Processing:",
            "desc3": "Providing consulting and informational services;",
            "desc4": "Processing requests for the Company's products and services;",
            "desc5": [
              "Sending informational and promotional materials about the Company's products",
              "and services;"
            ],
            "desc6": [
              "Improving the quality of customer service and conducting marketing research."
            ],
            "desc7": "List of Processed Data:",
            "desc8": "Last name, first name, patronymic;",
            "desc9": "Contact phone number;",
            "desc10": "Email address;",
            "desc11": [
              "Other information provided by me in the website form (company,",
              "project, etc.)."
            ],
            "desc12": "Processing Conditions:",
            "desc13": [
              "Data processing will be carried out using automated and non-automated means.",
              "The Company undertakes not to transfer the received personal data to third",
              "parties without my consent, except in cases provided for by the current",
              "legislation of the Russian Federation."
            ],
            "desc14": "Rights of the Data Subject:",
            "desc15": [
              "I have the right to obtain information regarding the processing of my",
              "personal data."
            ],
            "desc16": [
              "I have the right to request clarification, blocking, or deletion of",
              "my personal data if it is incomplete, outdated, or inaccurate."
            ],
            "desc17": [
              "I have the right to withdraw this consent at any time by sending",
              "a corresponding notice to the email address info@byteflow-studio.com."
            ],
            "desc18": "Validity of Consent:",
            "desc19": [
              "The consent is valid from the moment it is provided and can be withdrawn",
              "by me at any time. Withdrawal of consent does not affect the legality of data",
              "processing prior to its withdrawal."
            ],
            "desc20": "Withdrawal of Consent:",
            "desc21": [
              "I am informed about the possibility of withdrawing my consent by sending",
              "a written notification to the email address info@byteflow-studio.com. I",
              "confirm that I have read the website's privacy policy and",
              "understand the terms of personal data processing."
            ]
          },
          zh: {
            "policyTitle": "个人数据处理政策",
            "desc1": [
              "通过填写byteflow-studio.com网站上的表单，我在此同意ByteFlow Studio（以下简称'公司'）",
              "根据2006年7月27日的联邦法第152-FZ号《个人数据法》处理我的个人数据，",
              "并遵循以下条款："
            ],
            "desc2": "数据处理目的：",
            "desc3": "提供咨询和信息服务；",
            "desc4": "处理关于公司产品和服务的请求；",
            "desc5": [
              "发送关于公司产品和服务的通知和推广材料；"
            ],
            "desc6": [
              "提高客户服务质量并进行市场研究。"
            ],
            "desc7": "处理的数据列表：",
            "desc8": "姓、名、父称；",
            "desc9": "联系电话；",
            "desc10": "电子邮件地址；",
            "desc11": [
              "我在网站表单中提供的其他信息（公司、项目等）。"
            ],
            "desc12": "处理条件：",
            "desc13": [
              "数据处理将使用自动化和非自动化手段进行。",
              "公司承诺未经我的同意，不将所收集的个人数据转交第三方，除非现行俄罗斯联邦法律另有规定。"
            ],
            "desc14": "数据主体的权利：",
            "desc15": [
              "我有权获得有关个人数据处理的信息。"
            ],
            "desc16": [
              "我有权请求澄清、封锁或删除我的个人数据，如果它不完整、过时或不准确。"
            ],
            "desc17": [
              "我有权随时撤回此同意，并通过发送相关通知到电子邮件地址 info@byteflow-studio.com。"
            ],
            "desc18": "同意的有效性：",
            "desc19": [
              "同意自提供之日起有效，并且我可以随时撤回。",
              "撤回同意不影响在撤回之前进行的数据处理的合法性。"
            ],
            "desc20": "撤回同意：",
            "desc21": [
              "我已经了解可以通过发送书面通知到电子邮件地址 info@byteflow-studio.com 来撤回我的同意。",
              "我确认我已经阅读了网站的隐私政策，并理解个人数据处理的条款。"
            ]
          }          
      };
    
    const t = texts[language];

    return(
        <main className={styles.mainPolicy}>
            <div className={styles.policyContainer}>
                <h1>{t.policyTitle}</h1>
                <p>
                    {(Array.isArray(t.desc1) ? t.desc1 : t.desc1?.split('\n')).map((line, index) => (
                        <span key={index}>
                            {line}
                            {index < (Array.isArray(t.desc1) ? t.desc1.length : t.desc1?.split('\n').length) - 1 && <br />}
                        </span>
                    ))}
                </p>
                <p>{t.desc2}</p>
                <li>{t.desc3}</li>
                <li>{t.desc4}</li>
                <li>
                    {(Array.isArray(t.desc5) ? t.desc5 : t.desc5?.split('\n')).map((line, index) => (
                        <span key={index}>
                            {line}
                            {index < (Array.isArray(t.desc5) ? t.desc5.length : t.desc5?.split('\n').length) - 1 && <br />}
                        </span>
                    ))}
                </li>
                <li>
                    {(Array.isArray(t.desc6) ? t.desc6 : t.desc6?.split('\n')).map((line, index) => (
                        <span key={index}>
                            {line}
                            {index < (Array.isArray(t.desc6) ? t.desc6.length : t.desc6?.split('\n').length) - 1 && <br />}
                        </span>
                    ))}
                </li>
                <p>{t.desc7}</p>
                <li>{t.desc8}</li>
                <li>{t.desc9}</li>
                <li>{t.desc10}</li>
                <li>
                    {(Array.isArray(t.desc11) ? t.desc11 : t.desc11?.split('\n')).map((line, index) => (
                        <span key={index}>
                            {line}
                            {index < (Array.isArray(t.desc11) ? t.desc11.length : t.desc11?.split('\n').length) - 1 && <br />}
                        </span>
                    ))}
                </li>
                <p>{t.desc12}</p>
                <p>
                    {(Array.isArray(t.desc13) ? t.desc13 : t.desc13?.split('\n')).map((line, index) => (
                        <span key={index}>
                            {line}
                            {index < (Array.isArray(t.desc13) ? t.desc13.length : t.desc13?.split('\n').length) - 1 && <br />}
                        </span>
                    ))}
                </p>
                <p>{t.desc14}</p>
                <li>
                    {(Array.isArray(t.desc15) ? t.desc15 : t.desc15?.split('\n')).map((line, index) => (
                        <span key={index}>
                            {line}
                            {index < (Array.isArray(t.desc15) ? t.desc15.length : t.desc15?.split('\n').length) - 1 && <br />}
                        </span>
                    ))}
                </li>
                <li>{(Array.isArray(t.desc16) ? t.desc16 : t.desc16?.split('\n')).map((line, index) => (
                        <span key={index}>
                            {line}
                            {index < (Array.isArray(t.desc16) ? t.desc16.length : t.desc16?.split('\n').length) - 1 && <br />}
                        </span>
                    ))}
                </li>
                <li>
                    {(Array.isArray(t.desc17) ? t.desc17 : t.desc17?.split('\n')).map((line, index) => (
                        <span key={index}>
                            {line}
                            {index < (Array.isArray(t.desc17) ? t.desc17.length : t.desc17?.split('\n').length) - 1 && <br />}
                        </span>
                    ))}
                </li>
                <p>{t.desc18}</p>
                <p>
                    {(Array.isArray(t.desc19) ? t.desc19 : t.desc19?.split('\n')).map((line, index) => (
                        <span key={index}>
                            {line}
                            {index < (Array.isArray(t.desc19) ? t.desc19.length : t.desc19?.split('\n').length) - 1 && <br />}
                        </span>
                    ))}
                </p>
                <p>{t.desc20}</p>
                <p>
                    {(Array.isArray(t.desc21) ? t.desc21 : t.desc21?.split('\n')).map((line, index) => (
                        <span key={index}>
                            {line}
                            {index < (Array.isArray(t.desc21) ? t.desc21.length : t.desc21?.split('\n').length) - 1 && <br />}
                        </span>
                    ))}
                </p>
            </div>
        </main>
    )
}