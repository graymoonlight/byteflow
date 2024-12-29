const webText = `We develop next-generation social platforms<br>
that help people connect with like-minded individuals,<br>
share experiences, and build communities. We<br>
implement innovative features that enhance user<br>
engagement and strengthen their loyalty.`;

function SocialEn() {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: webText }}
    />
  );
}

export default SocialEn;