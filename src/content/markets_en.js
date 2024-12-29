const webText = `A marketplace is a powerful platform,<br/> 
that makes transactions between <br/> 
users easier and more efficient. <br/> 
The marketplace business model allows you to <br/> 
trade other people's goods and services, which means you <br/> 
don’t have to worry about <br/> 
purchases or maintaining a large staff <br/> 
of employees. Instead, you provide <br/> 
people with the opportunity to find each other and <br/> 
make profitable deals.`;

function MarketsEn() {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: webText }}
    />
  );
}

export default MarketsEn;