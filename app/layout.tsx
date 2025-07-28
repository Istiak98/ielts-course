import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Store from '@/components/providers/Store';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '10 Minute School - Online Learning Platform',
  description: 'Learn with the best instructors and courses',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Store>{children}</Store>
      </body>
    </html>
  );
}
