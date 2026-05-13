import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Markets We Serve',
  description:
    'Direct Shades & Blinds serves multifamily, hospitality, healthcare, and office markets across major U.S. regions — with consistent quality and nationwide coverage.',
  alternates: {
    canonical: '/markets',
  },
  openGraph: {
    title: 'Markets We Serve | Direct Shades & Blinds Inc',
    description:
      'Direct Shades & Blinds serves multifamily, hospitality, healthcare, and office markets across major U.S. regions — with consistent quality and nationwide coverage.',
    url: '/markets',
  },
};

export default function MarketsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
