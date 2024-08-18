type CardNewsGeneralHeaderProps = {
  author: string;
  date: string;
};

export default function CardNewsGeneralHeader({
  author,
  date,
}: CardNewsGeneralHeaderProps) {
  return (
    <div className="mt-[6px] flex justify-between items-center">
      <p className="font-bold text-base text-slate-700">{author}</p>
      <p className="font-bold text-sm text-slate-400">{date}</p>
    </div>
  );
}
