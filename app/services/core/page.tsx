"use client";

import { useEffect, useState } from "react";

const sections = [
  {
    id: "trading",
    title: "Trading",
    lead:
      "The Trading Division is the backbone of AfroAddis, delivering essential household goods through a customer-centric, credit-enabled retail and wholesale model that supports local manufacturing and global partnerships.",
    points: [
      "Credit-based retail programs enabling government and private-sector employees (ages 24–40) to access appliances and furniture through flexible 10-month payment plans.",
      "Product portfolio spanning locally manufactured furniture—sofa sets, beds, wardrobes, and shelving—alongside imported household appliances including KRYSTER and BURKELYS refrigerators, stoves, and washing machines.",
      "Showroom-led distribution through high-visibility locations in Megenagna and the AfroAddis Building, serving walk-in customers and institutional buyers.",
    ],
    bullets: [
      { label: "Retail network", value: "1,200+" },
      { label: "Credit customers", value: "18k+" },
      { label: "Service hubs", value: "5" },
    ],
    overlay: "from-black/70 via-black/30 to-transparent",
    // previous image:
    // "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80",
    images: [
      "/trading/fridge1.jpg",
      "/trading/fridge2.jpg",
      "/trading/fridge3 black.jpg",
      "/trading/kitchen1.jpg",
      "/trading/kitchen2.jpg",
      "/trading/kitchen3.jpg",
      "/trading/kitchen4.jpg",
      "/trading/lowndary1.jpg",
      "/trading/lunch table1.jpg",
      "/trading/meal table 4 coffee.jpg",
      "/trading/meal table2.jpg",
      "/trading/meal table3.jpg",
      "/trading/oven1.jpg",
      "/trading/oven2.jpg",
      "/trading/smart screen 3 samsung.jpg",
      "/trading/smart screen with netflix.jpg",
      "/trading/smart screen1.jpg",
      "/trading/sofa1.jpg",
    ],
    details: [
      "Sales & marketing execution powered by trained sales teams and digital marketing tools to deliver personalized, informed customer journeys.",
    ],
  },
  {
    id: "import",
    title: "Import",
    lead:
      "AfroAddis’s Import Division expands the company’s product portfolio by bringing globally sourced, high-quality goods to the Ethiopian market through a disciplined, compliance-driven import model.",
    points: [
      "Global sourcing strategy focused on trusted international suppliers to meet rising domestic demand while maintaining quality, reliability, and cost efficiency.",
      "Product categories including household appliances from international brands such as ARKEMIX (France), along with hardware and finishing materials that support outsourced woodwork and interior solutions.",
      "End-to-end operational oversight managed by the Business, Marketing, and Development Manager to ensure adherence to safety standards, import regulations, and local distribution requirements.",
    ],
    bullets: [
      { label: "Brands", value: "25+" },
      { label: "Warehouses", value: "4" },
      { label: "Retailers served", value: "1,200+" },
    ],
    overlay: "from-slate-900/80 via-slate-800/60 to-slate-600/40",
    // previous image:
    // "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
    images: [
      "/import/import1.jpg",
      "/import/import2.jpg",
      "/import/import3.jpg",
      "/import/import4.jpg",
    ],
    details: [
      "Customer-first access through flexible credit and cash payment options, enabling customers to enjoy global-quality products without financial strain.",
      "Strategic impact strengthening AfroAddis’s trading capabilities, competitiveness, and customer choice across both retail and institutional markets.",
    ],
  },
  {
    id: "export",
    title: "Export ",
    lead:
      "AfroAddis’s Export Division advances Ethiopia’s agricultural excellence in global markets while reinforcing the company’s commitment to fair trade, rural empowerment, and sustainable economic growth.",
    points: [
      "ECX-backed market access through registered membership with the Ethiopian Commodity Exchange (ECX), enabling transparent, regulated, and competitive export trading.",
      "Commodity focus on high-value agricultural products including coffee, soya beans, sesame, pulses, and green mung beans.",
      "Ethical sourcing model built on direct engagement with local farmers and cooperatives to ensure fair pricing, consistent quality, and support for rural livelihoods.",
    ],
    bullets: [
      { label: "Origins", value: "8" },
      { label: "Processing sites", value: "6" },
      { label: "Global buyers", value: "40+" },
    ],
    overlay: "from-black/80 via-black/40 to-amber-900/30",
    // previous image:
    // "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80",
    images: [
      "/export/cerial fresh1.jpg",
      "/export/cerial fresh2.jpg",
      "/export/cerial fresh3.jpg",
      "/export/cerials1.jpg",
      "/export/cerials2.jpg",
      "/export/coffee1.jpg",
      "/export/coffee2.jpg",
      "/export/coffee3.jpg",
      "/export/sunflower1.jpg",
    ],
    details: [
      "Global market participation through international tenders and transparent pricing structures that enhance Ethiopia’s visibility and competitiveness worldwide.",
      "Reinvestment strategy channeling export earnings into domestic growth initiatives such as the Credit-House system, local job creation, and operational scaling and innovation.",
      "Strategic impact strengthening Ethiopia’s trade balance, upgrading agricultural value chains, and showcasing the nation’s rich farming heritage to international buyers.",
    ],
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    lead:
      "AfroAddis operates an efficient, community-driven manufacturing model for woodwork production, working with skilled Ethiopian artisans and regional manufacturing workshops to deliver high-quality household furniture while supporting local craftsmanship and economic development.",
    points: [
      "Manufacturing network established through long-term collaboration with furniture manufacturing facilities across Ethiopia, producing sofa sets, beds, cupboards, kitchen cabinets, dining tables, dressing tables, and other household wood products.",
      "Design-led manufacturing approach guided by AfroAddis’s proprietary designs and technical specifications, reflecting the company’s experience transitioning from small-scale in-house manufacturing that achieved star-level hotel furnishing standards.",
      "Quality and safety management ensured through coordinated efforts of a dedicated Product Designer and a Quality & Safety Manager, maintaining strict compliance with material, durability, and safety requirements.",
    ],
    bullets: [
      { label: "Factories", value: "2" },
      { label: "Sqm capacity", value: "12k+" },
      { label: "Projects/year", value: "150+" },
    ],
    overlay: "from-amber-900/80 via-amber-700/50 to-amber-400/30",
    // previous image:
    // "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
    images: [
      "/manufacturing/manu1.jpg",
      "/manufacturing/manu2.jpg",
      "/manufacturing/manu3.jpg",
      "/manufacturing/manu4.jpg",
      "/manufacturing/wood1.jpg",
      "/manufacturing/wood2.jpg",
      "/manufacturing/wood3.jpg",
      "/manufacturing/wood4.jpg",
      "/manufacturing/wood5.jpg",
    ],
    details: [
      "Import substitution focus delivering locally manufactured furniture that competes with imported alternatives, contributing to national objectives of reducing dependence on foreign products.",
      "Warranty-backed reliability with a one-year warranty on all products, demonstrating confidence in the durability and performance of AfroAddis-manufactured furniture.",
    ],
  },
];

