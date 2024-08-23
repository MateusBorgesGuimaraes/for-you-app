import Link from 'next/link';

type CardNewsGeneralButtonsProps = {
  onClick: () => void;
  id: string;
};

export default function CardNewsGeneralButtons({
  onClick,
  id,
}: CardNewsGeneralButtonsProps) {
  return (
    <div className="mt-4 flex items-center gap-6">
      <Link
        href={`/mynews/edit/${id}`}
        className="font-bold text-slate-800 text-sm py-1 px-4 bg-green-500/50 hover:bg-green-500/80 duration-300 rounded"
      >
        editar
      </Link>
      <button
        onClick={onClick}
        className="font-bold text-slate-800 text-sm py-1 px-4 bg-red-500/50 hover:bg-red-500/80 duration-300 rounded"
      >
        deletar
      </button>
    </div>
  );
}
