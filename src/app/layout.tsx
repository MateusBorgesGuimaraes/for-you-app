import type { Metadata } from 'next';
import { Merriweather } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import { Toaster } from '@/components/ui/toaster';

const merriweather = Merriweather({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-merriweather',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'For You',
  description: 'Webmagazine com foco na verdade',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${merriweather.variable} font-merriweather`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
