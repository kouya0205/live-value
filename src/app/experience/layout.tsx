import AppFooter from '@/components/MyPage/Top/Footer';
import AppHeader from '@/components/MyPage/Top/Header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '経験・スキル',
  description: 'LiveValueの経験・スキルページ、ここではあなたの経験やスキルを入力できます。',
  metadataBase: new URL('https://livevalue.vercel.app/experience'),
  openGraph: {
    title: '経験・スキル',
    description: 'LiveValueの経験・スキルページ、ここではあなたの経験やスキルを入力できます。',
    url: 'https://livevalue.vecerl.app/experience',
    images: [
      {
        url: 'https://livevalue.vecerl.app/default-og-image.jpg',
        width: 800,
        height: 600,
        alt: '経験・スキル',
      },
    ],
    siteName: '経験・スキル',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AppHeader />
      <main className="pt-16 min-h-screen">{children}</main>
      <AppFooter />
    </>
  );
}
