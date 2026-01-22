'use client';

import { useEffect, useRef, useState } from 'react';

const textSections = [
  {
    id: 1,
    content: 'Division 12000 / Window Coverings Specification',
    className: 'text-2xl md:text-4xl font-bold'
  },
  {
    id: 2,
    content: 'Precision-Built Specifications for Commercial Projects',
    subContent: `At Direct Shades & Blinds (DSB), we offer a dedicated Division 12 00 00 – Window Coverings Specification service designed to support architects, designers, developers, and general contractors with clear, buildable, and cost-aligned specs.

Our experienced team works directly with project stakeholders to dial in the right window covering solutions—balancing design intent, performance, compliance, budget, and long-term durability.`,
    className: 'text-xl md:text-3xl font-bold'
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
    className: 'text-xl md:text-3xl font-bold'
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
    className: 'text-xl md:text-3xl font-bold'
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
    className: 'text-xl md:text-3xl font-bold'
  },
  {
    id: 6,
    content: 'Why Partner With DSB for Division 12 Specs',
    subContent: `• National commercial expertise across major U.S. markets
• Mill-direct relationships for speed, quality, and pricing consistency
• Practical, install-ready specifications that reduce change orders
• A partner mindset—from early design through installation

We don't just help you write the spec—we help ensure it works in the real world.`,
    className: 'text-xl md:text-3xl font-bold'
  },
  {
    id: 7,
    content: 'Ready to Build Your Division 12000 Specification?',
    subContent: `Whether you're developing a new project or refining an existing set, DSB can support your team with expert-driven window covering specifications that streamline execution and protect design intent.

Contact us to schedule a design meeting or Lunch & Learn.`,
    className: 'text-xl md:text-3xl font-bold'
  }
];

interface SectionProps {
  section: typeof textSections[0];
}

function ScrollSection({ section }: SectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-8 snap-start snap-always"
      style={{
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1)' : 'scale(0.8)',
      }}
    >
      <div className="max-w-4xl text-center text-white bg-white/[0.02] backdrop-blur-[2px] rounded-2xl p-8 border border-white/5">
        <h2 className={`${section.className} mb-8 leading-tight`}>
          {section.content}
        </h2>
        {section.subContent && (
          <p className="text-sm md:text-xl leading-relaxed whitespace-pre-line">
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
      <div className="relative w-full snap-y snap-mandatory h-screen overflow-y-scroll" style={{ zIndex: 2 }}>
        {textSections.map((section) => (
          <ScrollSection key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
}
