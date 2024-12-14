import HamburgerMenu from '@/components/Top/HamburgerMenu';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default async function Header() {
  return (
    <header className="fixed left-5 right-5 top-5 z-[999] py-2 px-[10px] rounded-sm transition-all duration-300 backdrop-blur-[50px]">
      <div className="flex items-center justify-between">
        {/* ロゴ */}
        <Link href="/">
          <Image
            width={160}
            height={40}
            src="/logo.svg"
            alt="サイトロゴ"
            className="h-auto object-contain"
          />
        </Link>

        <div className="flex gap-8 items-center">
          <nav className="hidden gap-8 text-sm font-medium text-gray-600 lg:flex">
            <Link href="/about" className="transition-colors duration-200 hover:text-gray-900">
              About
            </Link>
            <Link href="/services" className="transition-colors duration-200 hover:text-gray-900">
              Services
            </Link>
            <Link href="/contact" className="transition-colors duration-200 hover:text-gray-900">
              Contact
            </Link>
          </nav>
          <Link href="/auth" className="hidden lg:block">
            <Button className="text-sm py-3 px-5">ログイン/新規登録</Button>
          </Link>
          <form action="/auth/signout" method="post">
            <Button type="submit">Sign out</Button>
          </form>
        </div>

        <HamburgerMenu />
      </div>
    </header>
  );
}
