const designText = `We create attractive and functional designs<br>
that strengthen your brand and attract users. We<br>
focus on UX/UI to deliver unique<br>
solutions that enhance interaction with your<br>
product and leave a lasting impression.`;

function DesignContentRu() {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: designText }}
    />
  );
}

export default DesignContentRu;