import React from 'react';
// shadcn/ui のカードコンポーネントを読み込み
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

type ProjectDetailProps = {
  project: any;
};

export default function ProjectsDetail({ project }: ProjectDetailProps) {
  if (!project) {
    return <div className="p-4">Loading...</div>;
  }

  const {
    id,
    title,
    description,
    remote_availability,
    overseas_availability,
    weekend_work_allowed,
    start_date,
    end_date,
    quota,
    created_at,
    updated_at,
    companies,
  } = project;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight mb-6">案件情報</h1>

      {/* インターン案件情報 */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>インターン募集概要</CardTitle>
          <CardDescription>募集に関する基本情報を確認できます。</CardDescription>
        </CardHeader>
        <CardContent>
          <dl className="flex flex-col gap-y-2">
            {/* タイトル */}
            <div className="w-full">
              <dt className="font-semibold">タイトル</dt>
              <dd>{title || 'タイトルなし'}</dd>
            </div>
            {/* 募集期間 */}
            <div>
              <dt className="font-semibold">募集期間</dt>
              <dd>
                {start_date ?? '未設定'} ～ {end_date ?? '未設定'}
              </dd>
            </div>
            {/* 募集人数 */}
            <div>
              <dt className="font-semibold">募集人数</dt>
              <dd>{quota ?? '未設定'}</dd>
            </div>
            {/* リモート勤務 */}
            <div>
              <dt className="font-semibold">リモート勤務</dt>
              <dd>{remote_availability ? '可能' : '不可'}</dd>
            </div>
            {/* 海外勤務 */}
            <div>
              <dt className="font-semibold">海外勤務</dt>
              <dd>{overseas_availability ? '可能' : '不可'}</dd>
            </div>
            {/* 土日勤務 */}
            <div>
              <dt className="font-semibold">土日勤務</dt>
              <dd>{weekend_work_allowed ? '可能' : '不可'}</dd>
            </div>
            {/* 作成日時 */}
            <div>
              <dt className="font-semibold">作成日時</dt>
              <dd>{created_at}</dd>
            </div>
            {/* 更新日時 */}
            <div>
              <dt className="font-semibold">更新日時</dt>
              <dd>{updated_at}</dd>
            </div>
          </dl>

          <div className="mt-4">
            <h3 className="text-lg font-semibold">仕事内容</h3>
            <p className="whitespace-pre-wrap mt-1">{description || '（説明文なし）'}</p>
          </div>
        </CardContent>
      </Card>

      {/* 企業情報 */}
      <Card>
        <CardHeader>
          <CardTitle>企業情報</CardTitle>
          <CardDescription>募集を行っている企業の情報です。</CardDescription>
        </CardHeader>
        <CardContent>
          {companies ? (
            <dl className="grid grid-cols-[120px_1fr] gap-y-2">
              <div>
                <dt className="font-semibold">会社名</dt>
                <dd>{companies.name || '未設定'}</dd>
              </div>
              <div>
                <dt className="font-semibold">Webサイト</dt>
                <dd>{companies.website_url || '未設定'}</dd>
              </div>
              <div>
                <dt className="font-semibold">連絡先メール</dt>
                <dd>{companies.contact_email || '未設定'}</dd>
              </div>
              <div>
                <dt className="font-semibold">電話番号</dt>
                <dd>{companies.contact_phone || '未設定'}</dd>
              </div>
              <div>
                <dt className="font-semibold">担当者</dt>
                <dd>{companies.contact_person || '未設定'}</dd>
              </div>
              <div>
                <dt className="font-semibold">部署</dt>
                <dd>{companies.contact_department || '未設定'}</dd>
              </div>
            </dl>
          ) : (
            <p>企業情報がありません。</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
