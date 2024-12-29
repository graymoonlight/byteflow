const webText = `Automate business processes and deal-making with<br>
the help of our reliable smart contracts. We<br>
ensure the creation of secure and transparent digital<br>
agreements that are executed automatically and<br>
minimize risks.`;

function smartEn() {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: webText }}
    />
  );
}

export default smartEn;