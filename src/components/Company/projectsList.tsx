'use client';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useRouter } from 'next/navigation';

export default function ProjectsList({ caseList }: { caseList: any }) {
  const router = useRouter();
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="w-[80px]">公開</TableHead>
            <TableHead className="w-[100px]">ステータス</TableHead>
            <TableHead className="w-[300px]">案件名</TableHead>
            <TableHead className="w-[150px]">案件開始予定日</TableHead>
            <TableHead className="w-[100px]">募集人数</TableHead>
            <TableHead>担当者</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {caseList.map((job: any) => (
            <TableRow
              key={job.id}
              className="cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => router.push(`/company/projects/${job.id}`)}>
              <TableCell>{job.is_published ? '公開' : '非公開'}</TableCell>
              <TableCell>
                <span className="text-rose-500 font-medium">{/* {job.status} */}募集中</span>
              </TableCell>
              <TableCell className="font-medium">{job.title}</TableCell>
              <TableCell>{job.start_date}</TableCell>
              <TableCell>{job.quota}名</TableCell>
              <TableCell>{job.companies.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
