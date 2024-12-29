const mobileText = `We develop powerful and intuitive<br>
mobile applications for iOS and Android that<br>
enhance user experience and expand<br>
the capabilities of your business. Our team focuses on<br>
performance, security, and stylish design.`;

function MobileContentEn() {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: mobileText }}
    />
  );
}

export default MobileContentEn;