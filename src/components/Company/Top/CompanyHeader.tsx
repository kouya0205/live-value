import HamburgerMenu from '@/components/Top/HamburgerMenu';
import { signOut } from '@/hooks/useActions';
import Link from 'next/link';

export default async function CompanyHeader() {
  const navLinks: Array<{ title: string; id: string }> = [
    { title: '概要', id: '#about' },
    { title: '使い方', id: '#how-to-use' },
    { title: 'お問い合わせ', id: '#contact' },
  ];

  return (
    <header className="fixed w-full z-[999] shadow-md transition-all duration-300">
      <div className="px-3 lg:px-8 py-1">
        <div className="flex items-center justify-between lg:justify-around h-16">
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
              <form action={signOut}>
                <button className="text-[12px] font-medium text-gray-600 h-full">ログアウト</button>
              </form>
            </nav>
            <HamburgerMenu navLinks={navLinks} />
          </div>
        </div>
      </div>
    </header>
  );
}
