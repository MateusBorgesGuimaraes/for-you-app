import Link from 'next/link';

type CardNewsGeneralButtonProps = {
  onClick: () => void;
};

export default function CardNewsGeneralButton({
  onClick,
}: CardNewsGeneralButtonProps) {
  return (
    <div className="mt-4 flex items-center gap-6">
      <button
        onClick={onClick}
        className="font-bold text-slate-800 text-sm py-1 px-4 bg-sky-500/50 hover:bg-sky-500/80 duration-300 rounded"
      >
        remover
      </button>
    </div>
  );
}
