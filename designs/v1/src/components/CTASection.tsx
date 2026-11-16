import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export function CTASection({ title, subtitle }: CTASectionProps) {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-charcoal-900" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-br from-eram-600/20 via-transparent to-navy-600/20" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display text-display-lg font-bold text-white mb-6">
          {title || 'Ready to Engineer Your Solution?'}
        </h2>
        <p className="text-steel-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          {subtitle || 'Contact our hydraulic engineering team today for expert consultation, quotations, and technical support tailored to your project requirements.'}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-eram-600 hover:bg-eram-700 text-white font-semibold rounded-xl transition-all hover:shadow-xl hover:shadow-eram-600/30 hover:-translate-y-0.5"
          >
            Request a Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="tel:+966500000000"
            className="inline-flex items-center gap-2 px-8 py-4 border border-steel-600 hover:border-steel-400 text-white font-semibold rounded-xl transition-all hover:bg-white/5"
          >
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
}
