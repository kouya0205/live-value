import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Top/Header';
import Footer from '@/components/Top/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: 'Team: curry' + ' | %s',
    default: 'Hack GALA',
  },
  description: 'Hack GALA 2024のチーム「curry」のwebアプリケーションです。',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main className="min-h-screen bg-gray-300">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
