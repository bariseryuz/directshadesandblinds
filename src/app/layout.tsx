import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { Header } from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Direct Shades & Blinds',
  description: 'National commercial window coverings — bid-ready.',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen antialiased`}>
        <Header />
        <main>{children}</main>
        <footer className="relative z-10 border-t border-white/10 mt-12 md:mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 md:py-10 text-sm text-white/70">
            <div className="flex flex-wrap gap-6 justify-between items-start">
              <div>
                <div className="font-semibold">Direct Shades & Blinds</div>
                <div>Nationwide commercial window coverings</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-6 mt-6">
              <a href="/markets" className="hover:text-white transition-colors">Markets</a>
              <a href="/contact" className="hover:text-white transition-colors">Contact</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
            
            <div className="mt-6 text-xs">© {new Date().getFullYear()} All rights reserved.</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
