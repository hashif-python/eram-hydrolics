import { CheckCircle2 } from 'lucide-react';
import CountUp from '@/components/CountUp';
import Reveal from '@/components/Reveal';
import { certifications, stats } from '@/data/siteContent';

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-ink-50 py-24 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.25em] text-ink-600">
              <span className="h-px w-10 bg-signal-500" />
              About Eram Hydraulics
            </p>
            <h2 className="mt-6 text-5xl font-bold uppercase text-ink-950 md:text-7xl">
              Fluid power, engineered with precision.
            </h2>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-6 lg:col-start-7">
            <p className="text-xl leading-relaxed text-ink-700">
              Eram Hydraulics offers the most comprehensive range of hydraulic, pneumatic and lubrication supply and
              engineering services across the Middle East, serving the Marine, Oil &amp; Gas, Industrial and Mobile
              Hydraulics sectors.
            </p>
            <ul className="mt-10 grid gap-4 sm:grid-cols-1">
              {certifications.map((item) => (
                <li key={item} className="flex items-center gap-4 border-l-2 border-signal-500 bg-white px-5 py-4 font-semibold text-ink-900 shadow-sm">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-success-600" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <dl className="mt-24 grid grid-cols-1 divide-y divide-ink-200 border-y border-ink-200 md:grid-cols-3 md:divide-x md:divide-y-0">
            {stats.map((stat) => (
              <div key={stat.label} className="px-0 py-10 md:px-10">
                <dt className="text-sm font-semibold uppercase tracking-wider text-ink-500">{stat.label}</dt>
                <dd className="mt-3 font-display text-7xl font-bold text-ink-950 md:text-8xl">
                  <CountUp value={stat.value} />
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
