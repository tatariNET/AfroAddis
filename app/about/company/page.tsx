"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const sections = [
  {
    id: "company",
    title: "Company profile",
    lead:
      "Founded in 2015 in Addis Ababa, operating across trading & export (coffee, pulses, oilseeds), import & retail (appliances, electronics, household), and manufacturing (furniture & woodwork).",
    points: [
      "Multi-division operations: export (coffee, pulses, oilseeds), import & retail (appliances, electronics, household), manufacturing (furniture & woodwork).",
      "Serve domestic retail/wholesale partners and global buyers in Africa, EU, Middle East, North America.",
      "Value pillars: trust, integrity, professionalism, and on-time quality delivery.",
    ],
    // previous image:
    // "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=80",
    image: "/trading/sofa1.jpg",
  },
  {
    id: "governance",
    title: "Governance & board",
    lead:
      "Board and advisory oversight on strategy, capital allocation, and risk with audit & risk functions enforcing SOPs and compliance.",
    points: [
      "Controls for procurement, FX, logistics, and documentation with defined SOPs.",
      "Periodic audits, governance cadence, and reporting for transparency and performance.",
      "Compliance aligned to Ethiopian regulations and international trade standards.",
    ],
    // previous image:
    // "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80",
    image: "/manufacturing/wood2.jpg",
  },
  {
    id: "achievements",
    title: "Achievements & awards",
    lead:
      "Recognitions for transparent reporting, compliant operations, and contributions to sector associations and trade finance partnerships.",
    points: [
      "Best Taxpayer Award for compliant trade and transparent reporting.",
      "Active member of Addis Ababa Chamber of Commerce and sector associations.",
      "Structured trade finance partnerships with leading Ethiopian banks.",
    ],
    // previous image:
    // "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=80",
    image: "/certificate/certificate1.png",
  },
  {
    id: "resources",
    title: "Resources",
    lead:
      "Corporate profile and division brochures available; compliance kit accessible on request for partners and investors.",
    points: [
      "Corporate profile PDF: concise overview for partners and investors.",
      "Division brochures: import/export catalogs, manufacturing capabilities, service menus.",
      "Compliance kit: licenses, registrations, certificates.",
    ],
    // previous images:
    // "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=80",
    // "/certificate/certificate2.png",
    image: "/export/cerials2.jpg",
  },
];

export default function AboutCompanyPage() {
  const certificateImages = [
    "/certificate/certificate1.png",
    "/certificate/certificate2.png",
  ];
  const [certificateIndex, setCertificateIndex] = useState(0);

  const prevCertificate = () => {
    setCertificateIndex((i) => (i - 1 + certificateImages.length) % certificateImages.length);
  };

  const nextCertificate = () => {
    setCertificateIndex((i) => (i + 1) % certificateImages.length);
  };

  useEffect(() => {
    const id = window.setInterval(() => {
      setCertificateIndex((i) => (i + 1) % certificateImages.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [certificateImages.length]);

  return (
    <div className="space-y-12 px-4 pb-24 pt-14 sm:px-8 lg:px-16 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.8),transparent_35%),radial-gradient(circle_at_82%_8%,rgba(252,211,77,0.35),transparent_32%)]">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
        <div className="grid lg:grid-cols-2">
          <div className="relative h-44 sm:h-64 lg:h-full">
            {/* previous hero image:
            https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=80
            */}
            <Image
              src="/trading/kitchen1.jpg"
              alt="Company operations"
              fill
              className="object-cover"
              sizes="(min-width:1024px) 50vw, 100vw"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-tr from-black/30 via-transparent to-red-900/10" />
          </div>
          <div className="p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-red-700">
              About
            </p>
            <h1 className="mt-2 text-3xl font-semibold text-gray-900 sm:text-4xl">
              Company, Governance & Achievements
            </h1>
            <p className="mt-3 text-sm text-gray-700">
              Detailed sections covering the company profile, governance &
              board, achievements & awards, and key resources.
            </p>
          </div>
        </div>
      </div>

      {/* Subnav chips */}
      <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-900 hover:border-amber-300 hover:bg-amber-100"
          >
            {s.title}
          </a>
        ))}
      </div>

      {/* Sections */}
      <div className="mx-auto max-w-6xl space-y-10">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="overflow-hidden rounded-2xl border border-gray-100 bg-white/95 shadow-lg shadow-amber-900/5 scroll-mt-24"
          >
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="p-6 sm:p-8 space-y-4">
               
                <h2 className="mt-2 text-2xl font-bold text-gray-900">
                  {section.title}
                </h2>

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
              </div>

              <div className="relative h-full min-h-[360px] bg-gray-50">
                <div
                  className="absolute inset-0 bg-linear-to-br from-black/20 via-transparent to-amber-900/10"
                  aria-hidden="true"
                />
                {section.id === "achievements" ? (
                  <>
                    <div className="relative z-10 flex h-full w-full items-center justify-center p-6">
                      {certificateImages.map((src, i) => (
                        <div
                          key={src}
                          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
                            i === certificateIndex
                              ? "opacity-100"
                              : "opacity-0 pointer-events-none"
                          }`}
                        >
                          <div className="relative h-full w-full bg-white shadow-md">
                            <Image
                              src={src}
                              alt={`Certificate ${i + 1}`}
                              fill
                              className="object-contain p-4"
                              sizes="(min-width:1024px) 50vw, 100vw"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={prevCertificate}
                      aria-label="Previous certificate"
                      className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/60 p-2 text-gray-900 shadow-md hover:bg-white/80 z-20"
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      onClick={nextCertificate}
                      aria-label="Next certificate"
                      className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/60 p-2 text-gray-900 shadow-md hover:bg-white/80 z-20"
                    >
                      ›
                    </button>
                  </>
                ) : (
                  <Image
                    src={section.image}
                    alt={`${section.title} illustrative`}
                    fill
                    className="object-cover"
                    sizes="(min-width:1024px) 50vw, 100vw"
                  />
                )}
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
