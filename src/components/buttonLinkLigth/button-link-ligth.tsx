import Link from 'next/link';

type ButtonLinkProps = {
  children: React.ReactNode;
  href: string;
  borderStyle?: boolean;
};

export default function ButtonLinkLight({
  children,
  href,
  borderStyle,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={` ${
        borderStyle
          ? 'text-2xl font-bold text-slate-100 bg-none border-2 border-slate-100 py-3 px-5 rounded-lg flex items-center justify-center hover:bg-slate-800 duration-300'
          : 'text-2xl font-bold text-slate-900 bg-slate-100 py-3 px-5 rounded-lg flex items-center justify-center hover:bg-slate-300 duration-300'
      }`}
    >
      {children}
    </Link>
  );
}
