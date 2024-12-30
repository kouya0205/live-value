import HamburgerMenu from '@/components/Top/HamburgerMenu';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default async function AuthHeader() {
  return (
    <header className="p-4">
      <Link href="/">
        <Image
          width={160}
          height={40}
          src="/images/top/logo-black.webp"
          alt="サイトロゴ"
          className="h-auto object-contain"
        />
      </Link>
    </header>
  );
}
