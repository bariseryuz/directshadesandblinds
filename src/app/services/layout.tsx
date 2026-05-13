import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Window Covering Services',
  description:
    'Turnkey commercial window covering solutions — from bid and preconstruction support through fabrication and installation. Serving multifamily, hospitality, healthcare, and office projects nationwide.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Commercial Window Covering Services | Direct Shades & Blinds Inc',
    description:
      'Turnkey commercial window covering solutions — from bid and preconstruction support through fabrication and installation. Serving multifamily, hospitality, healthcare, and office projects nationwide.',
    url: '/services',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
