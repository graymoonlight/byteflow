const webText = `市场平台是一个强大的平台，<br/> 
能够让用户之间的交易<br/> 
更加便捷高效。<br/> 
市场平台的商业模式允许您<br/> 
交易他人的商品和服务，这意味着您<br/> 
无需担心采购或维持一支庞大的<br/> 
员工团队。相反，您为人们<br/> 
提供了互相寻找并<br/> 
达成盈利交易的机会。`;

function MarketsZh() {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: webText }}
    />
  );
}

export default MarketsZh;