const Page = () => {
  return (
    <div className="space-y-16 pb-16">
      <section className="relative overflow-hidden bg-[#0f172a] text-white shadow-2xl shadow-emerald-900/20">
        <div className="absolute inset-0 opacity-70">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(236,187,82,0.25),transparent_50%),radial-gradient(circle_at_bottom,rgba(16,185,129,0.2),transparent_50%)]" />
        </div>
        <div className="relative px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded border border-white/20 bg-red-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em]">
              AfroAddis · Ethiopia
            </div>
            <div className="space-y-3">
              <h1 className="text-balance text-3xl font-serif text-gray-100 sm:text-4xl lg:text-4xl">
                PACESETTER IN SHAPING THE FUTURE
              </h1>
              <p className="max-w-2xl text-base text-gray-100 sm:text-lg">
                AFROADDIS (KYT Trading PLC) is a multi-sector enterprise driving
                economic transformation through advanced trading, manufacturing,
                import & export, real estate, and research connecting Ethiopian
                excellence with global standards.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "AEO Accreditation · In Progress",
                "Customs Level II",
                "Best Taxpayer Award",
                "Exclusive KRYSTER & BERKLAYS Agent",
              ].map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-medium text-slate-100"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["25+", "International partners"],
          ["8", "Global trade routes"],
          ["10+", "Years of operations"],
          ["4", "Integrated divisions"],
        ].map(([value, label]) => (
          <div
            key={label}
            className="border border-red-100 bg-white p-6 text-center shadow-sm"
          >
            <div className="text-3xl font-semibold text-gray-900">{value}</div>
            <div className="mt-2 text-xs uppercase tracking-wide text-red-700">
              {label}
            </div>
          </div>
        ))}
      </section>

      <section className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)]">
        <div className="border border-red-100 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">Core values</h2>
          <p className="mt-3 text-sm text-gray-600">
            Guided by bold leadership and rigorous governance, our teams focus
            on sustainable value creation across Ethiopia and global markets.
          </p>
          <ul className="mt-6 grid gap-3 text-sm text-gray-700 sm:grid-cols-2">
            {["Trust", "Integrity", "Professionalism", "Social responsibility"].map(
              (item) => (
                <li
                  key={item}
                  className="border border-red-100 bg-red-50/50 px-4 py-3"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        <div className="border border-red-100 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">Core divisions</h2>
          <ul className="mt-6 space-y-3 text-sm text-gray-700">
            {[
              "Trading",
              "Manufacturing",
              "Import & export",
              "Real estate",
              "Business & research",
            ].map((item) => (
              <li
                key={item}
                className="border-b border-red-100 pb-3 last:border-none"
              >
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border border-red-100 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900">
          Accreditations & partners
        </h2>
        <p className="mt-3 text-sm text-gray-700 leading-relaxed">
          AEO Level II (In Progress) · Best Taxpayer Award (Federal Level, Silver
          – 2023 & 2024) · Exclusive Agent: KRYSTER & BERKLAYS (ARKEMIX – France)
        </p>
      </section>

      <section className="border border-red-100 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-700">
              Contact
            </p>
            <h3 className="mt-2 text-lg font-semibold text-gray-900">
              Addis Ababa, Ethiopia
            </h3>
          </div>
          <a
            href="https://afroaddis.vercel.app/"
            target="_blank"
            rel="noreferrer noopener"
            className="border border-red-200 bg-red-50 px-4 py-2 text-xs font-semibold uppercase text-red-700 hover:text-red-800"
          >
            www.afroaddis.com
          </a>
        </div>
        <div className="mt-6 grid gap-4 text-sm text-gray-700 sm:grid-cols-2">
          <div className="border border-red-100 bg-red-50/50 p-4">
            Head Office: Lemi Kura Sub City, Goro AFROADDIS Building
          </div>
          <div className="border border-red-100 bg-red-50/50 p-4">
            Showroom: Arada Sub City, Piyassa Eliana Mall
          </div>
          <div className="border border-red-100 bg-red-50/50 p-4">
            Tel: +251 978 787 878 · +251 970 777 879
          </div>
          <div className="border border-red-100 bg-red-50/50 p-4">
            Email: info@afroaddis.com
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
