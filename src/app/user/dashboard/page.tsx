import { NavBar } from '@/components/User/MyPage/nav-bar';
import { ProfileHeader } from '@/components/User/MyPage/profile-header';
import { ProfileMethods } from '@/components/User/MyPage/profile-method';
import { NewJobs } from '@/components/User/MyPage/Top/new-jobs';
import { NewMessages } from '@/components/User/MyPage/Top/new-message';

export type ProfileData = {
  sections: {
    id: string;
    label: string;
    description: string;
    isRequired?: boolean;
  }[];
};
export type NewMessage = {
  id: string;
  content: string;
};

export type NewJob = {
  id: string;
  company: {
    name: string;
    logo: string;
  };
  title: string;
  role: string;
  salary: string;
  location: string;
  tags: string[];
};

async function getProfileData() {
  // Simulate DB fetch
  const sections: ProfileData['sections'] = [
    {
      id: 'work-history',
      label: '職務経歴',
      description: 'プロジェクトの業務内容は300文字以上入力するとスカウトが届きやすくなります。',
      isRequired: true,
    },
    {
      id: 'conditions',
      label: '希望条件',
      description: '希望職種、希望勤務地、希望年収を登録しましょう。',
    },
    {
      id: 'basic-info',
      label: '基本情報入力',
      description: '最寄駅を設定しましょう。',
    },
    {
      id: 'block-settings',
      label: 'ブロック設定',
      description: '個人情報や職務経歴を非公開にしたい企業を設定しましょう。',
    },
  ];

  return {
    sections,
    completedSections: 1,
    totalSections: sections.length,
  };
}

async function getNewMessages() {
  return [
    {
      id: '1',
      content: '【お知らせ】新しい求人が投稿されました。',
    },
    {
      id: '2',
      content: '【お知らせ】求人にスカウトが届いています。',
    },
  ];
}

async function getNewJobs() {
  // Simulate DB fetch
  return [
    {
      id: '1',
      company: {
        name: 'リスペクトキャリア株式会社',
        logo: '/images/top/company-1.webp',
      },
      title: 'レガシーシステムからオープンシステムへの移行リーダー',
      role: 'プロジェクト管理／プロジェクトマネージャー',
      salary: '700万円 ~ 1,700万円',
      location: '東京都、神奈川県、その他',
      tags: ['プロジェクトマネージャー(PM)', 'レガシーマイグレーション'],
    },
    {
      id: '2',
      company: {
        name: 'リスペクトキャリア株式会社',
        logo: '/images/top/company-2.webp',
      },
      title: '【管理職ポジション】ERP導入コンサルタント（Microsoft）',
      role: 'ERP導入コンサルタント',
      salary: '900万円 ~ 1,300万円',
      location: '東京都、大阪府',
      tags: ['ITコンサルタント', 'ERPコンサルタント', 'サプライチェーンマネジメント(SCM)'],
    },
    {
      id: '3',
      company: {
        name: 'リスペクトキャリア株式会社',
        logo: '/images/top/company-3.webp',
      },
      title: 'プロジェクトマネージャー◆リモート可/DX推進/プライム案件',
      role: 'プロジェクトマネージャー',
      salary: '800万円 ~ 1,200万円',
      location: '東京都',
      tags: ['プロジェクトマネージャー(PM)', 'Angular', 'AWS', 'Azure', 'GCP', 'Go(Golang)'],
    },
  ];
}

export default async function ProfilePage() {
  const profileData = await getProfileData();
  const messages = await getNewMessages();
  const jobs = await getNewJobs();
  const remainingSections = profileData.totalSections - profileData.completedSections;

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar isActive={[true, false, false, false, false]} />
      <main className="container mx-auto px-4 py-8">
        <ProfileHeader />
        <ProfileMethods sections={profileData.sections} remainingSections={remainingSections} />
        <NewMessages messages={messages} />
        <NewJobs jobs={jobs} />
      </main>
    </div>
  );
}
