import { useEffect, useState } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { heroSlides } from '@/data/siteContent';

const ROTATE_MS = 6000;

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % heroSlides.length);
    }, ROTATE_MS);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="top" className="relative isolate min-h-[640px] overflow-hidden bg-primary-900 pt-28 md:pt-36">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.image}
          aria-hidden={index !== active}
          className={`absolute inset-0 -z-10 transition-opacity duration-1000 ${
            index === active ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={slide.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-900/85 to-primary-900/40" />
        </div>
      ))}

      <div className="mx-auto flex max-w-7xl flex-col px-6 pb-24 pt-16 md:pt-24">
        <div key={active} className="max-w-2xl animate-[fadeUp_0.8s_ease-out]">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-300/40 bg-accent-500/10 px-4 py-1.5 text-sm font-semibold text-accent-200">
            {heroSlides[active].eyebrow}
          </p>
          <h1 className="text-4xl font-bold leading-[1.15] text-white md:text-6xl">{heroSlides[active].title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-100">{heroSlides[active].description}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-7 py-3.5 font-semibold text-primary-900 shadow-lg shadow-accent-900/30 transition-all hover:-translate-y-0.5 hover:bg-accent-400"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              Our Services
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-16 flex gap-2">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === active ? 'w-12 bg-accent-400' : 'w-6 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
