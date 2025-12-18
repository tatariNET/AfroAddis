import PdfFlipbook from "@/components/magazine/PdfFlipbook";
import { ScrollToTopButton } from "@/components/magazine/ScrollToTopButton";

export default async function MagazineDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pdfUrl = `/magazines/${slug}.pdf`;
  const displayTitle = slug
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="-mt-16 pt-6 lg:pt-8">
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-transparent">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M4 19.5V4.5C4 3.67 4.67 3 5.5 3h7l5.5 5.5v11c0 .83-.67 1.5-1.5 1.5h-12A1.5 1.5 0 0 1 4 19.5Z" />
                <path d="M12 3v5h5" />
              </svg>
              <span className="leading-none">{displayTitle}</span>
            </span>
            <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
              PDF magazine
            </span>
          </div>
          <PdfFlipbook pdfUrl={pdfUrl} aspectRatio={3 / 4} scale={1.25} />
          <ScrollToTopButton />
        </div>
      </div>
    </div>
  );
}
