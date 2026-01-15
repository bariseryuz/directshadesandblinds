"use client";

export function ExpandableFooterNav() {
  const mainLinks = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/projects", label: "Projects", icon: "📁" },
    { href: "/about", label: "About", icon: "ℹ️" },
    { href: "/services", label: "Services", icon: "⚙️" },
  ];

  return (
    <>
      <nav className="expandable-nav">
        <ul>
          <li style={{ "--index": 0, "--count": 4 } as React.CSSProperties}>
            <a href="#" aria-label="Menu">
              <span>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                </svg>
                Menu
              </span>
            </a>
          </li>
          {mainLinks.map((link, index) => (
            <li 
              key={link.href} 
              style={{ "--index": index + 1, "--count": 4 } as React.CSSProperties}
            >
              <a href={link.href}>
                <span>
                  <span style={{ fontSize: '16px' }}>{link.icon}</span>
                  {link.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <style jsx>{`
        .expandable-nav {
          position: relative;
          display: inline-block;
        }

        ul {
          padding: 0;
          display: inline-grid;
          grid-auto-flow: column;
          list-style-type: none;
          grid-template-columns: auto repeat(3, calc((var(--active, 0) * 130px) + 10px));
          transition: grid-template-columns 0.35s cubic-bezier(0.5, 1.25, 0.75, 1.25);
          margin: 0;
        }

        li {
          display: grid;
          justify-content: end;
          z-index: calc(var(--count) - var(--index));
        }

        a {
          background: hsl(0 0% 60% / 0.18);
          display: inline-block;
          padding: 0.5rem 1rem;
          border-radius: 0.75rem;
          margin: 0;
          color: var(--gray-0, #fff);
          font-size: 0.875rem;
          font-weight: 500;
          backdrop-filter: blur(40px);
          transition: color 0.2s, background 0.2s;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        a:visited {
          color: var(--gray-0, #fff);
        }

        svg {
          height: 16px;
          aspect-ratio: 1;
          fill: currentColor;
        }

        span {
          display: grid;
          align-items: center;
          grid-auto-flow: column;
          grid-template-columns: 16px 1fr;
          gap: 0.5rem;
          white-space: nowrap;
        }

        li:is(
          :nth-of-type(2),
          :nth-of-type(3),
          :nth-of-type(4)
        ) span {
          opacity: var(--active, 0);
          transition: opacity 0.2s;
        }

        li:is(
          :nth-of-type(2),
          :nth-of-type(3),
          :nth-of-type(4)
        ) a:is(:hover, :focus) {
          background: var(--gray-0, #fff);
          color: var(--gray-12, #000);
        }

        a:focus-visible {
          outline-color: transparent;
          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
        }

        ul:is(:focus-within, :hover) {
          --active: 1;
        }

        li:first-child a:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </>
  );
}
