import splitContent from '@/functions/sliptContent';

type NewsTextProps = {
  content: string;
};

export default function NewsText({ content }: NewsTextProps) {
  const paragraphs = splitContent(content);
  return (
    <div>
      {paragraphs.map((paragraph, index) => (
        <>
          <p key={index}>{paragraph}</p>
          {index < paragraphs.length - 1 && <br />}
        </>
      ))}
    </div>
  );
}
