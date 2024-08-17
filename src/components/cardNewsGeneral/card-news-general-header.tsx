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
      <p className="font-bold text-base text-slate-700">Alex Jhones</p>
      <p className="font-bold text-sm text-slate-400">10/10/2022</p>
    </div>
  );
}
