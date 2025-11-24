export function ContactSection() {
  return (
    <section className="space-y-8" id="contact">
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
          Contact us
        </h2>
        <p className="max-w-2xl text-sm text-gray-600 sm:text-base">
          Get in touch with Afro Addis to discuss exports, imports, furniture projects, or partnership opportunities.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-start">
        <form className="space-y-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-700" htmlFor="home-name">
                Name
              </label>
              <input
                id="home-name"
                className="w-full border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none transition-colors focus:border-gray-500 focus:ring-1 focus:ring-gray-400"
                placeholder="Your full name"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-700" htmlFor="home-email">
                Email
              </label>
              <input
                id="home-email"
                type="email"
                className="w-full border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none transition-colors focus:border-gray-500 focus:ring-1 focus:ring-gray-400"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-700" htmlFor="home-subject">
              Subject
            </label>
            <input
              id="home-subject"
              className="w-full border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none transition-colors focus:border-gray-500 focus:ring-1 focus:ring-gray-400"
              placeholder="How can we help?"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-700" htmlFor="home-message">
              Message
            </label>
            <textarea
              id="home-message"
              rows={4}
              className="w-full border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none transition-colors focus:border-gray-500 focus:ring-1 focus:ring-gray-400"
              placeholder="Share a bit about your needs or project."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
          >
            Send message
          </button>
        </form>

        <div className="space-y-4 text-sm text-gray-700">
          <div>
            <h3 className="text-base font-semibold text-gray-900">Contact details</h3>
            <p className="mt-1 text-gray-600">
              You can also reach Afro Addis using the following contact information.
            </p>
          </div>
          <dl className="space-y-2">
            <div>
              <dt className="text-xs font-medium text-gray-500">Email</dt>
              <dd className="text-sm text-gray-800">info@afroaddis.com</dd>
            </div>
            <div>
              <dt className="text-xs font-medium text-gray-500">Phone</dt>
              <dd className="text-sm text-gray-800">+251 (0) 11 000 0000</dd>
            </div>
            <div>
              <dt className="text-xs font-medium text-gray-500">Location</dt>
              <dd className="text-sm text-gray-800">Addis Ababa, Ethiopia</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
