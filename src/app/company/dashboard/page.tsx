import ProjectsList from '@/components/Company/projectsList';
import NewRegister from '@/components/Company/newRegister';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@mdi/react';
import {
  mdiAccountTie,
  mdiEmailOutline,
  mdiEyeOffOutline,
  mdiFileOutline,
  mdiLogout,
  mdiMagnify,
  mdiMessageReplyOutline,
  mdiStarOutline,
} from '@mdi/js';
import { SearchFilters } from '@/components/Company/MyPage/search-filters';
import { Value } from '@radix-ui/react-select';
import { Side } from '@/components/Company/MyPage/side';
import SkillCheckPage from '@/app/user/skill-check/page';

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
  // const data = await fetch('https://note.com/api/v2/creators/adoshoma/contents?kind=note&page=1');
  // const articles = await data.json();
  const articles = [
    {
      id: 1,
      user: {
        name: '山田太郎',
      },
      name: '突然の組織崩壊とゼロからのマネジメント 自走するチーム作りを目指して',
      noteUrl: '/company/note',
      eyecatch: '/images/top/samune.webp',
    },
  ];

  const tabList = [
    {
      value: 'all',
      label: 'すべて',
    },
    {
      value: 'favorite',
      label: 'お気に入り',
    },
    {
      value: 'hidden',
      label: '非表示人材',
    },
  ];
  return (
    <div className="bg-slate-100 flex">
      <Side />

      <div className="flex p-4">
        <div className="flex-1 p-4">
          <div className="text-3xl font-bold mb-6">人材を探す</div>
          <Tabs defaultValue="all" className="mb-4">
            <TabsList className="flex space-x-4">
              {tabList.map((tab, index) => (
                <TabsTrigger
                  key={index}
                  value={tab.value}
                  className="rounded-full data-[state=active]:bg-black data-[state=active]:font-bold data-[state=active]:text-white bg-gray-200 px-6 py-2">
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          <div className="text-gray-600 mb-4">検索結果：131件</div>
          <div className="space-y-6">
            {articles.map((article) => (
              <Card
                key={article.id}
                className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <div className="flex items-center gap-4">
                      <Icon
                        path={mdiAccountTie}
                        size={2}
                        className="bg-gray-200 rounded-full p-2"
                      />
                      <div>
                        <p className="text-gray-600 text-sm">RC11201522</p>
                        <h2 className="text-xl font-bold">{article.user?.name}</h2>
                        <p className="text-gray-600 text-sm">55歳・男性</p>
                      </div>
                    </div>
                    <div className="flex ml-auto gap-6"></div>
                    <div className="flex mt-4 sm:mt-0 sm:ml-auto gap-6 items-center">
                      <Icon path={mdiStarOutline} size={1} className="bg-gray-200 rounded-full" />
                      <Icon path={mdiEyeOffOutline} size={1} className="bg-gray-200 rounded-full" />
                      <Button className="font-bold">詳細を見る</Button>
                      <Button className="font-bold">選考オファーを出す</Button>
                    </div>
                  </div>
                  <div className="w-full">
                    <Card className="p-4">
                      <h3 className="font-bold mb-2">基本情報</h3>
                      <div className="text-sm">
                        <div className="flex gap-10">
                          <div className="w-80 font-bold">
                            <span>希望職種：</span>
                            <span>プロジェクトマネージャー</span>
                          </div>
                          <div>
                            <span className="font-bold">希望年収：</span>
                            <span className="font-bold">800万円</span>
                          </div>
                        </div>
                        <div className="flex gap-10 font-bold">
                          <div className="w-80">
                            <span>希望勤務年数：</span>
                            <span>10年</span>
                          </div>
                          <div>
                            <span>希望勤務地：</span>
                            <span>名古屋市内</span>
                          </div>
                        </div>
                        <div className="flex gap-10 font-bold">
                          <div className="w-80">
                            <span>経験スキル：</span>
                            <span>Java 10年、</span>
                          </div>
                          <div>
                            <span>経験職種：</span>
                            <span>アプリケーションエンジニア 5年</span>
                          </div>
                        </div>
                        <div className="flex gap-10 font-bold">
                          <div className="w-80">
                            <span>経験業種：</span>
                            <span>通信・ISP 33年</span>
                          </div>
                          <div>
                            <span className="text-transparent font-bold">経験職種：</span>
                            <span className="font-bold">プロジェクトマネージャー 28年</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div className="flex gap-6 justify-center">
                    <Card className="p-4 w-full justify-center">
                      <h3 className="font-bold mb-2">スキルテスト結果</h3>
                      <Image
                        src={'/images/top/skillcheck.png'}
                        alt="SkillCheckResult"
                        width={600}
                        height={200}
                      />
                    </Card>

                    <div className="w-full">
                      <Link href={article.noteUrl ?? '#'} className="block h-full">
                        <Card className="h-full hover:bg-gray-50 transition-colors duration-300">
                          <Image
                            src={article.eyecatch || '/placeholder.svg'}
                            alt={`${article.name}のアイキャッチ画像`}
                            className="object-cover w-full h-48 rounded-t-lg"
                            width={600}
                            height={200}
                          />
                          <div className="p-2 h-full">
                            <h3 className="text-l font-bold">{article.name}</h3>
                          </div>
                        </Card>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-100 mt-10">
        <SearchFilters />
      </div>
    </div>
  );
}
