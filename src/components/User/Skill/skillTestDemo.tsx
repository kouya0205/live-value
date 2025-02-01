'use client';

import { useState } from 'react';
import { Play, Code, RefreshCw, Trash2, FileCode2, LoaderCircle, Power } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CodeEditor } from '@/components/User/Skill/codeEditor';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Link from 'next/link';

export default function SkillTestDemo() {
  const [selectedDb, setSelectedDb] = useState('gnucobol');
  const [selectedQ, setSelectedQ] = useState('1問');

  return (
    <div className="flex bg-[#21143d]">
      {/* Left Sidebar */}
      <div className="w-[300px] bg-[#21143d] border-r border-slate-200 shadow-sm">
        <div className="bg-[#201d58] border-b border-[#202059] flex items-center h-16">
          <div className="flex items-center gap-1  h-full px-4 bg-[#2f2b7dbd] border-b-2 border-[#6363ba]">
            <FileCode2 className="w-4 h-4 text-white" />
            <p className="text-lg text-white font-bold">問題</p>
          </div>
        </div>
        <ScrollArea className="p-6 h-[400px]">
          <h2 className="text-xl font-bold text-white mb-4">【問題内容】</h2>
          <p className="text-lg text-white mb-4 leading-relaxed font-bold">
            以下の社員情報を扱うCOBOLプログラムを作成してください。プログラムは社員情報を表示する必要があります。
          </p>
          <p className="text-lg font-semibold text-white mb-2">社員レコード構造:</p>

          <div className="mt-4 border-2 border-slate-200 rounded-lg overflow-hidden">
            <table className="w-full text-lg">
              <thead className="bg-slate-50">
                <tr>
                  <th className="p-2 text-left text-slate-700 font-semibold border-b-2 border-slate-200">
                    項目名
                  </th>
                  <th className="p-2 text-left text-slate-700 font-semibold border-b-2 border-slate-200">
                    定義
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="p-2 text-white font-bold">社員番号</td>
                  <td className="p-2 text-white font-bold">PIC 9(5)</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-2 text-white font-bold">氏名</td>
                  <td className="p-2 text-white font-bold">PIC X(20)</td>
                </tr>
                <tr>
                  <td className="p-2 text-white font-bold">部署</td>
                  <td className="p-2 text-white font-bold">PIC X(15)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </ScrollArea>
        <div className="bg-[#201d58] border-b border-[#202059] flex flex-col items-start h-80">
          <div className="flex items-center gap-1 h-16 px-4 bg-[#2f2b7dbd] border-b-2 border-[#6363ba]">
            <FileCode2 className="w-4 h-4 text-white" />
            <p className="text-lg text-white font-bold">説明文</p>
          </div>
          <Textarea
            className="w-full flex-1 bg-[#21143d] text-white"
            placeholder="提出するコードに説明を加えることができます。実装に至るまでの思考プロセスや、各処理の詳細な説明などを自由に記述してください。"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="bg-[#201d58] h-16 p-6 flex items-center justify-between border-b-2 border-[#6363ba]">
          <div className="flex items-center gap-6">
            <Select defaultValue={selectedDb}>
              <SelectTrigger className="w-56 text-lg h-10 text-slate-300">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#21143d]">
                <SelectItem value="gnucobol" className="text-lg font-bold text-slate-300">
                  GnuCOBOL 3.1
                </SelectItem>
                <SelectItem value="opencobol" className="text-lg font-bold text-slate-300">
                  OpenCOBOL 1.1
                </SelectItem>
                <SelectItem value="ibmcobol" className="text-lg font-bold text-slate-300">
                  IBM COBOL 6.3
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-1">
            <Select defaultValue={selectedQ}>
              <SelectTrigger className="w-24 text-lg h-10 text-slate-300">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#21143d]">
                <SelectItem value="1問" className="text-lg font-bold text-slate-300">
                  第1問
                </SelectItem>
                <SelectItem value="2問" className="text-lg font-bold text-slate-300">
                  第2問
                </SelectItem>
                <SelectItem value="3問" className="text-lg font-bold text-slate-300">
                  第3問
                </SelectItem>
                <SelectItem value="4問" className="text-lg font-bold text-slate-300">
                  第4問
                </SelectItem>
              </SelectContent>
            </Select>
            <p className="text-lg text-slate-300 font-bold">/ 全4問</p>
          </div>
          <div className="flex items-center gap-2">
            <LoaderCircle className="w-7 h-7 text-green-500" />
            <span className="text-xl text-green-500 font-bold">残り時間: 1時間22分</span>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" variant="destructive" className="text-lg px-6 font-bold">
                  <Power className="text-white w-6 h-6" />
                  テスト終了
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>テストを終了しますか?</DialogTitle>
                  <DialogDescription>
                    提出後は変更することができません。結果が出るまで時間がかかる可能性があります。
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Link href="/user/skill-check/result/fd881963-a7d5-4326-a3a6-528ea4e2b98c">
                    <Button
                      type="submit"
                      className="bg-[#352063] font-bold hover:bg-[rgb(190,108,240)]">
                      提出して終了する
                    </Button>
                  </Link>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Code Editor */}
        <CodeEditor />

        {/* Bottom Panel */}
        <div className="bg-[#21143d]">
          <Tabs defaultValue="test-cases" className="w-full">
            <div className="flex items-center justify-between bg-[#201d58] h-full">
              <TabsList className="bg-transparent p-0 font-bold h-full">
                <TabsTrigger
                  value="test-cases"
                  className="h-full text-lg px-6 py-2 rounded-none font-bold text-slate-300 data-[state=active]:bg-[#2f2b7dbd] data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-[#6363ba]">
                  テストケース
                </TabsTrigger>
                <TabsTrigger
                  value="results"
                  className="h-full text-lg px-6 py-2 rounded-none font-bold text-slate-300 data-[state=active]:bg-[#383269] data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-[#6363ba]">
                  結果
                </TabsTrigger>
              </TabsList>
              <div className="flex items-center gap-4 m-2">
                <Button
                  size="lg"
                  className="text-lg bg-[#6366f1] hover:bg-[#4f46e5] text-white border-none font-bold">
                  <Play className="w-5 h-5 mr-2" />
                  実行
                </Button>
                <Button
                  size="lg"
                  className="text-lg bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold">
                  <Code className="w-5 h-5 mr-2" />
                  コード提出
                </Button>
              </div>
            </div>

            <TabsContent value="test-cases" className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <Button
                  size="sm"
                  className="text-lg bg-[#383269] text-white hover:bg-[#443b8b] rounded-full">
                  ケース1
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="text-lg text-white/70 bg-transparent hover:bg-[#383269] border-none rounded-full">
                  ケース2
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="text-lg text-white/70 bg-transparent hover:bg-[#383269] border-none rounded-full">
                  ケース3
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="text-lg text-white/70 bg-transparent hover:bg-[#383269] border-none rounded-full">
                  +
                </Button>
                <div className="ml-auto flex gap-4 items-center">
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-white bg-transparent border-none ">
                    <RefreshCw className="w-5 h-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-white  bg-transparent border-none ">
                    <Trash2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              <div className="bg-[#1a1a2e] rounded-lg overflow-hidden border border-[#383269]">
                <div className="p-4">
                  <h3 className="text-lg text-white mb-4">task</h3>
                  <table className="w-full text-lg">
                    <thead>
                      <tr className="border-b border-[#383269]">
                        <th className="p-4 text-left text-white/70">id (int)</th>
                        <th className="p-4 text-left text-white/70">name (string)</th>
                        <th className="p-4 text-left text-white/70">done (bool)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-4 text-white">1</td>
                        <td className="p-4 text-white">Go shopping</td>
                        <td className="p-4 text-white">FALSE (0)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
