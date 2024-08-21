import { Comment } from '@/tipos';
import Image from 'next/image';
import CommentComponentHeader from './comment-component-header';
import CommentComponentContent from './comment-component-content';
import CommenComponentLike from './comment-component-like';

type CommentComponentProps = {
  children: React.ReactNode;
};

export default function CommentComponent({ children }: CommentComponentProps) {
  return (
    <div className="bg-slate-100 w-full min-h-max p-5 flex flex-col gap-4">
      {children}
    </div>
  );
}

CommentComponent.Header = CommentComponentHeader;
CommentComponent.Content = CommentComponentContent;
CommentComponent.Like = CommenComponentLike;
