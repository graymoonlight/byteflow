const webText = `Ваши идеи – наши решения! Мы разрабатываем<br>
уникальные приложения и сервисы, которые отвечают<br>
конкретным бизнес-задачам и помогают вам опередить<br>
конкурентов. Наши специалисты используют передовые<br>
технологии, обеспечивая максимальную эффективность и<br>
инновации.`;

function otherRu() {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: webText }}
    />
  );
}

export default otherRu;