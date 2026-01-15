export function CTAButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href="/contact"
        className="px-6 py-2.5 rounded-full bg-red-700 hover:bg-red-600 text-white font-semibold shadow-soft"
      >
        Request a Bid
      </a>
      <a
        href="/projects"
        className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium"
      >
        View Projects
      </a>
    </div>
  );
}
