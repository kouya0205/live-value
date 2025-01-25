import ArticleGrid from '@/components/articlesGrid';
import Footer from '@/components/Top/Footer';
import Header from '@/components/Top/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { createClient } from '@/utils/supabase/server';
import { Search } from 'lucide-react';

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const data = await fetch('https://note.com/api/v2/creators/adoshoma/contents?kind=note&page=1');
  const articles = await data.json();
  // console.log(articles);s
  // console.log(data);

  return (
    <>
      <Header user={user} />
      <div className="flex flex-col items-center justify-center py-2 min-h-screen">lp</div>
      <div className="min-h-screen bg-background">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center">
            <div className="mr-4 hidden md:flex">
              <a className="mr-6 flex items-center space-x-2" href="/">
                <span className="hidden font-bold sm:inline-block">note</span>
              </a>
            </div>
            <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
              <div className="w-full md:w-[400px]">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="キーワードやクリエイターで検索" className="pl-8" />
                </div>
              </div>
              <Button variant="default">投稿</Button>
            </div>
          </div>
        </header>

        <div className="container grid gap-12 md:grid-cols-[200px_1fr] mt-4">
          {/* <Sidebar /> */}
          <main className="flex w-full flex-1 flex-col overflow-hidden">
            <nav className="flex items-center space-x-4 mb-4">
              <Button variant="ghost" className="font-bold">
                すべて
              </Button>
              <Button variant="ghost">フォロー中</Button>
            </nav>
            <ArticleGrid articles={articles} />
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
