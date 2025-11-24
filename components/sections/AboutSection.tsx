export function AboutSection() {
  return (
    <section className="grid gap-10 md:grid-cols-2" id="about">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
          About Afro Addis
        </h2>
        <p className="text-sm text-gray-600 sm:text-base">
          Our operations are fully driven by our value system built on Trust, Integrity, and Professionalism. In every
          relationship with farmers, buyers, and partners, we focus on consistent quality, reliable delivery, and
          competitive pricing.
        </p>
        <p className="text-sm text-gray-600 sm:text-base">
          We process coffee through natural, washed, honey, and wet-hulled methods, and carefully handle pulses and
          oilseeds to meet demanding export standards.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-900">Coffee Processing</h3>
          <ul className="mt-2 space-y-1 text-xs text-gray-600">
            <li>Natural processed</li>
            <li>Washed process</li>
            <li>Honey processed</li>
            <li>Wet-hulled</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-900">Why partners choose us</h3>
          <ul className="mt-2 space-y-1 text-xs text-gray-600">
            <li>Transparent, long-term partnerships</li>
            <li>Dedicated quality control at every stage</li>
            <li>On-time, reliable logistics</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
