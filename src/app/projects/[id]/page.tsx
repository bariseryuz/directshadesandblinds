interface ProjectParams { params: { id: string } }

export default function ProjectDetailPage({ params }: ProjectParams) {
  const { id } = params;
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <h1 className="text-3xl font-semibold">Project {id}</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-10">
        <div>
          <div className="aspect-video rounded-lg bg-white/10 flex items-center justify-center text-sm text-white/70">Media Placeholder</div>
          <div className="mt-4 text-white/60 text-sm">Photos</div>
        </div>
        <div>
          <div className="space-y-2 text-white/80">
            <div><span className="text-white/60">Location:</span> City, ST</div>
            <div><span className="text-white/60">Developer & GC:</span> TBD</div>
            <div><span className="text-white/60">Scope of Work:</span> Window coverings for multifamily/hospitality/healthcare/office</div>
          </div>
        </div>
      </div>
    </div>
  );
}
