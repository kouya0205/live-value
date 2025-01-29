'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRightIcon, ClipboardCheck, Users } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

export function HeroSection() {
  return (
    <section
      className={cn(
        'bg-background text-foreground',
        'py-8 sm:py-12 md:py-16 px-4',
        'fade-bottom overflow-hidden pb-0',
      )}>
      <div className="mx-auto flex max-w-container flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          <Badge variant="outline" className="animate-appear gap-2">
            <span className="text-muted-foreground">シニアエンジニア特化型マッチング</span>
            <a href="/about" className="flex items-center gap-1">
              詳しく見る
              <ArrowRightIcon className="h-3 w-3" />
            </a>
          </Badge>

          <h1 className="relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-7xl md:leading-tight">
            スキルと人柄で
            <br />
            実力を正しく評価する
          </h1>

          <p className="text-md relative z-10 max-w-[650px] animate-appear font-medium text-muted-foreground opacity-0 delay-100 sm:text-xl">
            技術力の可視化とパーソナリティの深い理解を通じて、
            <br />
            シニアエンジニアの真価を適切に評価し、最適なマッチングを実現します
          </p>

          <div className="relative z-10 flex flex-col sm:flex-row animate-appear justify-center gap-4 opacity-0 delay-300">
            <Button size="lg" asChild>
              <a href="/user/auth" className="flex items-center gap-2">
                <ClipboardCheck className="h-5 w-5" />
                新規登録して評価を受ける
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/#process" className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                評価の流れを見る
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
