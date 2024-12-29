const webText = `Develop applications that leverage all<br>
the advantages of decentralized technologies. We<br>
offer the creation of Web 3.0 applications that<br>
provide users with greater control over<br>
their data, enhanced security, and unique<br>
interaction opportunities.`;

function web3En() {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: webText }}
    />
  );
}

export default web3En;