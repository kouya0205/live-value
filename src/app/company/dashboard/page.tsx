import ProjectsList from '@/components/Company/projectsList';
import NewRegister from '@/components/Company/newRegister';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default async function CompanyHome() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data: userRole } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user?.id)
    .single();
  if (userRole?.role === true) {
    redirect('/user/dashboard');
  }
  const { data: company } = await supabase
    .from('companies')
    .select('id')
    .eq('profile_id', user?.id)
    .single();
  const { data: caseList } = await supabase
    .from('internships')
    .select(
      `*,
    companies(*)`,
    )
    .eq('company_id', company?.id);
  console.log(caseList);
  const data = await fetch('https://note.com/api/v2/creators/adoshoma/contents?kind=note&page=1');
  const articles = await data.json();
  return (
    <div className="min-h-screen bg-white">

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        {/* Left Sidebar */}
        <div className="w-full md:w-80 border-2 rounded-xl">
            <div className="text-lg mb-8">あいうえお</div>
            <div className="text-lg mb-8">かきくけこ</div>
            <div className="text-lg mb-8">さしすせそ</div>
            <div className="text-lg mb-8">たちつてと</div>
            <div className="text-lg mb-8">なにぬねの</div>
            <div className="text-lg mb-8">はひふへほ</div>
            <div className="text-lg mb-8">まみむめも</div>
            <div className="text-lg mb-8">やいゆえよ</div>
            <div className="text-lg mb-8">らりるれろ</div>
            <div className="text-lg mb-8">わいうえを</div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">
              人材情報
            </h1>
              {articles.data.contents.map((article) => (
                <div id='article.id'>
                  <Card className="p-6 mb-8">
                    <div className="mb-6">
                      <h2 className="text-xl font-bold mb-2">{article.user.name}</h2>
                      <div className='flex'>
                        <div className='w-[480]'>
                          <Card className='my-4'>
                            <div className='font-bold p-2'>基本情報</div>
                            <div className='p-2'>
                              <div className='flex gap-28'>
                                <div>
                                  <div>年齢：</div>
                                  <div>希望年収：</div>
                                </div>
                                <div>
                                  <div>希望勤務年数：</div>
                                  <div>希望勤務地：</div>
                                </div>
                              </div>
                            </div>
                          </Card>
                          <Card>
                            <div className='font-bold'>スキルテスト結果</div>
                            <div className='bg-slate-500 py-20 mb-4' />
                          </Card>
                        </div>
                        <div>
                          <Link href={`${article.noteUrl}`} key={article.id}>
                            <Card className='w-full m-4'>
                              <Image
                                src={article.eyecatch || '/placeholder.svg'}
                                alt={article.name}
                                className="object-cover transition-transform group-hover:scale-105 m-4 rounded-lg"
                                width={600}
                                height={200}
                              />
                              <div className='text-xl font-bold m-2'>{article.name}</div>
                            </Card>
                          </Link>
                        </div>
                      </div>

                      <div className='flex gap-2'>
                        <Button className="w-full bg-white hover:bg-slate-200 text-black text-left justify-between" size="lg">
                          詳細を見る
                        </Button>
                        <Button className="w-full bg-white hover:bg-slate-200 text-black text-left justify-between" size="lg">
                          選考オファーを出す
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
                ))}
          </div>
        </div>
      </main>
    </div>
  );
}
