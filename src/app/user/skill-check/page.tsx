import { NavBar } from '@/components/User/MyPage/nav-bar';
import { ProfileHeader } from '@/components/User/MyPage/profile-header';
import { ProfileMethods } from '@/components/User/MyPage/profile-method';
import SkillTestSummary from '@/components/User/Skill/skillTestSummary';

export default async function SkillCheckPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar isActive={[false, true, false, false, false]} />
      <main className="container mx-auto px-4 py-8">
        <SkillTestSummary />
      </main>
    </div>
  );
}
