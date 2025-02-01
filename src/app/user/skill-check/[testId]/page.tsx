import Loading from '@/app/loading';
import { NavBar } from '@/components/User/MyPage/nav-bar';
import SkillTestDemo from '@/components/User/Skill/skillTestDemo';
import { setTimeout } from 'node:timers/promises';
import { Suspense } from 'react';

async function getTestData(testId: string) {
  await setTimeout(1500);
  return { testId };
}

// データ取得用の非同期コンポーネント
async function SkillTestContent({ testId }: { testId: string }) {
  const data = await getTestData(testId);
  return <SkillTestDemo data={data} />;
}

// メインページコンポーネント
export default async function TestPage({ params }: { params: { testId: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar isActive={[false, true, false, false, false]} />
      <main className="container mx-auto py-8">
        <Suspense fallback={<Loading />}>
          <SkillTestContent testId={params.testId} />
        </Suspense>
      </main>
    </div>
  );
}
