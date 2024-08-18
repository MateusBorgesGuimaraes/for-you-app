import formatDate from '@/functions/fomatDate';
import splitTextIntoParagraphs from '@/functions/split-into-p';
import { News } from '@/tipos';
import Link from 'next/link';

type NewsTemplateEmptyProps = {
  news: News;
};

export default function NewsTemplateEmpty({ news }: NewsTemplateEmptyProps) {
  const paragraphs = splitTextIntoParagraphs(news.content);
  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-800 text max-w-[30rem]">
        {news.title}
      </h1>

      <div className="flex justify-between items-center max-w-sm mt-2 flex-wrap supersmall:flex-nowrap">
        <p className="text-slate-700 font-bold">{news.author}</p>
        <p className="text-slate-500 text-sm font-bold">
          {formatDate(String(news.createdAt))}
        </p>
        <p className="font-bold text-sm text-slate-700 relative before:block before:absolute before:w-4 before:h-1 before:-bottom-1 before:left-0 before:bg-sky-800">
          {news.category}
        </p>
      </div>

      <div className="mt-4 text-slate-700">
        {paragraphs.map((paragraph, index) => (
          <>
            <p key={index}>{paragraph}</p>
            {index < paragraphs.length - 1 && <br />}
          </>
        ))}
      </div>
      <p className="text-slate-500 text-base mt-4 underline hover:text-slate-700 duration-300">
        <Link href={`/news/${news.id}`}>VER MAIS . . .</Link>
      </p>
    </div>
  );
}
