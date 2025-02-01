'use client';

import { Badge } from '@/components/ui/badge';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';
import { Progress } from '@/components/ui/progress';
import TestResults from '@/components/User/Skill/testTimeline';

export default function SkillResults() {
  const radarData = [
    { subject: '計画策定', value: 80 },
    { subject: 'ベンダーコントロール', value: 80 },
    { subject: '予算管理', value: 85 },
    { subject: '品質管理', value: 65 },
    { subject: 'トラブル対応', value: 85 },
    { subject: '経営層への報告', value: 85 },
  ];

  const scores = [
    { category: 'アプリケーション', score: 80 },
    { category: 'インフラ', score: 60 },
    { category: 'Web', score: 25 },
    { category: 'ERP', score: 70 },
  ];

  const tags = [
    { name: 'SAP(FI)', variant: 'default' as const },
    { name: 'SAP(CO)', variant: 'default' as const },
    { name: '会計', variant: 'secondary' as const },
    { name: '金融業界', variant: 'secondary' as const },
    { name: 'Linux', variant: 'secondary' as const },
    { name: 'COBOL', variant: 'secondary' as const },
  ];

  return (
    <div className="min-h-screen w-full bg-background p-12">
      <div className="flex items-start justify-around gap-8">
        <div className="bg-card rounded-lg w-1/2">
          <h3 className="text-xl font-semibold mb-6">スキル評価</h3>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
                <PolarGrid stroke="#3b82f6" />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{ fill: '#000', fontSize: 14, fontWeight: 700 }}
                />
                <Radar
                  name="スキル"
                  dataKey="value"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.3}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="w-1/2">
          <div className="w-full mx-auto">
            <div className="bg-card rounded-lg">
              <p className="text-xl font-semibold mb-6">テスト結果</p>
              <div className="space-y-6 pt-6">
                <div className="space-y-5">
                  {scores.map((item) => (
                    <div key={item.category} className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="font-bold text-lg">{item.category}</span>
                        <span className="font-bold">{item.score}</span>
                      </div>
                      <Progress value={item.score} className="h-5" />
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t">
                  {tags.map((tag) => (
                    <Badge key={tag.name} variant={tag.variant} className="p-1">
                      {tag.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TestResults />
    </div>
  );
}
