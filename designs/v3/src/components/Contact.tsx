import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { branches, company } from '@/data/siteContent';

export default function Contact() {
  return (
    <section id="contact" className="bg-neutral-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-accent-600">Get in touch</p>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">Talk to our hydraulic specialists</h2>
          <p className="mt-6 text-lg text-neutral-600">
            Call, email or visit any of our branches. We respond to engineering challenges at any time.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {branches.map((branch, index) => (
            <Reveal key={branch.city} delay={index * 100}>
              <article className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-xl hover:shadow-primary-900/10">
                <h3 className="text-xl font-bold">{branch.city}</h3>
                <p className="mt-4 flex gap-3 text-neutral-600">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-accent-600" />
                  <span>{branch.address}</span>
                </p>

                <div className="mt-auto space-y-3 border-t border-neutral-100 pt-8">
                  <a
                    href={branch.phoneHref}
                    className="flex items-center gap-3 font-semibold text-primary-800 transition-colors hover:text-accent-600"
                  >
                    <Phone className="h-5 w-5 text-primary-600" />
                    {branch.phone}
                  </a>
                  <a
                    href={`mailto:${branch.email}`}
                    className="flex items-center gap-3 font-semibold text-primary-800 transition-colors hover:text-accent-600"
                  >
                    <Mail className="h-5 w-5 text-primary-600" />
                    {branch.email}
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl bg-primary-700 p-8 text-white md:flex-row md:items-center md:p-12">
            <div className="flex items-start gap-4">
              <Clock className="mt-1 h-7 w-7 flex-shrink-0 text-accent-300" />
              <div>
                <p className="text-xl font-bold text-white">Urgent breakdown?</p>
                <p className="mt-1 text-primary-100">Call our head office line and our team will coordinate on-site support.</p>
              </div>
            </div>
            <a
              href={company.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-7 py-3.5 font-semibold text-primary-900 transition-all hover:-translate-y-0.5 hover:bg-accent-400"
            >
              <Phone className="h-4 w-4" />
              {company.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
