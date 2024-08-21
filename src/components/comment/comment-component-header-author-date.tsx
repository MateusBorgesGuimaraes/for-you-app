type CommentComponentHeaderAuthorDateProps = {
  date: string;
  author: string;
};

export default function CommentComponentHeaderAuthorDate({
  date,
  author,
}: CommentComponentHeaderAuthorDateProps) {
  return (
    <div className="flex gap-4 items-center border-b border-slate-300 pb-1">
      <p className="font-bold text-sky-800">{author}</p>
      <p className="text-slate-400">{date}</p>
    </div>
  );
}
