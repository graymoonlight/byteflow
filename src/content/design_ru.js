const designText = `Создаем привлекательный и функциональный дизайн,<br>
который усиливает бренд и привлекает пользователей. Мы<br>
фокусируемся на UX/UI, чтобы предоставить уникальные<br>
решения, которые улучшают взаимодействие с вашим<br>
продуктом и оставляют незабываемое впечатление.`;

function DesignContentRu() {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: designText }}
    />
  );
}

export default DesignContentRu;