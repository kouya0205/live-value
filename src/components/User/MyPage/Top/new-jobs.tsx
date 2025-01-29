import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, JapaneseYenIcon as Yen } from 'lucide-react';
import { NewJob } from '@/app/user/dashboard/page';

export function NewJobs(props: { jobs: NewJob[] }) {
  return (
    <Card className="mt-8 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">新着求人</h2>
        <Link href="/jobs" className="text-blue-500 hover:underline">
          すべてを見る
        </Link>
      </div>
      <div className="mt-4 grid gap-8 grid-cols-3">
        {props.jobs.map((job) => (
          <div key={job.id} className="border-b pb-4 last:border-0">
            <div className="flex flex-col gap-4">
              <div className="relative h-[240px] w-full overflow-hidden rounded-lg">
                <Image
                  src={job.company.logo || '/placeholder.svg'}
                  alt={job.company.name}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="font-bold">{job.company.name}</span>
                </div>
                <h3 className="text-lg font-bold text-blue-700">{job.title}</h3>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-1">
                    <FileText className="h-4 w-4" />
                    <span>{job.role}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Yen className="h-4 w-4" />
                    <span>{job.salary}</span>
                  </div>
                  <span>{job.location}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
