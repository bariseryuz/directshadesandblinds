import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request a Bid',
  description:
    'Request a competitive bid for your commercial window covering project. Share project details and plans — Direct Shades & Blinds will respond promptly.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Request a Bid | Direct Shades & Blinds Inc',
    description:
      'Request a competitive bid for your commercial window covering project. Share project details and plans — Direct Shades & Blinds will respond promptly.',
    url: '/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
