const webText = `Разрабатываем социальные платформы нового<br>
поколения, которые помогают людям находить<br>
единомышленников, делиться опытом и создавать<br>
сообщества. Внедряем инновационные функции, которые<br>
увеличивают вовлеченность пользователей и укрепляют их<br>
лояльность.`;

function SocialRu() {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: webText }}
    />
  );
}

export default SocialRu;