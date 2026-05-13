import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Meet the Direct Shades & Blinds Inc team. Over 25 years of commercial window covering expertise, mill-direct sourcing, and proven nationwide project execution.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Us | Direct Shades & Blinds Inc',
    description:
      'Meet the Direct Shades & Blinds Inc team. Over 25 years of commercial window covering expertise, mill-direct sourcing, and proven nationwide project execution.',
    url: '/about',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
