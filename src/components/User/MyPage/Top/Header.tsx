import Image from 'next/image';
import Link from 'next/link';

import {
  mdiAccountOutline,
  mdiBellOutline,
  mdiFileDocumentMultipleOutline,
  mdiHeadCogOutline,
  mdiLinkVariantPlus,
  mdiUploadBoxOutline,
} from '@mdi/js';
import Icon from '@mdi/react';
import { createClient } from '@/utils/supabase/server';
import AppHamburgerMenu from '@/components/User/MyPage/Top/HamburgerMenu';

const navLinks: Array<{ title: string; href: string; icon: string }> = [
  { title: 'アップロード', href: '/upload', icon: mdiUploadBoxOutline },
  { title: 'スキル・経験', href: '/experience', icon: mdiHeadCogOutline },
  { title: '履歴書', href: '/resume', icon: mdiFileDocumentMultipleOutline },
  { title: '共有リンク', href: '/share', icon: mdiLinkVariantPlus },
  { title: 'お知らせ', href: '/notifications', icon: mdiBellOutline },
  { title: 'マイページ', href: '/mypage', icon: mdiAccountOutline },
];

export default async function AppHeader() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data: profile } = await supabase.from('profiles').select().eq('id', user?.id).single();

  return (
    <header className="fixed w-full z-[999] shadow-md transition-all duration-300">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          <Link href="/user/dashboard" className="flex-shrink-0">
            <Image src="/images/top/5.webp" alt="Logo" width={140} height={45} />
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
            <AppHamburgerMenu profile={profile} navLinks={navLinks} />
          </div>
        </div>
      </div>
    </header>
  );
}
