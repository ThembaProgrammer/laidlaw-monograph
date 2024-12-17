import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './component/header';
import { Sidebar } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Interactive Book Website',
  description: 'A modern book-like website with interactive features',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-stone-50">
          <Header />
          <div className="flex">
            <Sidebar />
            <main className="flex-1 p-8">
              <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 my-8">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}