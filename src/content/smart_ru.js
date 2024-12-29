const webText = `Автоматизируйте бизнес-процессы и заключение сделок с<br>
помощью наших надежных смарт-контрактов. Мы<br>
обеспечиваем создание безопасных и прозрачных цифровых<br>
договоров, которые выполняются автоматически и<br>
минимизируют риски.`;

function smartRu() {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: webText }}
    />
  );
}

export default smartRu;