import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Afro Addis",
  description: "Afro Addis official website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f7f4ed] text-gray-900`}
      >
        <Navbar />

        <main className="mx-auto max-w-7xl space-y-20 px-4 pb-16 pt-28 sm:px-6 lg:px-10">
          {children}
        </main>

        <footer className="mt-16 border-t border-gray-200 bg-white/80">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 text-sm text-gray-700 sm:flex-row sm:items-start sm:justify-between sm:px-6 lg:px-10">
            <div className="space-y-3">
              <p className="text-base font-semibold text-gray-900">Afro Addis</p>
              <p className="max-w-sm text-sm text-gray-600">
                A diversified Ethiopian group working across agro-commodities, imports, and furniture manufacturing.
              </p>
            </div>
            <div className="flex flex-wrap gap-12">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Quick links</p>
                <ul className="space-y-1 text-sm">
                  <li><Link href="/about" className="hover:text-gray-900">About</Link></li>
                  <li><Link href="/services" className="hover:text-gray-900">Services</Link></li>
                  <li><Link href="/products" className="hover:text-gray-900">Products</Link></li>
                  <li><Link href="/work-with-us" className="hover:text-gray-900">Work with us</Link></li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Contact</p>
                <ul className="space-y-1 text-sm">
                  <li><span className="text-gray-800">info@afroaddis.com</span></li>
                  <li><span className="text-gray-800">+251 (0) 11 000 0000</span></li>
                  <li><span className="text-gray-800">Addis Ababa, Ethiopia</span></li>
                  <li>
                    <Link href="/contact" className="text-gray-900 underline underline-offset-4 hover:no-underline">
                      Contact us page
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-100 bg-white/90">
            <div className="mx-auto max-w-7xl px-4 py-3 text-xs text-gray-500 sm:px-6 lg:px-10">
              © {new Date().getFullYear()} Afro Addis. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
