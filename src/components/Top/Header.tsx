import HamburgerMenu from '@/components/Top/HamburgerMenu';
import { Button } from '@/components/ui/button';
import { User } from '@supabase/supabase-js';
import Image from 'next/image';
import Link from 'next/link';

export default async function Header({ user }: { user: User | null }) {
  return (
    <header className="fixed left-5 right-5 top-5 z-[999] py-2 px-[10px] rounded-sm transition-all duration-300 backdrop-blur-[50px]">
      <div className="flex items-center justify-between">
        {/* ロゴ */}
        <Link href="/" className="cursor-pointer">
          <Image
            width={160}
            height={40}
            src="/images/top/logo-black.webp"
            alt="サイトロゴ"
            className="h-auto object-contain"
          />
        </Link>

        <div className="flex gap-8 items-center">
          <nav className="hidden gap-8 text-sm font-medium text-gray-600 lg:flex">
            <Link
              href="/about"
              className="transition-colors duration-200 hover:text-gray-900 cursor-pointer">
              日記
            </Link>
            <Link
              href="/services"
              className="transition-colors duration-200 hover:text-gray-900 cursor-pointer">
              コミュニティ
            </Link>
            <Link
              href="/contact"
              className="transition-colors duration-200 hover:text-gray-900 cursor-pointer">
              イベント
            </Link>
            <Link
              href="/contact"
              className="transition-colors duration-200 hover:text-gray-900 cursor-pointer">
              初心者の方へ
            </Link>
          </nav>

          {user ? (
            <>
              <Link href="/dashboard" className="hidden lg:block">
                <Button className="text-sm py-3 px-5">ダッシュボード</Button>
              </Link>
              <form action="/auth/signout" method="post">
                <Button type="submit">Sign out</Button>
              </form>
            </>
          ) : (
            <Link href="/auth" className="hidden lg:block">
              <Button className="text-sm py-3 px-5">ログイン/新規登録</Button>
            </Link>
          )}
        </div>
        <HamburgerMenu />
      </div>
    </header>
  );
}
