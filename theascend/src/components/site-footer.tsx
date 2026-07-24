import Link from "next/link";
import { MapPin, Mail, MessageCircle, Clock } from "lucide-react";
import { company, nav } from "@/lib/site";
import { Logo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-summit-950 text-white">
      <div aria-hidden className="glow-teal pointer-events-none absolute inset-x-0 bottom-0 h-2/3" />

      <div className="container-asc relative section-pad">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div className="flex flex-col items-start gap-5">
            <div className="pt-4">
              <Logo onDark className="h-11" />
            </div>
            <p className="max-w-sm text-[0.95rem] leading-relaxed text-mist-soft">
              Shape your organization&rsquo;s future and let The Ascend align
              your talent with tomorrow&rsquo;s success.
            </p>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <h2 className="mb-4 text-xs font-bold tracking-[0.18em] text-mist-soft uppercase">
              Explore
            </h2>
            <ul className="flex flex-col gap-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-underline text-[0.95rem] text-mist hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div>
            <h2 className="mb-4 text-xs font-bold tracking-[0.18em] text-mist-soft uppercase">
              Connect with us
            </h2>
            <ul className="flex flex-col gap-3.5 text-[0.95rem] text-mist">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 size-4 shrink-0 text-dawn-500" aria-hidden />
                <span>{company.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-dawn-500" aria-hidden />
                <a href={`mailto:${company.email}`} className="link-underline hover:text-white">
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="size-4 shrink-0 text-dawn-500" aria-hidden />
                <a
                  href={`https://wa.me/${company.whatsappDigits}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline hover:text-white"
                >
                  {company.whatsapp}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-1 size-4 shrink-0 text-dawn-500" aria-hidden />
                <span>
                  {company.hours.map((h) => (
                    <span key={h.day} className="block">
                      {h.day}: {h.time}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-sm text-mist-soft sm:flex-row sm:items-center">
          <p>Copyright © 2025 The Ascend. All Rights Reserved.</p>
          <p className="font-display text-mist-soft/70 italic">When people grow, organizations ascend.</p>
        </div>
      </div>
    </footer>
  );
}
