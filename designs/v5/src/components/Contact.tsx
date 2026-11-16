import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { branches, company } from '@/data/siteContent';

export default function Contact() {
  return (
    <section id="contact" className="bg-ink-50 py-24 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="grid gap-8 md:grid-cols-12 md:items-end">
          <h2 className="text-5xl font-bold uppercase text-ink-950 md:col-span-7 md:text-7xl">
            Talk to a hydraulic specialist.
          </h2>
          <p className="text-lg leading-relaxed text-ink-600 md:col-span-4 md:col-start-9">
            Call, email or visit any branch. We take on engineering challenges at any time.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {branches.map((branch, index) => (
            <Reveal key={branch.city} delay={index * 120}>
              <article className="group flex h-full flex-col border border-ink-200 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-ink-950 hover:shadow-2xl hover:shadow-ink-900/10">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-3xl font-bold uppercase text-ink-950">{branch.city}</h3>
                  <MapPin className="h-6 w-6 flex-shrink-0 text-signal-600" />
                </div>
                <p className="mt-4 leading-relaxed text-ink-600">{branch.address}</p>

                <div className="mt-auto space-y-3 border-t border-ink-100 pt-8">
                  <a href={branch.phoneHref} className="flex items-center gap-3 font-semibold text-ink-900 transition-colors hover:text-signal-700">
                    <Phone className="h-5 w-5 text-ink-500" />
                    {branch.phone}
                  </a>
                  <a href={`mailto:${branch.email}`} className="flex items-center gap-3 font-semibold text-ink-900 transition-colors hover:text-signal-700">
                    <Mail className="h-5 w-5 text-ink-500" />
                    {branch.email}
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <a
            href={company.phoneHref}
            className="group mt-12 flex flex-col items-start justify-between gap-6 bg-ink-950 p-8 text-white transition-colors hover:bg-ink-800 md:flex-row md:items-center md:p-12"
          >
            <div>
              <p className="font-display text-3xl font-bold uppercase text-signal-400 md:text-4xl">Urgent breakdown?</p>
              <p className="mt-2 text-ink-200">Call the head office and our team will coordinate on-site support.</p>
            </div>
            <span className="flex items-center gap-3 font-display text-3xl font-bold text-white transition-colors group-hover:text-signal-300 md:text-4xl">
              {company.phoneDisplay}
              <ArrowUpRight className="h-7 w-7 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
