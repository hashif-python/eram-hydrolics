import { useEffect, useState } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { company, heroSlides } from '@/data/siteContent';

const ROTATE_MS = 7000;

export default function Hero() {
  const [active, setActive] = useState(0);
  const slide = heroSlides[active];

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActive((index) => (index + 1) % heroSlides.length);
    }, ROTATE_MS);
    return () => window.clearTimeout(timer);
  }, [active]);

  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink-950 text-white">
      {heroSlides.map((item, index) => (
        <div
          key={item.image}
          aria-hidden={index !== active}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === active ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={item.image}
            alt=""
            className={`h-full w-full object-cover grayscale transition-transform duration-[9000ms] ease-out ${
              index === active ? 'scale-110' : 'scale-100'
            }`}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/75 to-ink-950/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-950/40 to-transparent" />
      <div className="grain absolute inset-0" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-6 pb-12 pt-40 md:pb-16">
        <div key={active} className="animate-fadeUp">
          <p className="mb-6 flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.25em] text-signal-300">
            <span className="h-px w-12 bg-signal-400" />
            {slide.eyebrow}
          </p>
          <h1 className="max-w-4xl text-[clamp(3.25rem,9vw,8rem)] font-bold uppercase text-white">{slide.title}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-200">{slide.description}</p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-sm bg-signal-400 px-7 py-4 font-bold uppercase tracking-wide text-ink-950 transition-colors hover:bg-signal-300"
          >
            Request a quote
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={company.phoneHref}
            className="inline-flex items-center gap-3 rounded-sm border border-white/25 px-7 py-4 font-bold uppercase tracking-wide text-white transition-colors hover:border-signal-400 hover:text-signal-300"
          >
            <Phone className="h-5 w-5" />
            Call the team
          </a>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10 bg-ink-950/60 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px px-6 md:grid-cols-3">
          {heroSlides.map((item, index) => (
            <button
              key={item.eyebrow}
              type="button"
              onClick={() => setActive(index)}
              aria-current={index === active}
              className="group relative flex items-center gap-4 py-5 text-left md:px-6"
            >
              <span className={`font-display text-2xl font-bold ${index === active ? 'text-signal-400' : 'text-ink-400'}`}>
                0{index + 1}
              </span>
              <span className={`text-sm font-semibold uppercase tracking-wider ${index === active ? 'text-white' : 'text-ink-300 group-hover:text-white'}`}>
                {item.eyebrow}
              </span>
              {index === active && (
                <span key={active} className="absolute inset-x-0 bottom-0 h-0.5 origin-left animate-progress bg-signal-400" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
