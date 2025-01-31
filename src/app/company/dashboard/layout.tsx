import CompanyHeader from '@/components/Company/Top/CompanyHeader';
import AppFooter from '@/components/User/MyPage/Top/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'マイページ',
  description: 'LiveValueのマイページ、ここではユーザー情報の確認や設定ができます。',
  metadataBase: new URL('https://livevalue.vercel.app/user/dashboard'),
  openGraph: {
    title: 'マイページ',
    description: 'LiveValueのマイページ、ここではユーザー情報の確認や設定ができます。',
    url: 'https://livevalue.vecerl.app/user/dashboard',
    images: [
      {
        url: 'https://livevalue.vecerl.app/default-og-image.jpg',
        width: 800,
        height: 600,
        alt: 'マイページ',
      },
    ],
    siteName: 'マイページ',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CompanyHeader />
      <main className="min-h-screen pt-16">{children}</main>
      <AppFooter />
    </>
  );
}
