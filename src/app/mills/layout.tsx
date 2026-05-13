import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mill & Manufacturing Partnership',
  description:
    'Our factory-direct partnership with Vertilux gives Direct Shades & Blinds a competitive edge — faster lead times, tighter quality control, and competitive pricing on every commercial project.',
  alternates: {
    canonical: '/mills',
  },
  openGraph: {
    title: 'Mill & Manufacturing Partnership | Direct Shades & Blinds Inc',
    description:
      'Our factory-direct partnership with Vertilux gives Direct Shades & Blinds a competitive edge — faster lead times, tighter quality control, and competitive pricing on every commercial project.',
    url: '/mills',
  },
};

export default function MillsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
