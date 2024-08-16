import Link from 'next/link';

type ButtonLinkProps = {
  children: React.ReactNode;
  href: string;
  borderStyle?: boolean;
};

export default function ButtonLink({
  children,
  href,
  borderStyle,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={` ${
        borderStyle
          ? 'text-2xl font-bold text-slate-900 bg-none border-2 border-slate-900 py-3 px-5 rounded-lg flex items-center justify-center'
          : 'text-2xl font-bold text-slate-100 bg-slate-900 py-3 px-5 rounded-lg flex items-center justify-center hover:bg-slate-800 duration-300'
      }`}
    >
      {children}
    </Link>
  );
}
