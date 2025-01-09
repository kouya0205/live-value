import ProjectsDetail from '@/components/Company/projectsDetail';
import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ project_id: string }>;
}) {
  const supabase = await createClient();
  const project_id = (await params).project_id;
  const { data: project } = await supabase
    .from('internships')
    .select(
      `*,
    companies(*)`,
    )
    .eq('id', project_id)
    .single();
  console.log(project);
  return (
    <div>
      <h1>案件情報</h1>
      <Link href="/company/dashboard">案件一覧に戻る</Link>
      <Link href={`/company/projects/${project_id}/edit`}>編集</Link>
      <ProjectsDetail project={project} />
    </div>
  );
}
