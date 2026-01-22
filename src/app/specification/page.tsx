'use client';

import { useEffect, useRef, useState } from 'react';

const textSections = [
  {
    id: 1,
    content: 'Division 12000 / Window Coverings Specification',
    className: 'text-3xl md:text-7xl font-bold'
  },
  {
    id: 2,
    content: 'Precision-Built Specifications for Commercial Projects',
    subContent: `At Direct Shades & Blinds (DSB), we offer a dedicated Division 12 00 00 – Window Coverings Specification service designed to support architects, designers, developers, and general contractors with clear, buildable, and cost-aligned specs.

Our experienced team works directly with project stakeholders to dial in the right window covering solutions—balancing design intent, performance, compliance, budget, and long-term durability.`,
    className: 'text-2xl md:text-6xl font-bold'
  },
  {
    id: 3,
    content: 'Dedicated Division 12000 Specification Team',
    subContent: `DSB maintains a specialized specification team focused exclusively on commercial window coverings across multifamily, hospitality, healthcare, office, and mixed-use projects.

We assist with:

• Full Division 12 00 00 spec creation
• Review and optimization of existing specifications
• Value-engineering without compromising design intent
• Alignment with project schedules, budgets, and operational needs

Our goal is to eliminate ambiguity, reduce RFIs, and ensure what's specified can be delivered and installed seamlessly.`,
    className: 'text-2xl md:text-6xl font-bold'
  },
  {
    id: 4,
    content: 'Window Covering Solutions We Specify',
    subContent: `We help determine what is best for each space, not a one-size-fits-all solution.

Manual Roller Shades
• Ideal for cost-controlled applications
• Durable hardware and fabric selections
• Privacy, light control, and solar performance options

Motorized Roller Shades
• Hardwired or battery solutions
• Integration with building automation systems
• Performance-driven fabrics for glare, heat gain, and privacy
• Scalable solutions for large or high-rise projects

Drapery & Soft Treatments
• Decorative and performance-driven applications
• Hospitality and residential-inspired environments
• Track systems, stackback requirements, and fabric coordination

Each specification is tailored to room type, orientation, code requirements, and user experience.`,
    className: 'text-2xl md:text-6xl font-bold'
  },
  {
    id: 5,
    content: 'Collaboration With Design Teams',
    subContent: `We work directly with architects, interior designers, and consultants to ensure the window covering specification supports the overall design vision.

Our collaborative services include:
• Design meetings (virtual or in-person)
• Lunch & Learn presentations for firms and project teams
• Material and system education
• Early-stage design support through construction documentation

This approach allows us to align finishes, control methods, and performance criteria with the unique needs of each project—before drawings are finalized.`,
    className: 'text-2xl md:text-6xl font-bold'
  },
  {
    id: 6,
    content: 'Why Partner With DSB for Division 12 Specs',
    subContent: `• National commercial expertise across major U.S. markets
• Mill-direct relationships for speed, quality, and pricing consistency
• Practical, install-ready specifications that reduce change orders
• A partner mindset—from early design through installation

We don't just help you write the spec—we help ensure it works in the real world.`,
    className: 'text-2xl md:text-6xl font-bold'
  },
  {
    id: 7,
    content: 'Ready to Build Your Division 12000 Specification?',
    subContent: `Whether you're developing a new project or refining an existing set, DSB can support your team with expert-driven window covering specifications that streamline execution and protect design intent.

Contact us to schedule a design meeting or Lunch & Learn.`,
    className: 'text-2xl md:text-6xl font-bold'
  }
];

interface SectionProps {
  section: typeof textSections[0];
}

function ScrollSection({ section }: SectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const element = sectionRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;

      // Calculate distance from viewport center
      const distance = Math.abs(elementCenter - viewportCenter);
      const maxDistance = windowHeight;

      // When element is at center, scale = 1, when far away, scale = 0.5
      const normalizedDistance = Math.min(distance / maxDistance, 1);
      const newScale = 0.5 + (1 - normalizedDistance) * 0.5;
      setScale(newScale);

      // Fade in when entering viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        const visibilityRatio = Math.min(
          (windowHeight - rect.top) / windowHeight,
          rect.bottom / windowHeight
        );
        setOpacity(Math.min(visibilityRatio * 2, 1));
      } else {
        setOpacity(0);
      }

      // Fade out when scrolled past
      if (elementCenter < viewportCenter * 0.3) {
        const fadeOutRatio = elementCenter / (viewportCenter * 0.3);
        setOpacity(fadeOutRatio);
      }
    };

    handleScroll(); // Initial call
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-8 transition-all duration-300"
      style={{
        transform: `scale(${scale})`,
        opacity: opacity,
      }}
    >
      <div className="max-w-4xl text-center text-white">
        <h2 className={`${section.className} mb-8 leading-tight`}>
          {section.content}
        </h2>
        {section.subContent && (
          <p className="text-base md:text-2xl leading-relaxed whitespace-pre-line">
            {section.subContent}
          </p>
        )}
      </div>
    </div>
  );
}

export default function SpecificationPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background image - fixed positioning with explicit height */}
      <div 
        className="fixed inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/new-tab.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#000',
          width: '100vw',
          height: '100vh',
          minHeight: '100vh',
          minWidth: '100vw',
          transform: isMobile ? 'rotate(90deg)' : 'none',
          zIndex: 0,
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="fixed inset-0 bg-black/40" style={{ 
        zIndex: 1,
        width: '100vw',
        height: '100vh',
      }} />

      {/* Content */}
      <div className="relative w-full" style={{ zIndex: 2 }}>
        {textSections.map((section) => (
          <ScrollSection key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
}
