import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { mdiFileCodeOutline, mdiNoteEditOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { ChevronsRight, Circle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProfileMethodProps {
  sections: {
    id: string;
    label: string;
    description: string;
  }[];
  remainingSections: number;
}

export function ProfileMethods({ sections, remainingSections }: ProfileMethodProps) {
  return (
    <div className="mt-6 grid gap-6 md:grid-cols-2">
      <Card className="p-6">
        <div className="flex justify-between">
          <h2 className="text-lg font-bold">スキルチェック</h2>
          {/* <span className="rounded-full bg-teal-100 px-3 py-1 text-sm text-teal-600">おすすめ</span> */}
        </div>
        <div className="mt-4 text-center flex flex-col gap-2">
          <h3 className="text-xl font-bold text-blue-500">
            ライブコーディングをして
            <br />
            あなたのスキルを証明しよう！
          </h3>
          <div className="bg-gray-100 flex gap-2 items-center justify-center p-4 rounded-full flex-1">
            <Icon path={mdiFileCodeOutline} title="User Skill" size={4} horizontal color="gray" />
            <ChevronsRight />
            <Icon path={mdiNoteEditOutline} title="User Resume" size={4} horizontal color="blue" />
          </div>
          <div className="mt-6">
            <Link href="/user/skill-check">
              <Button className="w-full font-bold p-1">スキルチェックを開始</Button>
            </Link>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex justify-between">
          <h2 className="text-lg font-bold">人柄記事作成</h2>
          <span className="rounded-full font-bold bg-teal-100 px-3 py-1 text-sm text-teal-600">
            おすすめ
          </span>
        </div>
        {/* <div className="flex items-center space-x-2"> */}
        {/* <span>残り{remainingSections}項目</span>
            <div className="h-2 w-32 overflow-hidden rounded-full bg-gray-200">
              <div className="h-full w-1/4 bg-teal-500" />
            </div> */}
        {/* </div> */}
        {/* </div> */}
        <div className="mt-4 items-center flex justify-center">
          <Image src="/images/top/note.webp" alt="note" width={350} height={200} />
        </div>
        <Button className="w-full mt-6 font-bold p-1">人柄記事を作成</Button>
      </Card>
    </div>
  );
}
