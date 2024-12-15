import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';

export default async function AppHamburgerMenu() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex flex-col gap-[6px] cursor-pointer items-center justify-center h-full text-[12px] hover:bg-[#f2f2f2] min-w-[80px] ">
          <div className="flex flex-col gap-[7px] hover:animate-shake">
            <div className="w-7 border border-black" />
            <div className="w-7 border border-black" />
            <div className="w-7 border border-black" />
          </div>
          <p>メニュー</p>
        </div>
      </SheetTrigger>
      <SheetContent className="z-[999]">
        <SheetHeader>
          <SheetTitle className="items-center min-h-12 flex">メニュー</SheetTitle>
        </SheetHeader>
        <Separator className="my-2" />
        <Link href={`/users/${user?.id}`}>
          <div className="flex gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-[2px]">
              <h2>{user?.email}</h2>
              <p className="text-sm font-extralight">プロフィールを見る</p>
            </div>
          </div>
        </Link>
      </SheetContent>
    </Sheet>
  );
}
