import { Button } from '@/components/ui/button';
import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function CheckInviteEmailPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect('/company/dashboard');
  }
  return (
    <div>
      <h1>Check Invite Email</h1>
      <Link href="/company/auth">
        <Button>ログインへ</Button>
      </Link>
    </div>
  );
}
