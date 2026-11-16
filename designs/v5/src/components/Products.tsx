import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { productCategories } from '@/data/siteContent';

export default function Products() {
  return (
    <section id="products" className="relative overflow-hidden bg-ink-900 py-24 text-white md:py-40">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/18540319/pexels-photo-18540319.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Large industrial valves arranged in a workshop"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover grayscale-[40%] md:aspect-[4/3]"
            />
            <div className="absolute -bottom-5 -right-5 hidden bg-signal-400 px-6 py-5 text-ink-950 sm:block">
              <p className="font-display text-4xl font-bold uppercase leading-none">Agency</p>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wider">Grade stock</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p className="flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.25em] text-signal-300">
            <span className="h-px w-10 bg-signal-400" />
            Our products
          </p>
          <h2 className="mt-6 text-5xl font-bold uppercase md:text-7xl">Components ready to ship.</h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-300">
            Hydraulic and pneumatic products supplied through our agencies and distributorships. Tell us what you need
            and our team will recommend the right part.
          </p>

          <ul className="mt-10 border-t border-white/15">
            {productCategories.map((category, index) => (
              <li key={category}>
                <a
                  href="#contact"
                  className="group flex items-center justify-between border-b border-white/15 py-4 transition-colors hover:text-signal-300"
                >
                  <span className="flex items-center gap-4">
                    <span className="font-display text-sm font-bold text-ink-400">0{index + 1}</span>
                    <span className="font-semibold text-ink-100 transition-colors group-hover:text-signal-300">{category}</span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-ink-400 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-signal-400" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
