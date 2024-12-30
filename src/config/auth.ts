import { type AuthConfig } from 'types';

export const authConfig: AuthConfig = {
  tab: {
    login: 'ログイン',
    signup: '新規登録',
  },
  login: {
    title: 'ログイン',
    description: 'メールアドレスとパスワードを入力してください。',
    button: 'ログイン',
    email: {
      label: 'メールアドレス',
      placeholder: 'example@xxx.com',
    },
    password: {
      label: 'パスワード',
      placeholder: '••••••',
    },
  },
  signup: {
    title: '新規登録',
    description: '以下の情報を入力し、新規登録を行なってください。',
    button: '新規登録',
    email: {
      label: 'メールアドレス',
      placeholder: 'example@gmail.com',
    },
    username: {
      label: '氏名',
      placeholder: '山田 太郎',
    },
    password: {
      label: 'パスワード',
      placeholder: '••••••',
    },
    confirmPassword: {
      label: 'パスワード(確認用)',
      placeholder: '••••••',
    },
  },
};
