import Loading from '@/app/user/skill-check/result/[testId]/loading';
import { NavBar } from '@/components/User/MyPage/nav-bar';
import SkillResult from '@/components/User/Skill/skillResult';
import { setTimeout } from 'node:timers/promises';
import { Suspense } from 'react';

async function getTestData(testId: string) {
  await setTimeout(5000);
  return { testId };
}

// データ取得用の非同期コンポーネント
async function SkillResultContent({ testId }: { testId: string }) {
  const data = await getTestData(testId);
  return <SkillResult data={data} />;
}

export default async function SkillResultPage({ params }: { params: { testId: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar isActive={[false, true, false, false, false]} />
      <main className="container mx-auto px-4 py-8">
        <Suspense fallback={<Loading />}>
          <SkillResultContent testId={params.testId} />
        </Suspense>
      </main>
    </div>
  );
}
