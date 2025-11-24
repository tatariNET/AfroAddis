export function ServicesSection() {
  return (
    <section className="space-y-10" id="services">
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
          Services
        </h2>
        <p className="max-w-2xl text-sm text-gray-600 sm:text-base">
          Afro Addis operates across export, import, and furniture manufacturing, giving partners a reliable, integrated
          set of services from sourcing to delivery.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Export</h3>
            <p className="mt-2 text-xs text-gray-600">
              Sesame, coffee, and pulses for global buyers, with grading, cleaning, and quality checks at each step.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Import</h3>
            <p className="mt-2 text-xs text-gray-600">
              Selected household appliances from trusted brands, supported by local after-sales service.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Furniture manufacturing</h3>
            <p className="mt-2 text-xs text-gray-600">
              Durable furniture for homes, offices, and hospitality, designed for everyday use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
