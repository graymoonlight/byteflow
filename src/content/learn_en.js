const webText = `Shape the future of education with our help! We<br>
develop interactive and personalized<br>
educational platforms that make learning<br>
accessible and engaging. Supportive tools<br>
help users achieve their educational goals at their<br>
own pace.`;

function LearnEn() {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: webText }}
    />
  );
}

export default LearnEn;