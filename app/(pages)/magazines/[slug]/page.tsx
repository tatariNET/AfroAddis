import PdfFlipbook from "@/components/magazine/PdfFlipbook";

export default async function MagazineDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pdfUrl = `/magazines/${slug}.pdf`;

  return (
    <div className="pt-20 lg:pt-24">
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-transparent">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-10">
          <h1 className="text-xl font-semibold mb-3">{slug}</h1>
          <PdfFlipbook pdfUrl={pdfUrl} aspectRatio={3 / 4} scale={1.25} />
        </div>
      </div>
    </div>
  );
}
