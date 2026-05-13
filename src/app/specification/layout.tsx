import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Division 12000 Window Coverings Specification',
  description:
    'Expert Division 12 00 00 window covering specification services for architects, designers, and general contractors. DSB supports commercial projects from early design through construction documentation.',
  alternates: {
    canonical: '/specification',
  },
  openGraph: {
    title: 'Division 12000 Window Coverings Specification | Direct Shades & Blinds Inc',
    description:
      'Expert Division 12 00 00 window covering specification services for architects, designers, and general contractors. DSB supports commercial projects from early design through construction documentation.',
    url: '/specification',
  },
};

export default function SpecificationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
