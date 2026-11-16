import { useState } from 'react';
import { Plus } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { services } from '@/data/siteContent';

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="services" className="relative bg-ink-950 py-24 text-white md:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12">
        <Reveal className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
          <p className="flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.25em] text-signal-300">
            <span className="h-px w-10 bg-signal-400" />
            What we do
          </p>
          <h2 className="mt-6 text-5xl font-bold uppercase md:text-7xl">Services built around uptime.</h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-300">
            From the first specification to the last service visit, we keep your equipment running.
          </p>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-7 lg:col-start-6">
          <ul className="border-t border-white/15">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isOpen = openIndex === index;
              return (
                <li key={service.title} className="border-b border-white/15">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center gap-6 py-7 text-left"
                  >
                    <span className="font-display text-lg font-bold text-ink-400 transition-colors group-hover:text-signal-300">
                      0{index + 1}
                    </span>
                    <span className="flex flex-1 items-center gap-4">
                      <Icon
                        className={`h-6 w-6 flex-shrink-0 transition-colors ${isOpen ? 'text-signal-400' : 'text-ink-400'}`}
                      />
                      <span className="font-display text-3xl font-bold uppercase transition-colors group-hover:text-signal-300 md:text-4xl">
                        {service.title}
                      </span>
                    </span>
                    <Plus
                      className={`h-6 w-6 flex-shrink-0 text-signal-400 transition-transform duration-500 ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-xl pb-8 pl-[4.5rem] text-lg leading-relaxed text-ink-300">{service.description}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
