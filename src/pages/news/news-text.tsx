import splitContent from '@/functions/sliptContent';
import React from 'react';

type NewsTextProps = {
  content: string;
};

export default function NewsText({ content }: NewsTextProps) {
  const paragraphs = splitContent(content);
  return (
    <div>
      {paragraphs.map((paragraph, index) => (
        <div key={index}>
          <p>{paragraph}</p>
          {index < paragraphs.length - 1 && <br />}
        </div>
      ))}
    </div>
  );
}
