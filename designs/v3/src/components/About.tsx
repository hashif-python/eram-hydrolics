import { CheckCircle2 } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { certifications, stats } from '@/data/siteContent';

export default function About() {
  return (
    <section id="about" className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/14637831/pexels-photo-14637831.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Workshop with industrial machinery and lubrication equipment"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-2xl shadow-primary-900/15"
            />
            <div className="absolute -bottom-6 -right-4 hidden rounded-xl bg-accent-500 px-6 py-5 shadow-xl sm:block">
              <p className="text-3xl font-bold text-primary-900">ISO 9001</p>
              <p className="text-sm font-semibold text-primary-900/80">Certified quality since 2015</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p className="text-sm font-bold uppercase tracking-widest text-accent-600">About Eram Hydraulics</p>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">Your partner in fluid power and engineering</h2>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600">
            Eram Hydraulics offers the most comprehensive range of hydraulic, pneumatic and lubrication supply and
            engineering services across the Middle East. We specialize in fluid power transmission and general
            engineering for the Marine, Oil &amp; Gas, Industrial and Mobile Hydraulics sectors.
          </p>

          <ul className="mt-8 space-y-4">
            {certifications.map((item) => (
              <li key={item} className="flex items-center gap-3 font-semibold text-primary-800">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-success-600" />
                {item}
              </li>
            ))}
          </ul>

          <dl className="mt-12 grid grid-cols-1 gap-6 border-t border-neutral-200 pt-10 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-bold text-primary-700">{stat.value}</dd>
                <dd className="mt-1 text-sm leading-snug text-neutral-500">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
