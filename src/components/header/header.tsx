import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="container py-5 flex items-center justify-between">
      <div>
        <Image
          className="select-none"
          src={'../assets/icons/dark-logo-icon.svg'}
          width={161}
          height={42}
          alt="logo do site"
        />
      </div>

      <nav>
        <ul className="flex items-center justify-center gap-16">
          <li className="py-[6px] px-4 bg-slate-900 rounded-3xl flex gap-5 font-merriweather text-slate-100 text-base font-bold">
            <Link href={'/'} className="hover:text-slate-400 duration-300">
              ENTRAR
            </Link>
            <Link href={'/'} className="hover:text-slate-400 duration-300">
              CADASTRAR
            </Link>
          </li>

          <li>
            <button>
              <Image
                src={'../assets/icons/hamburger-menu-icon.svg'}
                width={48}
                height={48}
                alt="hamburger menu"
              />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
