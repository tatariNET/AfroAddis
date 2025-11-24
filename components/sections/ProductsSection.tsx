export function ProductsSection() {
  return (
    <section className="space-y-8" id="products">
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
          Products
        </h2>
        <p className="max-w-2xl text-sm text-gray-600 sm:text-base">
          From coffee, pulses, and sesame to imported appliances and locally manufactured furniture, Afro Addis
          connects product lines across multiple sectors.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-gray-900">Coffee</h3>
          <p className="mt-2 text-sm text-gray-600">
            Ethiopian coffees processed through natural, washed, honey, and wet-hulled methods for different roasting
            profiles.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-gray-900">Pulses</h3>
          <p className="mt-2 text-sm text-gray-600">
            Chickpeas, lentils, and beans sourced from trusted regions and graded for export.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-gray-900">Sesame</h3>
          <p className="mt-2 text-sm text-gray-600">
            High-quality sesame seeds supplied to international buyers and processors.
          </p>
        </div>
      </div>
    </section>
  );
}
