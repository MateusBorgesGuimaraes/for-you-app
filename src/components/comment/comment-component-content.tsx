type CommentComponentContentProps = {
  children: React.ReactNode;
};

export default function CommentComponentContent({
  children,
}: CommentComponentContentProps) {
  return <div className="text-slate-700">{children}</div>;
}
