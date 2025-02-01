'use client';

import { Badge } from '@/components/ui/badge';
import { Timeline } from '@/components/ui/timeline';
import { Card } from '@/components/ui/card';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function TestResults() {
  const timelineData = [
    {
      title: '問題 1',
      content: (
        <Card className="p-6 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <h4 className="font-bold">正解</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              COBOLプログラムにおける基本的なファイル処理の実装
            </p>
          </div>
          <div className="space-y-2">
            <h5 className="font-medium">解答内容</h5>
            <pre className="p-4 bg-muted rounded-lg text-sm">
              {`SELECT CUSTOMER-FILE
    ASSIGN TO "CUSTOMER.DAT"
    ORGANIZATION IS INDEXED
    ACCESS MODE IS DYNAMIC
    RECORD KEY IS CUSTOMER-ID.`}
            </pre>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge>ファイル処理</Badge>
            <Badge>データ構造</Badge>
            <Badge variant="secondary">25点/25点</Badge>
          </div>
        </Card>
      ),
    },
    {
      title: '問題 2',
      content: (
        <Card className="p-6 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <h4 className="font-bold">正解</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              バッチ処理における売上集計プログラムの作成
            </p>
          </div>
          <div className="space-y-2">
            <h5 className="font-medium">解答内容</h5>
            <pre className="p-4 bg-muted rounded-lg text-sm">
              {`COMPUTE TOTAL-AMOUNT = 
    QUANTITY * UNIT-PRICE
MOVE TOTAL-AMOUNT TO PRINT-AMOUNT
WRITE PRINT-LINE`}
            </pre>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge>バッチ処理</Badge>
            <Badge>計算ロジック</Badge>
            <Badge variant="secondary">20点/25点</Badge>
          </div>
        </Card>
      ),
    },
    {
      title: '問題 3',
      content: (
        <Card className="p-6 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <XCircle className="w-5 h-5 text-red-500" />
              <h4 className="font-bold">不正解</h4>
            </div>
            <p className="text-sm text-muted-foreground">データベース連携処理の実装</p>
          </div>
          <div className="space-y-2">
            <h5 className="font-medium">解答内容</h5>
            <pre className="p-4 bg-muted rounded-lg text-sm">
              {`EXEC SQL
    SELECT * FROM CUSTOMERS
    WHERE CUSTOMER_ID = :WS-CUSTOMER-ID
END-EXEC`}
            </pre>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge>SQL</Badge>
            <Badge>DB連携</Badge>
            <Badge variant="secondary">15点/25点</Badge>
          </div>
        </Card>
      ),
    },
    {
      title: '問題 4',
      content: (
        <Card className="p-6 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <h4 className="font-bold">正解</h4>
            </div>
            <p className="text-sm text-muted-foreground">エラーハンドリングの実装</p>
          </div>
          <div className="space-y-2">
            <h5 className="font-medium">解答内容</h5>
            <pre className="p-4 bg-muted rounded-lg text-sm">
              {`EVALUATE TRUE
    WHEN ERROR-CODE = "E001"
        PERFORM ERROR-HANDLING-ROUTINE
    WHEN ERROR-CODE = "E002"
        PERFORM DATA-RECOVERY-ROUTINE
END-EVALUATE`}
            </pre>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge>エラー処理</Badge>
            <Badge>制御構造</Badge>
            <Badge variant="secondary">20点/25点</Badge>
          </div>
        </Card>
      ),
    },
    {
      title: '総合評価',
      content: (
        <Card className="p-6 space-y-4">
          <div className="space-y-4">
            <h4 className="font-bold text-xl">合計得点: 80点/100点</h4>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">評価コメント:</p>
              <ul className="list-disc list-inside text-sm space-y-1 text-muted-foreground">
                <li>基本的なファイル処理の理解が十分</li>
                <li>バッチ処理のロジックが適切に実装</li>
                <li>データベース連携の理解にやや課題</li>
                <li>エラーハンドリングの実装が適切</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-2 pt-4">
              <Badge variant="default">合格</Badge>
              <Badge variant="secondary">COBOL中級</Badge>
              <Badge variant="secondary">業務システム開発</Badge>
            </div>
          </div>
        </Card>
      ),
    },
  ];

  return (
    <div className="min-h-screen w-full bg-background">
      <Timeline data={timelineData} />
    </div>
  );
}
