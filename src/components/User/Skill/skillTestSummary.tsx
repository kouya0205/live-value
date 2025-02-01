import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import SkillPreviousData from '@/components/User/Skill/skillPreviousData';
import Link from 'next/link';

export default async function SkillTestSummary() {
  return (
    <div className="space-y-6 py-6 mx-auto">
      {/* 以前のテスト結果を表示する */}
      <h1 className="text-2xl font-bold text-center text-black">テスト概要</h1>
      <div className="flex justify-center gap-2">
        <Card className="bg-zinc-800 border-zinc-700 w-[30%]">
          <CardContent className="p-6 font-bold flex flex-col justify-between h-full">
            <div className="space-y-4">
              <div className="grid grid-cols-2 items-center gap-4">
                <div className="text-zinc-100">提出期限</div>
                <div className="text-zinc-100 font-medium">なし</div>
              </div>
              <div className="grid grid-cols-2 items-center gap-4">
                <div className="text-zinc-100">問題数</div>
                <div className="text-zinc-100 font-medium">4 問</div>
              </div>
              <div className="grid grid-cols-2 items-center gap-4">
                <div className="text-zinc-100">制限時間</div>
                <div className="text-zinc-100 font-medium">120分</div>
              </div>
              <div className="grid grid-cols-2 items-center gap-4">
                <div className="text-zinc-100">企業名</div>
                <div className="text-zinc-100 font-medium">Respect Carrier</div>
              </div>
            </div>
            <Link href={`/user/skill-check/fd881963-a7d5-4326-a3a6-528ea4e2b98c`}>
              <Button className="w-full mt-4 bg-slate-100 text-black font-bold hover:bg-slate-100">
                テストを開始
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="bg-zinc-800 border-zinc-700 w-[70%]">
          <CardHeader>
            <CardTitle className="text-xl text-center text-white">注意事項</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-zinc-100">
            <ScrollArea className="h-[220px]">
              <p>テストを開始する前に以下の注意事項をよく読んでから開始してください。</p>
              <ol className="list-decimal list-inside space-y-4 pl-4">
                <li>
                  テストには制限時間があります。一度テストを始めると中断することはできませんので予め余裕を持って始めるようにしてください。
                </li>
                <li>問題が複数出題されている場合、問題は順不同で解答することができます</li>
                <li>
                  制限時間はすべての問題で共通です。時間配分に気をつけて解答するようにしてください
                </li>
                <li>制限時間内であれば何度でも提出が可能です。</li>
                <li>
                  解答の途中でブラウザの閉じてしまった場合は、メールに送信されたテストのリンクからアクセスして始めるようにしてください。
                </li>
                <li>問題が複数出題されている場合、問題は順不同で解答することができます</li>
                <li>
                  制限時間はすべての問題で共通です。時間配分に気をつけて解答するようにしてください
                </li>
                <li>制限時間内であれば何度でも提出が可能です。</li>
                <li>
                  解答の途中でブラウザが閉じてしまった場合は、メールに送信されたテストのリンクからアクセスして始めるようにしてください。
                  その場合でも時間は経過しますので、ご注意ください。
                </li>
                <li>
                  SNS等に問題文や解答を公開することは禁止です。発覚した場合は提出を無効とし、対応を検討いたします。
                </li>
                <li>
                  本人の代わりにテストを受験することなどの不正行為が発覚した場合、評価に影響する可能性があります。
                </li>
              </ol>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
