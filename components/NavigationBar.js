import Link from 'next/link';
import Image from 'next/image';
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from 'flowbite-react';
import logoImg from './images/sma-negeri-2-dabo-singkep.svg';

export default function NavigationBar() {
  return (
    <nav className="bg-white border-gray-200 fixed top-0 w-full z-50 border border-b-1">
      <div className="max-w-screen-xl w-[90%] mx-auto">
        <Navbar
          fluid
          rounded
        >
          <NavbarBrand
            as={Link}
            href={'/'}
          >
            <Image
              src={logoImg}
              className="mr-3 h-6 sm:h-9"
              alt="Logo SMAN 2 Dabo Singkep"
              style={{ width: '100%', height: '100%' }}
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              SMAN 2 DABO SINGKEP
            </span>
          </NavbarBrand>
          <NavbarToggle />
          <NavbarCollapse>
            <NavbarLink
              as={Link}
              href={'/'}
              active
              className="block py-2 px-3 bg-transparent text-gray-900 rounded md:hover:bg-transparent md:text-black md:p-0 hover:text-blue-700 md:hover:text-blue-700 hover:bg-slate-200"
            >
              Halaman Utama
            </NavbarLink>
            <NavbarLink
              as={Link}
              href={'/berita'}
              className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:text-black md:p-0 hover:text-blue-700 md:hover:text-blue-700 hover:bg-slate-200"
            >
              Berita
            </NavbarLink>
            <NavbarLink
              as={Link}
              className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:text-black md:p-0 hover:text-blue-700 md:hover:text-blue-700 hover:bg-slate-200"
              href={'/kalender'}
            >
              Kalender
            </NavbarLink>

            <NavbarLink
              as={Link}
              className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:text-black md:p-0 hover:text-blue-700 md:hover:text-blue-700 hover:bg-slate-200"
              href={'/profil-sekolah'}
            >
              Profil Sekolah
            </NavbarLink>

            <NavbarLink
            as={Link}
              href={'/hubungi'}
              className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:text-black md:p-0 hover:text-blue-700 md:hover:text-blue-700 hover:bg-slate-200"
            >
              Hubungi
            </NavbarLink>
          </NavbarCollapse>
        </Navbar>
      </div>
    </nav>
  );
}
