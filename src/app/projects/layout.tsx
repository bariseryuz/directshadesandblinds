import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore commercial window covering projects by Direct Shades & Blinds Inc — multifamily, mixed-use, hospitality, and healthcare developments across the United States.',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Projects | Direct Shades & Blinds Inc',
    description:
      'Explore commercial window covering projects by Direct Shades & Blinds Inc — multifamily, mixed-use, hospitality, and healthcare developments across the United States.',
    url: '/projects',
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
