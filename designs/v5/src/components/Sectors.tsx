import { useState, type MouseEvent } from 'react';
import Reveal from '@/components/Reveal';
import { sectors } from '@/data/siteContent';

export default function Sectors() {
  const [hovered, setHovered] = useState<number | null>(null);

  const trackPointer = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--my', `${event.clientY - rect.top}px`);
  };

  return (
    <section id="sectors" className="bg-white py-24 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="text-5xl font-bold uppercase text-ink-950 md:text-7xl">
            Sectors
            <br />
            we serve
          </h2>
          <p className="max-w-sm text-lg leading-relaxed text-ink-600">
            Our engineers understand the operating demands of each sector and specify equipment to match.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px bg-ink-200 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <Reveal key={sector.name} delay={index * 100} className="h-full">
                <div
                  onMouseMove={trackPointer}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  className="group relative h-full overflow-hidden bg-white p-8 transition-colors duration-500 md:p-10"
                >
                  <div
                    aria-hidden
                    className={`spotlight pointer-events-none absolute inset-0 transition-opacity duration-500 ${
                      hovered === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  <div className="relative">
                    <span className="font-display text-sm font-bold text-ink-400">0{index + 1}</span>
                    <Icon className="mt-10 h-10 w-10 text-ink-950 transition-transform duration-500 group-hover:-translate-y-1" />
                    <h3 className="mt-8 text-3xl font-bold uppercase text-ink-950">{sector.name}</h3>
                    <p className="mt-4 leading-relaxed text-ink-600">{sector.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
