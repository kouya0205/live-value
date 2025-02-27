import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Heart, Link } from 'lucide-react';
import Icon from '@mdi/react';
import { mdiAccountTie } from '@mdi/js';

export default function Home() {
  return (
    <div className="mx-auto px-12 flex items-center justify-center">
      {/* <h1 className="text-2xl font-bold mt-4 mb-6">
            【アプリ開発日記15周目】Next.js 14→15の違いと実際のアップグレード
          </h1>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Icon path={mdiAccountTie} size={2} className="bg-gray-200 rounded-full p-2" />
              <div>
                <p className="font-medium">山田太郎</p>
                <p className="text-sm text-gray-500">2025年2月2日 16:52</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-gray-500" />
              <span className="text-gray-500">4</span>
            </div>
          </div>
          <h2 className="break-words">
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </h2> */}
      <Image src="/images/top/b.png" alt="お試し" width={700} height={3500} />
    </div>
  );
}
