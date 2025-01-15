'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { projectSchema } from '@/config/schema';
import { newProjects } from '@/hooks/useActions';
import { useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { useActionState } from 'react';

export default function NewRegisterForm() {
  const [lastResult, action, isPending] = useActionState(newProjects, undefined);
  const [form, fields] = useForm({
    // 前回の送信結果を同期
    lastResult,

    // クライアントでバリデーション・ロジックを再利用する
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: projectSchema });
    },

    // blurイベント発生時にフォームを検証する
    shouldValidate: 'onInput',
  });
  return (
    <form id={form.id} onSubmit={form.onSubmit} action={action} noValidate>
      <Card className="max-w-5xl mx-auto">
        <CardContent className="space-y-4">
          {/* タイトル */}
          <div id={form.errorId} className="text-xs text-red-600">
            {form.errors}
          </div>
          <div className="space-y-1">
            <Label htmlFor="title">案件名</Label>
            <Input
              key={fields.title.key}
              name={fields.title.name}
              defaultValue={fields.title.initialValue}
              id="title"
              type="title"
              placeholder="案件名を入力"
              className="focus:border-[#ffeedd] focus:ring-[#ffeedd]"
            />
            <div className="text-xs text-red-600">{fields.title.errors}</div>
          </div>

          {/* short_description */}
          <div>
            <Label htmlFor="short_description">短い説明</Label>
            <Input
              id="short_description"
              name="short_description"
              type="text"
              placeholder="短いキャッチコピーなど"
            />
          </div>

          {/* description */}
          <div>
            <Label htmlFor="description">募集内容・説明文章</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="業務内容や条件などを詳しく記載"
            />
          </div>

          {/* required_experience */}
          <div>
            <Label htmlFor="required_experience">必須経験</Label>
            <Textarea
              id="required_experience"
              name="required_experience"
              placeholder="必須スキルや経験を記載"
            />
          </div>

          {/* welcomed_experience */}
          <div>
            <Label htmlFor="welcomed_experience">歓迎経験</Label>
            <Textarea
              id="welcomed_experience"
              name="welcomed_experience"
              placeholder="あれば尚良いスキルや経験"
            />
          </div>

          {/* acquired_skills */}
          <div>
            <Label htmlFor="acquired_skills">身に付くスキル</Label>
            <Textarea
              id="acquired_skills"
              name="acquired_skills"
              placeholder="インターンで得られるスキル、経験"
            />
          </div>

          {/* selection_points */}
          <div>
            <Label htmlFor="selection_points">選考時に重視するポイント</Label>
            <Textarea
              id="selection_points"
              name="selection_points"
              placeholder="選考で注目する点、求める人物像など"
            />
          </div>

          {/* location */}
          <div>
            <Label htmlFor="location">勤務地</Label>
            <Input id="location" name="location" type="text" placeholder="オフィス所在地等" />
          </div>

          {/* access_info */}
          <div>
            <Label htmlFor="access_info">アクセス情報</Label>
            <Input
              id="access_info"
              name="access_info"
              type="text"
              placeholder="最寄り駅や交通手段"
            />
          </div>

          {/* remote_availability */}
          <div className="flex items-center justify-between">
            <Label htmlFor="remote_availability">リモート勤務可</Label>
            <Checkbox id="remote_availability" />
          </div>

          {/* overseas_availability */}
          <div className="flex items-center justify-between">
            <Label htmlFor="overseas_availability">海外からの勤務可</Label>
            <Checkbox id="overseas_availability" />
          </div>

          {/* min_period_month */}
          <div>
            <Label htmlFor="min_period_month">最低勤務期間(月)</Label>
            <Input
              id="min_period_month"
              name="min_period_month"
              type="number"
              placeholder="例: 3"
            />
          </div>

          {/* work_hours_per_day */}
          <div>
            <Label htmlFor="work_hours_per_day">1日あたりの勤務時間(時間)</Label>
            <Input
              id="work_hours_per_day"
              name="work_hours_per_day"
              type="number"
              placeholder="例: 5"
            />
          </div>

          {/* work_days_per_week */}
          <div>
            <Label htmlFor="work_days_per_week">週あたりの勤務日数(日)</Label>
            <Input
              id="work_days_per_week"
              name="work_days_per_week"
              type="number"
              placeholder="例: 3"
            />
          </div>

          {/* weekend_work_allowed */}
          <div className="flex items-center justify-between">
            <Label htmlFor="weekend_work_allowed">土日勤務可</Label>
            <Checkbox id="weekend_work_allowed" />
          </div>

          {/* salary_type */}
          <div>
            <Label htmlFor="salary_type">給与・報酬形態</Label>
            <Select>
              <SelectTrigger id="salary_type">
                <SelectValue placeholder="選択してください" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>選択してください</SelectLabel>
                  <SelectItem value="hourly">時給</SelectItem>
                  <SelectItem value="monthly">月給</SelectItem>
                  <SelectItem value="performance">完全歩合</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* salary_min */}
          <div>
            <Label htmlFor="salary_min">最低報酬(数値)</Label>
            <Input id="salary_min" name="salary_min" type="number" placeholder="例: 1000" />
          </div>

          {/* salary_max */}
          <div>
            <Label htmlFor="salary_max">最高報酬(数値)</Label>
            <Input id="salary_max" name="salary_max" type="number" placeholder="例: 1500" />
          </div>

          {/* additional_allowances */}
          <div>
            <Label htmlFor="additional_allowances">追加の手当・待遇</Label>
            <Textarea
              id="additional_allowances"
              name="additional_allowances"
              placeholder="交通費支給、リモート手当等"
            />
          </div>

          {/* message_from_company */}
          <div>
            <Label htmlFor="message_from_company">企業メッセージ</Label>
            <Textarea
              id="message_from_company"
              name="message_from_company"
              placeholder="代表からのメッセージや企業の想いなど"
            />
          </div>

          {/* application_process */}
          <div>
            <Label htmlFor="application_process">応募後フロー</Label>
            <Textarea
              id="application_process"
              name="application_process"
              placeholder="応募〜面接〜採用決定までの流れ"
            />
          </div>

          {/* is_published */}
          <div className="flex items-center justify-between">
            <Label htmlFor="is_published">公開フラグ</Label>
            <Checkbox id="is_published" />
          </div>

          {/* quota */}
          <div>
            <Label htmlFor="quota">募集枠(人数)</Label>
            <Input id="quota" name="quota" type="number" placeholder="例: 2" />
          </div>

          {/* start_date */}
          <div>
            <Label htmlFor="start_date">募集開始日</Label>
            <Input id="start_date" name="start_date" type="date" />
          </div>

          {/* end_date */}
          <div>
            <Label htmlFor="end_date">募集終了日</Label>
            <Input id="end_date" name="end_date" type="date" />
          </div>

          {/* created_at / updated_at は通常自動生成なので読み取り専用 or hidden にすることが多い */}
          <div className="hidden">
            <Input id="created_at" name="created_at" readOnly />
            <Input id="updated_at" name="updated_at" readOnly />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button variant="secondary" type="button">
            キャンセル
          </Button>
          <Button type="submit" disabled={isPending}>
            {isPending ? '送信中...' : '登録'}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
