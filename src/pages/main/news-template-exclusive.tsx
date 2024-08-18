import formatDate from '@/functions/fomatDate';
import splitTextIntoParagraphs from '@/functions/split-into-p';
import { News } from '@/tipos';
import Image from 'next/image';
import Link from 'next/link';

type NewsTemplateExclusiveProps = {
  news: News;
};

export default function NewsTeplateExclusive({
  news,
}: NewsTemplateExclusiveProps) {
  const paragraphs = splitTextIntoParagraphs(news.content, 4);
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-slate-800 text-3xl">EXCLUSIVA FOR YOU</h1>
      <div>
        <div className="rounded-2xl overflow-hidden max-w-[30rem] max-h-[17.1875rem]">
          <Image
            className="hover:scale-125 duration-300 max-h-[17.1875rem] object-cover"
            src={news.image}
            width={480}
            height={275}
            alt="imagem teste"
          />
        </div>

        <h1 className="text-2xl font-bold text-slate-800 text max-w-[30rem] mt-4">
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
    </div>
  );
}
