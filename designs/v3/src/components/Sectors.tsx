import Reveal from '@/components/Reveal';
import { productCategories, sectors } from '@/data/siteContent';

export default function SectorsAndProducts() {
  return (
    <>
      <section id="sectors" className="bg-primary-900 py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-accent-300">Industries</p>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">Sectors we serve</h2>
            <p className="mt-6 text-lg text-primary-100">
              Our engineers understand the operating demands of each sector and specify equipment accordingly.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-primary-700 sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <Reveal key={sector.name} delay={index * 80} className="h-full">
                  <div className="group h-full bg-primary-900 p-8 transition-colors duration-300 hover:bg-primary-800">
                    <Icon className="h-9 w-9 text-accent-300 transition-transform duration-300 group-hover:scale-110" />
                    <h3 className="mt-6 text-xl font-bold text-white">{sector.name}</h3>
                    <p className="mt-3 leading-relaxed text-primary-100">{sector.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="products" className="bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <Reveal>
            <img
              src="https://images.pexels.com/photos/18540319/pexels-photo-18540319.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Large industrial valves arranged in a workshop"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-2xl shadow-primary-900/15"
            />
          </Reveal>

          <Reveal delay={150}>
            <p className="text-sm font-bold uppercase tracking-widest text-accent-600">Our products</p>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">Agency-grade components in stock</h2>
            <p className="mt-6 text-lg text-neutral-600">
              We supply a wide range of hydraulic and pneumatic products through our agencies and distributorships.
              Tell us what you need and our team will recommend the right part.
            </p>

            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {productCategories.map((category) => (
                <li
                  key={category}
                  className="rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm font-semibold text-primary-800 transition-colors hover:border-accent-400 hover:bg-accent-50"
                >
                  {category}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary-700 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-primary-600"
            >
              Ask about a product
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
