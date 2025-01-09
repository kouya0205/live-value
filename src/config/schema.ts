import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string({ required_error: 'メールアドレスを入力してください' })
    .email('メールアドレスの形式が正しくありません'),
  password: z
    .string({ required_error: 'パスワードを入力してください' })
    .min(6, 'パスワードは6文字以上で入力してください'),
});

export const signupSchema = z
  .object({
    email: z
      .string({ required_error: 'メールアドレスを入力してください' })
      .email('メールアドレスの形式が正しくありません'),
    username: z
      .string({ required_error: '氏名を入力してください' })
      .min(3, '氏名は3文字以上で入力してください'),
    password: z
      .string({ required_error: 'パスワードを入力してください' })
      .min(6, 'パスワードは6文字以上で入力してください')
      .regex(
        /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i,
        'パスワードは半角英数字混合で入力してください',
      ),
    confirmPassword: z
      .string({ required_error: 'パスワードを再入力してください' })
      .min(6, 'パスワードは6文字以上で入力してください'),
    acceptCheckbox: z.boolean({
      required_error: '利用規約とプライバシーポリシーに同意してください',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'], // エラーの対象フィールド
    message: 'パスワードが一致しません',
  });

export const companySignupSchema = z
  .object({
    email: z
      .string({ required_error: 'メールアドレスを入力してください' })
      .email('メールアドレスの形式が正しくありません'),
    username: z
      .string({ required_error: '会社名を入力してください' })
      .min(3, '会社名は3文字以上で入力してください'),
    password: z
      .string({ required_error: 'パスワードを入力してください' })
      .min(6, 'パスワードは6文字以上で入力してください')
      .regex(
        /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i,
        'パスワードは半角英数字混合で入力してください',
      ),
    confirmPassword: z
      .string({ required_error: 'パスワードを再入力してください' })
      .min(6, 'パスワードは6文字以上で入力してください'),
    acceptCheckbox: z.boolean({
      required_error: '利用規約とプライバシーポリシーに同意してください',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'], // エラーの対象フィールド
    message: 'パスワードが一致しません',
  });

export const profileSchema = z.object({
  username: z
    .string({ required_error: '氏名を入力してください' })
    .min(3, 'ユーザー名は3文字以上で入力してください'),
});

export const projectSchema = z.object({
  title: z
    .string({ required_error: '案件名を入力してください' })
    .min(3, '案件名は3文字以上で入力してください'),
  description: z
    .string({ required_error: '案件内容を入力してください' })
    .min(3, '案件内容は3文字以上で入力してください'),
  start_date: z
    .string({ required_error: '開始日を入力してください' })
    .regex(/^\d{4}-\d{2}-\d{2}$/, '日付の形式が正しくありません'),
  end_date: z
    .string({ required_error: '終了日を入力してください' })
    .regex(/^\d{4}-\d{2}-\d{2}$/, '日付の形式が正しくありません'),
  capacity: z
    .number({ required_error: '募集人数を入力してください' })
    .int('募集人数は整数で入力してください')
    .min(1, '募集人数は1以上で入力してください'),
  location: z
    .string({ required_error: '勤務地を入力してください' })
    .min(3, '勤務地は3文字以上で入力してください'),
  salary_type: z.enum(['hourly', 'daily', 'monthly'], {
    required_error: '給与タイプを選択してください',
  }),
  salary_min: z
    .string({ required_error: '最低給与を入力してください' })
    .regex(/^\d+$/, '給与は数字で入力してください'),
  salary_max: z
    .string({ required_error: '最高給与を入力してください' })
    .regex(/^\d+$/, '給与は数字で入力してください'),
  is_published: z.boolean(),
  quota: z
    .number({ required_error: '募集人数を入力してください' })
    .int('募集人数は整数で入力してください')
    .min(1, '募集人数は1以上で入力してください'),
});
