import { MapPin, Mail, MessageCircle, Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/contact-form";
import { Logo } from "@/components/logo";
import { company } from "@/lib/site";

/** Dark contact band: WhatsApp form left, practical details right. */
export function ContactSection() {
  return (
    <section id="contact" className="relative section-pad overflow-hidden bg-summit-950 text-white">
      <div aria-hidden className="glow-dawn pointer-events-none absolute inset-x-0 top-0 h-1/2" />

      <div className="container-asc relative">
        <SectionHeading
          dark
          kicker="Contact us"
          title={
            <>
              Drop us a <em className="text-dawn-400 italic">line</em>
            </>
          }
          lede="Whether you're rethinking your talent strategy, developing your leaders, or building a learning culture, we're here to support you every step of the way."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <Reveal kind="up">
            <ContactForm />
          </Reveal>

          <Reveal kind="right" delay={0.15}>
            <div className="flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <Logo onDark className="h-9" />
              <ul className="flex flex-col gap-5 text-[0.95rem] text-mist">
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
                        <span className="font-semibold text-white">{h.day}:</span> {h.time}
                      </span>
                    ))}
                  </span>
                </li>
              </ul>
              <p className="mt-auto border-t border-white/10 pt-5 text-sm leading-relaxed text-mist-soft">
                Prefer email? Write to us any time. We respond within one
                business day.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
