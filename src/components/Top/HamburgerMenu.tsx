import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';

export default function HamburgerMenu() {
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
            src="/logo.svg"
            alt="サイトロゴ"
            className="h-auto object-contain"
          />
        </SheetHeader>
        <SheetTitle>Menu</SheetTitle>
      </SheetContent>
    </Sheet>
  );
}
