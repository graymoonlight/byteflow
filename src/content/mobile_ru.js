const mobileText = `Разрабатываем мощные и интуитивно понятные<br>
мобильные приложения для iOS и Android, которые<br>
улучшают пользовательский опыт и расширяют<br>
возможности вашего бизнеса. Наша команда сосредоточена<br>
на производительности, безопасности и стильном дизайне.`;

function MobileContentRu() {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: mobileText }}
    />
  );
}

export default MobileContentRu;