export function WorkingWithSection() {
  return (
    <section className="space-y-8" id="work-with-us">
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
          Working with Afro Addis
        </h2>
        <p className="max-w-2xl text-sm text-gray-600 sm:text-base">
          We build long-term partnerships with exporters, importers, roasters, and distributors who share our
          commitment to quality and transparency.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-gray-900">For coffee and agro-commodity buyers</h3>
          <ul className="mt-3 space-y-1 text-sm text-gray-600">
            <li>Work directly with an Ethiopian group close to origin.</li>
            <li>Access multiple origins and processing profiles.</li>
            <li>Transparent communication throughout the shipment.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-gray-900">For appliance and furniture partners</h3>
          <ul className="mt-3 space-y-1 text-sm text-gray-600">
            <li>Develop distribution for selected appliance brands.</li>
            <li>Collaborate on furniture concepts for projects and retail.</li>
            <li>Leverage our local market knowledge in Ethiopia.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
