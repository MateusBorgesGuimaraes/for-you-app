import TextAreaForm from '@/components/textAreaForm/text-area-form';
import { Comment } from '@/tipos';

type NewsFooterProps = {
  comments: Comment[] | undefined;
  newsId: string;
};

export default function NewsFooter({ comments, newsId }: NewsFooterProps) {
  return (
    <div>
      <h3 className="font-bold text-2xl text-slate-800 relative before:block before:absolute before:w-6 before:h-2 before:-bottom-2 before:left-0 before:bg-sky-800 mb-4 ">
        COMENTARIOS
      </h3>
      <span className="border-t flex border-slate-200 w-1/2 my-4"></span>
      <TextAreaForm placeholder="Escreva seu comentario" newsId={newsId} />
    </div>
  );
}