type CoreSection = (typeof sections)[number];

function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm">
      <span className="text-gray-900">{value}</span> {label}
    </div>
  );
}

function CoreServiceSection({ section }: { section: CoreSection }) {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setImageIndex((i) => i + 1);
    }, 4000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      id={section.id}
      className="overflow-hidden rounded-2xl border border-gray-100 bg-white/95 shadow-lg shadow-amber-900/5 min-h-[420px]"
    >
      <div className="grid gap-0 lg:grid-cols-2 items-stretch">
        <div className="p-6 sm:p-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-amber-700">
                Core service
              </p>
              <h2 className="mt-2 text-2xl font-bold text-gray-900">
                {section.title}
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {section.bullets.map((b) => (
                <StatPill
                  key={`${section.id}-${b.label}`}
                  label={b.label}
                  value={b.value}
                />
              ))}
            </div>
          </div>

          <p className="text-base text-gray-700">{section.lead}</p>

          <ul className="space-y-2 text-sm text-gray-700">
            {section.points.map((p, i) => (
              <li key={`${section.id}-pt-${i}`} className="flex gap-2">
                <span
                  className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-700"
                  aria-hidden="true"
                />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 space-y-1 text-sm text-gray-700">
            {section.details.map((d, i) => (
              <p key={`${section.id}-detail-${i}`}>{d}</p>
            ))}
          </div>
        </div>

        <div className="relative h-full min-h-[280px] bg-gray-50">
          <div
            className={`absolute inset-0 bg-linear-to-br ${
              section.overlay ?? "from-black/30 via-transparent to-amber-900/10"
            }`}
            aria-hidden="true"
          />
          {section.images.map((src, i) => (
            <div
              key={`${section.id}-img-${i}`}
              className={`absolute inset-0 transition-opacity duration-700 ${
                i === imageIndex % section.images.length
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <img
                src={src}
                alt={`${section.title} ${i + 1}`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() => setImageIndex((i) => i - 1)}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/50 p-2 text-gray-900 shadow-md hover:bg-white/70"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => setImageIndex((i) => i + 1)}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/50 p-2 text-gray-900 shadow-md hover:bg-white/70"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

export default function CoreServicesPage() {
  return (
    <div className="space-y-12 px-4 pb-24 pt-14 sm:px-8 lg:px-16 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.7),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(255,237,213,0.45),transparent_30%)]">
      <header className="mx-auto max-w-5xl text-center space-y-3">
        <p className="text-sm uppercase tracking-[0.25em] text-amber-700">
          Core Business Services
        </p>
        <h1 className="text-4xl font-semibold text-gray-900 sm:text-5xl">
          Trading, Import, Export, Manufacturing
        </h1>
        <p className="text-lg text-gray-700">
          This page is the full detail for our core capabilities. Links from the
          homepage and the Services menu land here and scroll to each section
          below.
        </p>
      </header>

      <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-800 hover:border-amber-300 hover:bg-amber-100"
          >
            {s.title}
          </a>
        ))}
      </div>

      <div className="mx-auto max-w-6xl space-y-10">
        {sections.map((section) => (
          <CoreServiceSection key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
}
