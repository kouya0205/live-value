import { AuthForm } from '@/components/User/Auth/authpage';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function AuthPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) {
    redirect('/user/dashboard');
  }
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-between pt-20">
        <AuthForm />
      </div>
    </>
  );
}
