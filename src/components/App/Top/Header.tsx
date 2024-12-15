import Image from 'next/image';
import Link from 'next/link';

import {
  mdiFormatListBulletedType,
  mdiAccountGroupOutline,
  mdiNotebookOutline,
  mdiCalendarSearch,
  mdiBellOutline,
  mdiAccountCircleOutline,
} from '@mdi/js';
import Icon from '@mdi/react';
import AppHamburgerMenu from '@/components/App/Top/HamburgerMenu';

const navLinks: Array<{ title: string; href: string; icon: string }> = [
  { title: '日課', href: '/tasks', icon: mdiFormatListBulletedType },
  { title: '日記', href: '/diaries', icon: mdiNotebookOutline },
  { title: 'コミュニティ', href: '/communities', icon: mdiAccountGroupOutline },
  { title: 'イベント', href: '/events', icon: mdiCalendarSearch },
  { title: 'お知らせ', href: '/notifications', icon: mdiBellOutline },
  { title: 'マイページ', href: '/mypage', icon: mdiAccountCircleOutline },
];

export default async function AppHeader() {
  return (
    <header className="fixed w-full z-[999] shadow-md transition-all duration-300">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          <Link href="/app" className="flex-shrink-0">
            <Image src="/images/top/logo-black.webp" alt="Logo" width={140} height={45} />
          </Link>
          <div className="flex h-full items-center">
            <nav className="hidden text-[12px] font-medium text-gray-600 md:flex h-full">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="transition-colors flex flex-col gap-[2px] min-w-[80px] duration-200 hover:text-gray-900 cursor-pointer h-full hover:bg-[#f2f2f2] items-center justify-center">
                  <Icon path={link.icon} size={1.2} className="hover:animate-shake" />
                  {link.title}
                </Link>
              ))}
            </nav>
            <AppHamburgerMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
