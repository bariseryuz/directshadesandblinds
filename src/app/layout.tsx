import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { Header } from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

const BASE_URL = 'https://www.directshadesandblinds.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Direct Shades & Blinds Inc — National Commercial Window Coverings',
    template: '%s | Direct Shades & Blinds Inc',
  },
  description:
    'Mill-direct commercial window covering solutions for multifamily, hospitality, healthcare, and office projects nationwide. Bid-ready with 25+ years of experience.',
  keywords: [
    'commercial window coverings',
    'commercial blinds',
    'commercial shades',
    'motorized shades',
    'roller shades',
    'multifamily window coverings',
    'window covering contractor',
    'Division 12 specification',
    'Direct Shades and Blinds',
  ],
  authors: [{ name: 'Direct Shades & Blinds Inc', url: BASE_URL }],
  creator: 'Direct Shades & Blinds Inc',
  publisher: 'Direct Shades & Blinds Inc',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Direct Shades & Blinds Inc',
    title: 'Direct Shades & Blinds Inc — National Commercial Window Coverings',
    description:
      'Mill-direct commercial window covering solutions for multifamily, hospitality, healthcare, and office projects nationwide. Bid-ready with 25+ years of experience.',
    images: [
      {
        url: '/project1.png',
        width: 1200,
        height: 630,
        alt: 'Direct Shades & Blinds Inc — National Commercial Window Coverings',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Direct Shades & Blinds Inc — National Commercial Window Coverings',
    description:
      'Mill-direct commercial window covering solutions for multifamily, hospitality, healthcare, and office projects nationwide.',
    images: ['/project1.png'],
  },
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Direct Shades & Blinds Inc',
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description:
    'Mill-direct commercial window covering solutions for multifamily, hospitality, healthcare, and office projects nationwide.',
  telephone: '',
  email: 'estimating@directshadesandblinds.com',
  areaServed: 'United States',
  sameAs: [
    'https://www.linkedin.com/company/direct-shades-blinds/',
    'https://www.instagram.com/directshadesandblinds/',
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'License', name: 'Arizona ROC 331348' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'License', name: 'California CSLB #972586' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'License', name: 'Oregon CCB #221928' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'License', name: 'Washington DIRECSB819OK' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} min-h-screen antialiased`}>
        <Header />
        <main>{children}</main>
        <footer className="relative z-10 border-t border-white/10 mt-12 md:mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 md:py-10 text-sm text-white/70">
            <div className="flex flex-wrap gap-6 justify-between items-start">
              <div>
                <div className="font-semibold">Direct Shades & Blinds Inc</div>
                <div>Nationwide commercial window coverings</div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-6 mt-6">
              <a href="/markets" className="hover:text-white transition-colors">Markets</a>
              <a href="/contact" className="hover:text-white transition-colors">Contact</a>
              <a href="https://www.linkedin.com/company/direct-shades-blinds/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="https://www.instagram.com/directshadesandblinds/?igsh=djhyY3k1Z2J0aWJq&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
            </div>
            
            <div className="mt-6 text-xs">© {new Date().getFullYear()} All rights reserved.</div>
            
            <div className="mt-4 text-xs text-white/50">
              ARIZONA - ROC 331348 | CALIFORNIA - CSLB #972586 | OREGON - CCB #221928 | WASHINGTON - DIRECSB819OK
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
