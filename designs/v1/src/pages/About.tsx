import { Link } from 'react-router-dom';
import {
  ShieldCheck, Eye, Target, Award, Wrench, Factory,
  Anchor, Waves, Truck, Cpu, ArrowRight, CheckCircle2,
  Cog, Settings, RefreshCw,
} from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';

export function About() {
  useSEO({
    title: 'About Us',
    description: 'Learn about ERAM Hydraulics — Saudi Arabia\'s ISO 9001:2015 certified hydraulic engineering company. Our vision, mission, expertise, and commitment to quality.',
  });

  const industries = [
    { icon: Anchor, name: 'Oil & Gas', description: 'Offshore platforms, onshore drilling, and refinery hydraulic systems' },
    { icon: Waves, name: 'Marine & Shipping', description: 'Vessel deck machinery, port equipment, and dock systems' },
    { icon: Factory, name: 'Manufacturing', description: 'Presses, injection molding, and production line hydraulics' },
    { icon: Truck, name: 'Construction', description: 'Excavators, cranes, and mobile heavy equipment' },
    { icon: Cpu, name: 'Energy & Power', description: 'Power plant hydraulic control and lubrication systems' },
    { icon: RefreshCw, name: 'Mining & Quarry', description: 'Heavy-duty hydraulic systems for mineral extraction' },
  ];

  const facilities = [
    { icon: Cog, title: 'Cylinder Repair Workshop', description: 'Dedicated facility for cylinder honing, seal replacement, and rod chrome plating with testing up to 700 bar.' },
    { icon: Factory, title: 'Power Pack Assembly', description: 'Custom power pack manufacturing area with testing bay, component inventory, and quality control stations.' },
    { icon: Wrench, title: 'Field Service Division', description: 'Mobile service teams equipped for on-site troubleshooting, repair, and maintenance across the Kingdom.' },
    { icon: Settings, title: 'Engineering & Design', description: 'In-house engineering team with hydraulic system design, 3D modeling, and simulation capabilities.' },
  ];

  return (
    <div className="bg-charcoal-950">
      {/* Hero */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/30335395/pexels-photo-30335395.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Industrial workshop" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/90 to-charcoal-950/60" />
          <div className="absolute inset-0 bg-grid opacity-20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <Reveal>
            <span className="text-eram-500 text-sm font-semibold tracking-widest uppercase mb-4 block">About ERAM Hydraulics</span>
            <h1 className="font-display text-display-xl font-bold text-white mb-6 max-w-4xl">
              Hydraulic Engineering Built on Precision & Trust
            </h1>
            <p className="text-steel-300 text-xl leading-relaxed max-w-3xl">
              A Saudi Arabian hydraulic engineering company dedicated to delivering reliable, high-performance hydraulic systems across the Kingdom's most demanding industries.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Company profile */}
      <section className="py-24 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <span className="text-eram-500 text-sm font-semibold tracking-widest uppercase mb-4 block">Company Profile</span>
              <h2 className="font-display text-display-lg font-bold text-white mb-6">
                Engineering Excellence Since Our Founding
              </h2>
              <div className="space-y-4 text-steel-300 leading-relaxed">
                <p>
                  ERAM Hydraulics is a hydraulic engineering company based in Saudi Arabia, serving the Kingdom's offshore, marine, industrial, and mobile sectors. We specialize in the design, supply, installation, and maintenance of hydraulic systems that operate reliably in the most demanding environments.
                </p>
                <p>
                  Our comprehensive service portfolio covers everything from custom power pack manufacturing and hydraulic cylinder repair to system troubleshooting and long-term maintenance contracts. We are an authorised distributor for several premium hydraulic component manufacturers, enabling us to supply genuine, high-quality parts for every project.
                </p>
                <p>
                  With facilities in Dammam and Riyadh, we provide rapid response and technical support across the Eastern Province and central Saudi Arabia. Our certified technicians and engineers bring years of hands-on experience to every project, ensuring that your hydraulic systems perform to specification.
                </p>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-charcoal-800 rounded-2xl border border-white/5">
                  <ShieldCheck className="w-8 h-8 text-eram-500 mb-4" />
                  <h3 className="text-white font-display font-bold mb-1">ISO 9001:2015</h3>
                  <p className="text-steel-400 text-sm">Certified quality management system</p>
                </div>
                <div className="p-6 bg-charcoal-800 rounded-2xl border border-white/5 mt-8">
                  <Wrench className="w-8 h-8 text-eram-500 mb-4" />
                  <h3 className="text-white font-display font-bold mb-1">Full Service</h3>
                  <p className="text-steel-400 text-sm">Design, supply, install, maintain</p>
                </div>
                <div className="p-6 bg-charcoal-800 rounded-2xl border border-white/5">
                  <Factory className="w-8 h-8 text-eram-500 mb-4" />
                  <h3 className="text-white font-display font-bold mb-1">2 Locations</h3>
                  <p className="text-steel-400 text-sm">Dammam & Riyadh facilities</p>
                </div>
                <div className="p-6 bg-charcoal-800 rounded-2xl border border-white/5 mt-8">
                  <Cog className="w-8 h-8 text-eram-500 mb-4" />
                  <h3 className="text-white font-display font-bold mb-1">Custom Builds</h3>
                  <p className="text-steel-400 text-sm">In-house power pack manufacturing</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ISO certification banner */}
      <section className="py-16 bg-charcoal-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="flex flex-col md:flex-row items-center gap-8 p-8 lg:p-10 bg-gradient-to-r from-charcoal-800 to-charcoal-900 rounded-3xl border border-eram-600/20">
              <div className="w-20 h-20 bg-eram-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Award className="w-10 h-10 text-white" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-display text-2xl font-bold text-white mb-2">ISO 9001:2015 Certified</h3>
                <p className="text-steel-300 leading-relaxed">
                  Our quality management system is certified to ISO 9001:2015, ensuring that every hydraulic system we design, manufacture, install, and service meets internationally recognized quality standards. This certification reflects our systematic approach to quality control, continuous improvement, and customer satisfaction.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <Reveal>
              <div className="p-10 bg-charcoal-800 rounded-3xl border border-white/5 h-full">
                <div className="w-14 h-14 bg-eram-600/15 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-eram-400" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-steel-300 leading-relaxed text-lg">
                  To be Saudi Arabia's most trusted and technically advanced hydraulic engineering partner, recognized for excellence in system design, manufacturing quality, and service reliability across every sector we serve.
                </p>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="p-10 bg-charcoal-800 rounded-3xl border border-white/5 h-full">
                <div className="w-14 h-14 bg-eram-600/15 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-eram-400" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-steel-300 leading-relaxed text-lg">
                  To deliver hydraulic engineering solutions that combine premium components, expert craftsmanship, and rigorous quality standards — empowering our clients' operations with systems built to perform in the most demanding environments.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Engineering expertise */}
      <section className="py-24 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <span className="text-eram-500 text-sm font-semibold tracking-widest uppercase mb-4 block">Expertise</span>
            <h2 className="font-display text-display-lg font-bold text-white mb-4">
              Engineering Expertise & Quality Commitment
            </h2>
            <p className="text-steel-400 text-lg max-w-2xl mx-auto">
              Our technical team brings deep hydraulic engineering knowledge to every project, backed by a systematic quality process.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'System Design & Engineering', desc: 'Custom hydraulic system design with component selection, circuit design, and performance simulation.' },
              { title: 'Manufacturing & Assembly', desc: 'In-house power pack manufacturing, manifold machining, and system assembly with quality testing.' },
              { title: 'Installation & Commissioning', desc: 'Professional installation with pre-commissioning checks, performance testing, and operator training.' },
              { title: 'Repair & Refurbishment', desc: 'Cylinder honing, seal replacement, rod chrome plating, and full system refurbishment.' },
              { title: 'Troubleshooting & Diagnostics', desc: 'Advanced diagnostic services with portable test equipment, oil analysis, and root-cause analysis.' },
              { title: 'Maintenance & Support', desc: 'Preventive and predictive maintenance contracts with 24/7 emergency response capability.' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="flex items-start gap-4 p-6 bg-charcoal-800 rounded-2xl border border-white/5 hover:border-eram-600/20 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-eram-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-steel-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-24 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <span className="text-eram-500 text-sm font-semibold tracking-widest uppercase mb-4 block">Facilities</span>
            <h2 className="font-display text-display-lg font-bold text-white mb-4">
              Our Facilities & Capabilities
            </h2>
            <p className="text-steel-400 text-lg max-w-2xl mx-auto">
              Equipped workshops and engineering facilities in Dammam and Riyadh.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {facilities.map((fac, i) => (
              <Reveal key={fac.title} delay={(i % 2 + 1) as 1 | 2}>
                <div className="group flex gap-6 p-8 bg-charcoal-800 rounded-2xl border border-white/5 hover:border-eram-600/20 transition-all">
                  <div className="w-14 h-14 bg-eram-600/15 group-hover:bg-eram-600 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                    <fac.icon className="w-7 h-7 text-eram-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white mb-3">{fac.title}</h3>
                    <p className="text-steel-400 leading-relaxed">{fac.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries served */}
      <section className="py-24 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-16">
            <span className="text-eram-500 text-sm font-semibold tracking-widest uppercase mb-4 block">Industries</span>
            <h2 className="font-display text-display-lg font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-steel-400 text-lg max-w-2xl mx-auto">
              Specialized hydraulic solutions for the Kingdom's key industrial sectors.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <Reveal key={ind.name} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="group p-8 bg-charcoal-800 hover:bg-charcoal-700 rounded-2xl border border-white/5 hover:border-eram-600/30 transition-all hover:-translate-y-1">
                  <div className="w-12 h-12 bg-eram-600/15 group-hover:bg-eram-600 rounded-xl flex items-center justify-center mb-5 transition-colors">
                    <ind.icon className="w-6 h-6 text-eram-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">{ind.name}</h3>
                  <p className="text-steel-400 text-sm leading-relaxed">{ind.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Partner With ERAM Hydraulics" subtitle="Let our engineering team deliver the hydraulic solution your operation demands." />
    </div>
  );
}
