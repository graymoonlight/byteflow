const webText = `Your ideas – our solutions! We develop<br>
unique applications and services that address<br>
specific business challenges and help you stay ahead<br>
of the competition. Our experts use advanced<br>
technologies to ensure maximum efficiency and<br>
innovation.`;

function otherEn() {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: webText }}
    />
  );
}

export default otherEn;