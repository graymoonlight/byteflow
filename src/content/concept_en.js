const conceptText = `We help turn ideas into reality! We work with<br>
you at every stage — from the initial concept to<br>
a finished prototype, ensuring clear planning and<br>
strategic thinking for successful project<br>
implementation.`;

function ConceptContentEn() {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: conceptText }}
    />
  );
}

export default ConceptContentEn;