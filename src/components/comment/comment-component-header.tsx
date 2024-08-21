import CommentComponentHeaderAuthorDate from './comment-component-header-author-date';
import CommentComponentHeaderButtonDelete from './comment-component-header-button-delete';

type CommentComponentHeaderProps = {
  children?: React.ReactNode;
};

export default function CommentComponentHeader({
  children,
}: CommentComponentHeaderProps) {
  return (
    <div className="flex justify-between items-center supersmall:flex-nowrap gap-2 supersmall:gap-0 flex-wrap">
      {children}
    </div>
  );
}

CommentComponentHeader.Infos = CommentComponentHeaderAuthorDate;
CommentComponentHeader.Delete = CommentComponentHeaderButtonDelete;
