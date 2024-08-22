'use client';

import CommentComponent from '@/components/comment/comment-component';
import TextAreaForm from '@/components/textAreaForm/text-area-form';
import formatDate from '@/functions/fomatDate';
import { useUserStore } from '@/store/user';
import { CommentOnPost } from '@/tipos';

type NewsFooterProps = {
  comments: CommentOnPost[] | undefined;
  newsId: string;
};

export default function NewsFooter({ comments, newsId }: NewsFooterProps) {
  const { user } = useUserStore();
  return (
    <div>
      <h3 className="font-bold text-2xl text-slate-800 relative before:block before:absolute before:w-6 before:h-2 before:-bottom-2 before:left-0 before:bg-sky-800 mb-4 ">
        COMENTARIOS
      </h3>
      <span className="border-t flex border-slate-200 w-1/2 my-4"></span>
      <TextAreaForm placeholder="Escreva seu comentario" newsId={newsId} />
      <div className="mt-4 flex flex-col gap-4">
        {comments?.map((comment) => (
          <CommentComponent key={comment.id}>
            <CommentComponent.Header>
              <CommentComponent.Header.Infos
                author={comment.user.username}
                date={formatDate(String(comment.createdAt))}
              />
              {user?.id === comment.user.id && (
                <CommentComponent.Header.Delete id={comment.id} />
              )}
            </CommentComponent.Header>
            <CommentComponent.Content>
              {comment.content}
            </CommentComponent.Content>
            <CommentComponent.Like
              likesComment={comment.likes}
              commentId={comment.id}
            />
          </CommentComponent>
        ))}
      </div>
    </div>
  );
}
