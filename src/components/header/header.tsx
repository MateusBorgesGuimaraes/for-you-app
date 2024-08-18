import Image from 'next/image';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';

export default function Header() {
  return (
    <header className="container pt-5 flex items-center justify-between">
      <div>
        <Image
          className="select-none"
          src={'/assets/icons/dark-logo-icon.svg'}
          width={161}
          height={42}
          alt="logo do site"
        />
      </div>

      <nav>
        <ul className="flex items-center justify-center gap-16">
          <li className="py-[6px] px-4 bg-slate-900 rounded-3xl  gap-5 font-merriweather text-slate-100 text-base font-bold hidden sm:flex">
            <Link href={'/login'} className="hover:text-slate-400 duration-300">
              ENTRAR
            </Link>
            <Link
              href={'/login/register'}
              className="hover:text-slate-400 duration-300"
            >
              CADASTRAR
            </Link>
          </li>

          <li>
            <Sheet>
              <SheetTrigger asChild>
                <button>
                  <Image
                    src={'../assets/icons/hamburger-menu-icon.svg'}
                    width={48}
                    height={48}
                    alt="hamburger menu"
                  />
                </button>
              </SheetTrigger>
              <SheetContent>
                <SheetTitle hidden>Hamburger menu</SheetTitle>
                <SheetDescription hidden>
                  Hamburger menu com mais rotas para acessas.
                </SheetDescription>
                <ul className="flex flex-col gap-4 text-base font-bold h-full justify-center text-slate-800">
                  <li className="border-b-2 px-2 py-1 ">
                    <Link className="hover:text-slate-600" href={'/'}>
                      todas as noticias
                    </Link>
                  </li>
                  <li className="border-b-2 px-2 py-1 ">
                    <Link className="hover:text-slate-600" href={'/'}>
                      categorias
                    </Link>
                  </li>
                  <li className="border-b-2 px-2 py-1 ">
                    <Link className="hover:text-slate-600" href={'/'}>
                      noticias salvas
                    </Link>
                  </li>
                  <li className="border-b-2 px-2 py-1 ">
                    <Link className="hover:text-slate-600" href={'/'}>
                      contato
                    </Link>
                  </li>

                  <li className="border-b-2 px-2 py-1 text-xl flex sm:hidden">
                    <Link
                      className="text-sky-800 hover:text-sky-600"
                      href={'/'}
                    >
                      entrar
                    </Link>
                  </li>
                  <li className="border-b-2 px-2 py-1 text-xl flex sm:hidden">
                    <Link
                      className="text-sky-800 hover:text-sky-600"
                      href={'/'}
                    >
                      cadastrar
                    </Link>
                  </li>
                </ul>
              </SheetContent>
            </Sheet>
          </li>
        </ul>
      </nav>
    </header>
  );
}
