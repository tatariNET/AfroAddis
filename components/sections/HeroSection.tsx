export function HeroSection() {
  return (
    <section className="grid items-center gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]" id="top">
      <div className="space-y-6">
        <p className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">
          Trust · Integrity · Professionalism
        </p>
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Ethiopian agro-commodities &amp; quality imports, trusted worldwide.
        </h1>
        <p className="max-w-xl text-sm text-gray-600 sm:text-base">
          Afro Addis is a diversified trading and manufacturing group, specializing in premium coffee, pulses,
          oilseeds, selected household appliances, and high-quality furniture.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/#contact"
            className="inline-flex items-center justify-center bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800"
          >
            Work with us
          </a>
          <a
            href="/#about"
            className="inline-flex items-center justify-center border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-800 transition-colors hover:border-gray-400 hover:bg-gray-50"
          >
            Learn more about us
          </a>
        </div>
        <dl className="mt-4 grid gap-6 text-sm text-gray-700 sm:grid-cols-3">
          <div>
            <dt className="font-semibold text-gray-900">Coffee &amp; Pulses</dt>
            <dd className="text-gray-600">Sourced from trusted Ethiopian farmers and cooperatives.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-900">Global Export</dt>
            <dd className="text-gray-600">Reliable partners for international buyers and roasters.</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-900">Integrated Group</dt>
            <dd className="text-gray-600">From agro-commodities to appliances and furniture.</dd>
          </div>
        </dl>
      </div>

      <div className="grid gap-4 rounded-3xl border border-gray-100 bg-gradient-to-br from-emerald-50/70 via-white to-amber-50/80 p-5 shadow-sm sm:p-6">
        <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
          <div className="rounded-2xl bg-white/70 p-4 shadow-sm">
            <p className="text-[11px] font-medium uppercase tracking-wide text-emerald-700">Pulses</p>
            <p className="mt-1 text-gray-800">Chickpeas · Lentils · Beans</p>
            <p className="mt-2 text-[11px] text-gray-500">High-quality Ethiopian pulses for global markets.</p>
          </div>
          <div className="rounded-2xl bg-white/70 p-4 shadow-sm">
            <p className="text-[11px] font-medium uppercase tracking-wide text-amber-700">Coffee</p>
            <p className="mt-1 text-gray-800">Natural · Washed · Honey</p>
            <p className="mt-2 text-[11px] text-gray-500">Carefully processed for consistent cup quality.</p>
          </div>
          <div className="rounded-2xl bg-white/70 p-4 shadow-sm">
            <p className="text-[11px] font-medium uppercase tracking-wide text-sky-700">Export</p>
            <p className="mt-1 text-gray-800">Sesame · Coffee · Pulses</p>
            <p className="mt-2 text-[11px] text-gray-500">Efficient logistics and on-time delivery.</p>
          </div>
          <div className="rounded-2xl bg-white/70 p-4 shadow-sm">
            <p className="text-[11px] font-medium uppercase tracking-wide text-slate-700">Import &amp; Furniture</p>
            <p className="mt-1 text-gray-800">Appliances · Furniture</p>
            <p className="mt-2 text-[11px] text-gray-500">Trusted brands and durable manufacturing.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
