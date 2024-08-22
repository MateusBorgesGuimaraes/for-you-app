'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import { useUserStore } from '@/store/user';
import logout from '@/actions/user-logout';
import React from 'react';
import getUser from '@/actions/get-user';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

export default function Header() {
  const { user, clearUser, setUser } = useUserStore();

  async function handleLogout() {
    await logout();
    clearUser();
  }

  React.useEffect(() => {
    async function loadUser() {
      if (user) return;
      const { data } = await getUser();
      if (data && !user) setUser(data);
    }
    loadUser();
  }, [setUser, user]);

  return (
    <header className="container pt-5 flex items-center justify-between">
      <Link href={'/'}>
        <Image
          className="select-none"
          src={'/assets/icons/dark-logo-icon.svg'}
          width={161}
          height={42}
          alt="logo do site"
        />
      </Link>

      <nav>
        <ul className="flex items-center justify-center gap-16">
          {user ? (
            <li className="py-[6px] px-4 bg-slate-900 rounded-3xl  gap-5 font-merriweather text-slate-100 text-base font-bold hidden sm:flex">
              <p>{user.username}</p>
              <button
                className="hover:text-slate-400 duration-300"
                onClick={() => handleLogout()}
              >
                LOGOUT
              </button>
            </li>
          ) : (
            <li className="py-[6px] px-4 bg-slate-900 rounded-3xl  gap-5 font-merriweather text-slate-100 text-base font-bold hidden sm:flex">
              <Link
                href={'/login'}
                className="hover:text-slate-400 duration-300"
              >
                ENTRAR
              </Link>
              <Link
                href={'/login/register'}
                className="hover:text-slate-400 duration-300"
              >
                CADASTRAR
              </Link>
            </li>
          )}

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
                    <Link
                      className="hover:text-slate-600"
                      href={'/categories/all'}
                    >
                      todas as noticias
                    </Link>
                  </li>
                  <li className="border-b-2 px-2 py-1 ">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="hover:text-slate-600">
                          categorias
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel hidden>
                          todas as categorias
                        </DropdownMenuLabel>
                        <div className="flex flex-col gap-2 w-52 p-4">
                          <Link
                            className="hover:bg-slate-100 duration-300 flex p-1 rounded-sm"
                            href={'/categories/cultura'}
                          >
                            cultura
                          </Link>
                          <Link
                            className="hover:bg-slate-100 duration-300 flex p-1 rounded-sm"
                            href={'/categories/moda'}
                          >
                            moda
                          </Link>
                          <Link
                            className="hover:bg-slate-100 duration-300 flex p-1 rounded-sm"
                            href={'/categories/esporte'}
                          >
                            esporte
                          </Link>
                          <Link
                            className="hover:bg-slate-100 duration-300 flex p-1 rounded-sm"
                            href={'/categories/arte'}
                          >
                            arte
                          </Link>
                          <Link
                            className="hover:bg-slate-100 duration-300 flex p-1 rounded-sm"
                            href={'/categories/politica'}
                          >
                            politica
                          </Link>
                          <Link
                            className="hover:bg-slate-100 duration-300 flex p-1 rounded-sm"
                            href={'/categories/natureza'}
                          >
                            natureza
                          </Link>
                          <Link
                            className="bg-slate-50 flex p-1 rounded-sm"
                            href={'/categories/saude'}
                          >
                            saude
                          </Link>
                          <Link
                            className="bg-slate-50 flex p-1 rounded-sm"
                            href={'/categories/ciencia'}
                          >
                            ciencia
                          </Link>
                          <Link
                            className="bg-slate-50 flex p-1 rounded-sm"
                            href={'/categories/entretenimento'}
                          >
                            entretenimento
                          </Link>
                        </div>
                      </DropdownMenuContent>
                    </DropdownMenu>
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

                  {user ? (
                    <li className="border-b-2 px-2 py-1 ">
                      <Link
                        className="text-sky-800 hover:text-sky-600"
                        href={'/'}
                        onClick={() => handleLogout()}
                      >
                        logout
                      </Link>
                    </li>
                  ) : (
                    <>
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
                    </>
                  )}
                </ul>
              </SheetContent>
            </Sheet>
          </li>
        </ul>
      </nav>
    </header>
  );
}
