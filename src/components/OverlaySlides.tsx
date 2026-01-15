import { ReactNode, forwardRef } from 'react';

type OverlayProps = {
  children: ReactNode;
  className?: string;
  sticky?: boolean;
  snap?: boolean;
};

export const OverlaySection = forwardRef<HTMLElement, OverlayProps>(
  ({ children, className = '', sticky = false, snap = true }, ref) => {
    return (
      <section ref={ref} className={`overlay-section ${snap ? 'snap-start' : ''} ${className}`}>
        <div className={`${sticky ? 'sticky top-[var(--header-height)]' : ''} mx-auto max-w-7xl px-6 w-full`}>
          {children}
        </div>
      </section>
    );
  }
);
OverlaySection.displayName = 'OverlaySection';
