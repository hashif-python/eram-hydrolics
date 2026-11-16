import Reveal from '@/components/Reveal';
import { services } from '@/data/siteContent';

export default function Services() {
  return (
    <section id="services" className="bg-neutral-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-accent-600">What we do</p>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">Our services</h2>
          <p className="mt-6 text-lg text-neutral-600">
            From the first specification to the last service visit, we support your equipment at every stage.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 80}>
                <article className="group h-full rounded-2xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-900/10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-primary-700 transition-colors group-hover:bg-primary-700 group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold">{service.title}</h3>
                  <p className="mt-3 leading-relaxed text-neutral-600">{service.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
