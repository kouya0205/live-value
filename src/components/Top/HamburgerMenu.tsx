import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';
import Link from 'next/link';

export default function HamburgerMenu({ navLinks }: { navLinks: { title: string; id: string }[] }) {
  return (
    <Sheet>
      <div className="lg:hidden">
        <SheetTrigger asChild>
          <button className="flex flex-col items-center justify-center gap-1 rounded-full bg-white border-[#f2f2f2] border-[1px] w-12 h-12 cursor-pointer">
            <div className="h-2 border-y-[1px] w-6 border-black" />
          </button>
        </SheetTrigger>
      </div>
      <SheetContent className="z-[999]" side="left">
        <SheetHeader className="h-10">
          <Image
            width={160}
            height={40}
            src="/images/top/5.webp"
            alt="サイトロゴ"
            className="h-auto object-contain"
          />
        </SheetHeader>
        <SheetTitle />
        <nav className="flex flex-col  text-[12px] font-medium text-gray-600 gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.id}
              className="font-bold text-base transition-colors flex flex-col gap-[2px] min-w-[80px] duration-200 hover:text-gray-900 cursor-pointer h-full hover:bg-[#f2f2f2] items-center justify-center">
              {link.title}
            </Link>
          ))}
        </nav>
        <Link href="/user/auth" className="items-center flex justify-center w-full pt-2">
          <Button className="text-sm py-2 px-3 lg:py-3 lg:px-4 font-bold w-full">
            ログイン/新規登録
          </Button>
        </Link>
      </SheetContent>
    </Sheet>
  );
}
