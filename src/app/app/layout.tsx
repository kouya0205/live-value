import AppFooter from '@/components/App/Top/Footer';
import AppHeader from '@/components/App/Top/Header';
import { Metadata } from 'next';

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
    <div className="min-h-screen">
      <AppHeader />
      <main>{children}</main>
      <AppFooter />
    </div>
  );
}
