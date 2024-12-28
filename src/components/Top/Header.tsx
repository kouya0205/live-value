import Image from 'next/image';
import Link from 'next/link';

import { User } from '@supabase/supabase-js';
import { Button } from '@/components/ui/button';
import HamburgerMenu from '@/components/Top/HamburgerMenu';

const navLinks: Array<{ title: string; id: string }> = [
  { title: '概要', id: '#about' },
  { title: '使い方', id: '#how-to-use' },
  { title: 'お問い合わせ', id: '#contact' },
];

export default async function Header({ user }: { user: User }) {
  return (
    <header className="fixed w-full z-[999] shadow-md transition-all duration-300">
      <div className="px-3 lg:px-8 py-1">
        <div className="flex items-center justify-between lg:justify-around h-16">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/top/logo-black.webp"
              alt="Logo"
              width={140}
              height={45}
              className="lg:w-36 lg:h-[45px] w-28 h-9"
            />
          </Link>
          <div className="flex h-full items-center">
            <nav className="hidden text-[12px] font-medium text-gray-600 lg:flex h-full mr-3">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.id}
                  className="font-bold text-base transition-colors flex flex-col gap-[2px] min-w-[80px] duration-200 hover:text-gray-900 cursor-pointer h-full hover:bg-[#f2f2f2] items-center justify-center">
                  {link.title}
                </Link>
              ))}
            </nav>
            <Link href="/auth" className="pr-2 lg:pr-4">
              <Button className="text-sm py-2 px-3 lg:py-3 lg:px-4 font-bold">
                ログイン/新規登録
              </Button>
            </Link>
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
