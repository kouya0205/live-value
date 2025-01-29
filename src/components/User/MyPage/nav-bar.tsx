import Link from 'next/link';
import { Bell, Flame, Menu } from 'lucide-react';
import Image from 'next/image';

export function NavBar({ isActive }: { isActive: boolean[] }) {
  const navItems: any[] = [
    { label: 'マイページ', href: '/user/dashboard', isActive: isActive[0] },
    { label: 'スキルチェック', href: '/user/skill-check', isActive: isActive[1] },
    { label: 'プロフィール', href: '/user/profile', hasNotification: true, isActive: isActive[2] },
    { label: 'メッセージ', href: '/user/messages', hasNotification: true, isActive: isActive[3] },
    { label: '求人検索', href: '/user/jobs', isActive: isActive[4] },
  ];
  return (
    <header className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center justify-center h-full">
            <Link href="/user/dashboard">
              <Image src="/images/top/6.webp" alt="logo" width={100} height={100} />
            </Link>
            <nav className="ml-8 h-full flex items-center">
              <ul className="flex space-x-6 h-full">
                {navItems.map((item) => (
                  <li key={item.href} className="h-full flex items-center">
                    <Link
                      href={item.href}
                      className={`h-full relative flex items-center ${item.isActive ? 'text-blue-500 border-b-blue-500 border-b-4' : 'text-gray-600 hover:text-gray-400'} font-bold`}>
                      {item.label}
                      {item.hasNotification && (
                        <span className="absolute -right-1 top-4 h-2 w-2 rounded-full bg-red-500" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Flame className="h-6 w-6 text-orange-500" />
            <Bell className="h-6 w-6 text-gray-400" />
            <Menu className="h-6 w-6 text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  );
}
