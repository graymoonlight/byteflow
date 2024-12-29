const conceptText = `Помогаем превратить идеи в реальность! Мы работаем с<br>
вами на каждом этапе — от первоначальной концепции до<br>
готового прототипа, обеспечивая чёткое планирование и<br>
стратегическое мышление для успешной реализации<br>
проекта.`;

function ConceptContentRu() {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: conceptText }}
    />
  );
}

export default ConceptContentRu;