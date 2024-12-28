import AppFooter from '@/components/MyPage/Top/Footer';
import AppHeader from '@/components/MyPage/Top/Header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'アップロード',
  description: 'LiveValueのアップロードページ、ここでは健康診断データのアップロードができます。',
  metadataBase: new URL('https://livevalue.vercel.app/upload'),
  openGraph: {
    title: 'アップロード',
    description: 'LiveValueのアップロードページ、ここでは健康診断データのアップロードができます。',
    url: 'https://livevalue.vecerl.app/upload',
    images: [
      {
        url: 'https://livevalue.vecerl.app/default-og-image.jpg',
        width: 800,
        height: 600,
        alt: 'アップロード',
      },
    ],
    siteName: 'アップロード',
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
      <main className="pt-16">{children}</main>
      <AppFooter />
    </>
  );
}
