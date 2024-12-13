'use client';

import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from '@/components/ui/sheet';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <div className="lg:hidden">
        <SheetTrigger asChild>
          <button
            className="flex flex-col justify-between w-[28px] h-[22px] cursor-pointer"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}>
            <div
              className={`h-[2px] w-full bg-gray-800 rounded transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></div>
            <div
              className={`h-[2px] w-full bg-gray-800 rounded transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
            <div
              className={`h-[2px] w-full bg-gray-800 rounded transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></div>
          </button>
        </SheetTrigger>
      </div>
      <SheetContent className="z-[999] top-16">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>Navigation options and settings.</SheetDescription>
        </SheetHeader>
        {/* Add your menu items here */}
      </SheetContent>
    </Sheet>
  );
}
