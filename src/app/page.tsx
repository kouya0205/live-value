import ArticleGrid from '@/components/articlesGrid';
import Footer from '@/components/Top/Footer';
import { Glow } from '@/components/Top/glow';
import Header from '@/components/Top/Header';
import { HeroSection } from '@/components/Top/heroSection';
import { Mockup, MockupFrame } from '@/components/Top/mockUp';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { createClient } from '@/utils/supabase/server';
import { Search } from 'lucide-react';
import Image from 'next/image';

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const data = await fetch('https://note.com/api/v2/creators/adoshoma/contents?kind=note&page=1');
  const articles = await data.json();

  return (
    <>
      <Header user={user} />
      <HeroSection />
      <div className="relative py-8 flex justify-center">
        <MockupFrame className="animate-appear opacity-0 delay-700" size="small">
          <Mockup type="responsive">
            <Image
              src="/images/top/hero.webp"
              alt="サービス概要画像"
              width={1248}
              height={765}
              priority
            />
          </Mockup>
        </MockupFrame>
        <Glow variant="top" className="animate-appear-zoom opacity-0 delay-1000" />
      </div>
      {/* <ArticleGrid articles={articles} /> */}
      <Footer />
    </>
  );
}
