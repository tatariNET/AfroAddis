export function CollaboratorsSection() {
  return (
    <section className="space-y-8" id="collaborators">
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
          Collaborators
        </h2>
        <p className="max-w-2xl text-sm text-gray-600 sm:text-base">
          Afro Addis works with a network of farmers, cooperatives, logistics providers, and brand partners to
          deliver consistent quality from origin to end customer.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-gray-900">Farmers &amp; cooperatives</h3>
          <p className="mt-2 text-sm text-gray-600">
            Long-term relationships with Ethiopian farmers and cooperatives, built on transparency and fair returns.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-gray-900">Export &amp; logistics partners</h3>
          <p className="mt-2 text-sm text-gray-600">
            Logistics and shipping collaborators who help us deliver on-time and in full to buyers worldwide.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <h3 className="text-base font-semibold text-gray-900">Brand &amp; project partners</h3>
          <p className="mt-2 text-sm text-gray-600">
            Appliance and furniture brands, project developers, and distributors who rely on Afro Addis as a local
            partner.
          </p>
        </div>
      </div>
    </section>
  );
}
