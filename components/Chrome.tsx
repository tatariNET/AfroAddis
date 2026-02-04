"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Mail,
  Phone,
  MapPin,
  FileText,
  Linkedin,
  Facebook,
  Instagram,
  Send,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";

const noChromeRoutes = new Set(["/qr"]);

// Minimal TikTok glyph since lucide-react has no branded icon
const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M31.5 10.7c1.4 1.3 3.1 2.3 5 2.6v5c-2.2-.1-4.3-.7-6.2-1.7v11.2c0 6.5-5.5 9.3-9.7 9.3-4.2 0-8.6-2.3-8.6-7.8 0-5.3 4-7.7 7.6-7.7.6 0 1.3.1 2 .2v5c-.4-.1-.9-.1-1.3-.1-1.6 0-3.3.8-3.3 2.9 0 2.1 1.9 3 3.6 3 2.1 0 4.1-1.2 4.1-3.7V7h6.8v3.7Z" />
  </svg>
);

type ChromeProps = {
  children: React.ReactNode;
};

export const Chrome = ({ children }: ChromeProps) => {
  const pathname = usePathname();
  const hideChrome = pathname ? noChromeRoutes.has(pathname) : false;
  const mainClasses = `pb-16 ${hideChrome ? "pt-6" : "pt-28"} sm:px-6 lg:px-10 overflow-x-hidden`;

  return (
    <>
      {!hideChrome && <Navbar />}

      <main className={mainClasses}>{children}</main>

      {!hideChrome && (
        <footer className="mt-16 bg-red-700 text-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-10">
            <div className="grid gap-10 md:grid-cols-3">
              <div className="space-y-4">
                <p className="text-lg font-bold">Afro Addis</p>
                <p className="max-w-sm text-sm text-red-100">
                  A diversified Ethiopian group working across agro-commodities,
                  imports, and furniture manufacturing.
                </p>
                <div className="flex items-center gap-3 text-red-100">
                  <a
                    href="https://t.me/AFROADDIS_KYT"
                    aria-label="Telegram"
                    className="hover:text-white"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Send size={22} />
                  </a>
                  <a
                    href="https://www.facebook.com/AFROADDISKYT"
                    aria-label="Facebook"
                    className="hover:text-white"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Facebook size={22} />
                  </a>
                  <a
                    href="https://www.instagram.com/afroaddis_kyt"
                    aria-label="Instagram"
                    className="hover:text-white"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Instagram size={22} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@afroaddiskyt"
                    aria-label="TikTok"
                    className="hover:text-white"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <TikTokIcon className="h-[30px] w-[30px]" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/afroaddis-kyt-trading-plc"
                    aria-label="LinkedIn"
                    className="hover:text-white"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Linkedin size={22} />
                  </a>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-red-200">
                  Quick links
                </p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>
                    <Link href="/about" className="hover:text-white">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-white">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/products" className="hover:text-white">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link href="/work-with-us" className="hover:text-white">
                      Work with us
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-red-200">
                  Contact
                </p>
                <ul className="mt-3 space-y-3 text-sm text-red-100 ">
                  <li className="flex items-center gap-2">
                    <Mail size={16} /> <span>info@afroaddis.com</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone size={16} /> <span>+251 978 787 878</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone size={16} /> <span>+251 970 777 879</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone size={16} /> <span>+251 960 777 879</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin size={16} /> <span>Addis Ababa, Ethiopia</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Link
                      href="https://afroaddis.vercel.app/"
                      className="hover:text-white"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      afroaddis.vercel.app
                    </Link>
                  </li>
                </ul>

                <div className="mt-4">
                  <a
                    href="/magazines/afroaddis.pdf"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded bg-white/10 px-3 py-2 text-sm font-semibold hover:bg-white/20"
                  >
                    <FileText size={16} />
                    Download corporate profile
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-red-600 bg-red-800">
            <div className="mx-auto max-w-7xl px-4 py-3 text-xs text-red-200 sm:px-6 lg:px-10">
              © {new Date().getFullYear()} Afro Addis. All rights reserved.
            </div>
          </div>
        </footer>
      )}

      {!hideChrome && (
        <a
          href="https://www.facebook.com/AFROADDISKYT"
          aria-label="Message us on Facebook"
          target="_blank"
          rel="noreferrer noopener"
          className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#1877F2] px-4 py-3 text-sm font-semibold text-white shadow-xl hover:bg-[#0f6ae7] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1877F2]"
        >
          <Facebook className="h-5 w-5 text-white" />
          <span>Message us on Facebook</span>
        </a>
      )}
    </>
  );
};
