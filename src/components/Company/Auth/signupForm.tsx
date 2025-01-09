import { useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { CircleChevronRight } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

import { authConfig } from '@/config/auth';
import { companySignupSchema } from '@/config/schema';
import { companySignup } from '@/hooks/useActions';

import { useActionState } from 'react';
import { CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';

export const SignupForm: FC = () => {
  const [lastResult, action, isPending] = useActionState(companySignup, undefined);
  const [form, fields] = useForm({
    // 前回の送信結果を同期
    lastResult,

    // クライアントでバリデーション・ロジックを再利用する
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: companySignupSchema });
    },

    // blurイベント発生時にフォームを検証する
    shouldValidate: 'onBlur',
  });
  return (
    <>
      <form id={form.id} onSubmit={form.onSubmit} action={action} noValidate>
        <CardContent className="space-y-2">
          <div id={form.errorId} className="text-xs text-red-600">
            {form.errors}
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">{authConfig.companySignup.email.label}</Label>
            <Input
              id="email"
              type="email"
              placeholder={authConfig.companySignup.email.placeholder}
              className="focus:border-[#349BD1] focus:ring-[#349BD1]"
              key={fields.email.key}
              name={fields.email.name}
              defaultValue={fields.email.initialValue}
            />
            <div className="text-xs text-red-600">{fields.email.errors}</div>
          </div>
          <div className="space-y-1">
            <Label htmlFor="username">{authConfig.companySignup.companyName.label}</Label>
            <Input
              id="username"
              type="text"
              placeholder={authConfig.companySignup.companyName.placeholder}
              className="focus:border-[#349BD1] focus:ring-[#349BD1]"
              key={fields.username.key}
              name={fields.username.name}
              defaultValue={fields.username.initialValue}
            />
            <div className="text-xs text-red-600">{fields.username.errors}</div>
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">{authConfig.companySignup.password.label}</Label>
            <Input
              id="password"
              type="password"
              placeholder={authConfig.companySignup.password.placeholder}
              className="focus:border-[#349BD1] focus:ring-[#349BD1]"
              key={fields.password.key}
              name={fields.password.name}
              defaultValue={fields.password.initialValue}
            />
            <div className="text-xs text-red-600">{fields.password.errors}</div>
          </div>
          <div className="space-y-1">
            <Label htmlFor="confirmPassword">
              {authConfig.companySignup.confirmPassword.label}
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder={authConfig.companySignup.confirmPassword.placeholder}
              className="focus:border-[#349BD1] focus:ring-[#349BD1]"
              key={fields.confirmPassword.key}
              name={fields.confirmPassword.name}
              defaultValue={fields.confirmPassword.initialValue}
            />
            <div className="text-xs text-red-600">{fields.confirmPassword.errors}</div>
          </div>
          {/* checkbox */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              className="focus:border-[#349BD1] focus:ring-[#349BD1]"
              key={fields.acceptCheckbox.key}
              name={fields.acceptCheckbox.name}
              defaultChecked={fields.acceptCheckbox.initialValue === 'on'}
            />
            <Label htmlFor="terms" className="font-thin">
              <Link
                href="https://dot-scallop-d45.notion.site/5103947e446548ca8a9d7191fa512be7"
                target="_blank"
                className="text-[#349BD1] hover:underline">
                利用規約
              </Link>
              と
              <Link
                href="https://dot-scallop-d45.notion.site/5103947e446548ca8a9d7191fa512be7"
                target="_blank"
                className="text-[#349BD1] hover:underline">
                プライバシーポリシー
              </Link>
              に同意します。
            </Label>
          </div>
          <div className="text-xs text-red-600">{fields.acceptCheckbox.errors}</div>
        </CardContent>
        <CardFooter className="flex flex-col py-0">
          <Button
            className="w-full bg-[#349BD1] text-white font-bold hover:bg-[#38B8EA]"
            disabled={isPending}>
            {isPending ? '登録中...' : authConfig.companySignup.button}{' '}
            <CircleChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </form>
    </>
  );
};
