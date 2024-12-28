import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function AppHome() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    redirect('/auth');
  }
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-2">mypageです。</div>
    </div>
  );
}
