import ProjectsList from '@/components/Company/projectsList';
import NewRegister from '@/components/Company/newRegister';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

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
  return (
    <div>
      {/* <NewRegister />
      <ProjectsList caseList={caseList} /> */}
      {/* <NoteList articles={articles} /> */}
    </div>
  );
}
