export default function TextPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-3xl font-semibold">Site Outline & Notes</h1>
      <p className="mt-4 text-white/80">This page is for text content. Media sections remain empty with placeholders until assets are provided.</p>
      <div className="mt-8 space-y-6 text-white/80">
        <section>
          <h2 className="text-xl font-semibold">Objective</h2>
          <p>Refresh the site with a modern, clean, commercial aesthetic emphasizing projects, mill partnerships, and credibility.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">Pages</h2>
          <ul className="list-disc pl-6">
            <li>Home (hero media, overlay slides, CTAs)</li>
            <li>About</li>
            <li>Services</li>
            <li>Projects (gallery + detail pages)</li>
            <li>Mill & Manufacturing Partnerships</li>
            <li>Markets</li>
            <li>Contact / Request a Bid</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold">Home Behavior</h2>
          <ul className="list-disc pl-6">
            <li>Strong hero image or short video</li>
            <li>Overlay slides scroll over fixed media</li>
            <li>Primary CTA: Request a Bid; Secondary CTA: View Projects</li>
            <li>Certificates marquee sliding left to right infinitely</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
