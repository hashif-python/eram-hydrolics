import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  MapPin, Phone, Mail, Clock, Send,
  CheckCircle2, Building2,
} from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import { Reveal } from '@/components/Reveal';
import { services } from '@/data/services';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

type SubmitState = 'idle' | 'success';

export function Contact() {
  useSEO({
    title: 'Contact Us',
    description: 'Contact ERAM Hydraulics in Dammam and Riyadh. Request quotations, schedule service, or get technical support for your hydraulic systems.',
  });

  const location = useLocation();
  const passedState = location.state as { service?: string; product?: string } | null;

  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: passedState?.service || passedState?.product || '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>('idle');

  useEffect(() => {
    if (passedState?.service || passedState?.product) {
      const prefill = passedState.service || passedState.product || '';
      setForm((prev) => ({
        ...prev,
        service: prefill,
        message: prev.message || (passedState.product ? `I would like to request a quote for: ${passedState.product}` : ''),
      }));
    }
  }, [passedState]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[+\d\s\-()]{7,}$/.test(form.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!form.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Please provide at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // No database or backend is required. Open the visitor's email client
    // with the enquiry prefilled, without pretending an email was sent.
    const subject = `ERAM Hydraulics Enquiry${form.service ? ` - ${form.service}` : ''}`;
    const body = [
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Company: ${form.company.trim() || 'Not provided'}`,
      `Service: ${form.service || 'General enquiry'}`,
      '',
      form.message.trim(),
    ].join('\n');
    window.location.href = `mailto:info@eramhydraulics.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitState('success');
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const locations = [
    {
      city: 'Dammam',
      address: 'King Fahd Road, Dammam, Eastern Province, Saudi Arabia',
      phone: '+966 50 000 0000',
      hours: 'Sat – Thu, 8:00 AM – 6:00 PM',
    },
    {
      city: 'Riyadh',
      address: 'Olaya Street, Riyadh, Saudi Arabia',
      phone: '+966 50 000 0000',
      hours: 'Sat – Thu, 8:00 AM – 6:00 PM',
    },
  ];

  const inputClass = 'w-full px-4 py-3.5 bg-charcoal-800 border rounded-xl outline-none transition-colors text-white placeholder-steel-500';
  const validBorder = 'border-white/5 focus:border-eram-600/50';
  const errorBorder = 'border-eram-600/60 focus:border-eram-600';

  return (
    <div className="bg-charcoal-950">
      {/* Hero */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/37668423/pexels-photo-37668423.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Engineer inspecting machinery" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/90 to-charcoal-950/50" />
          <div className="absolute inset-0 bg-grid opacity-20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <Reveal>
            <span className="text-eram-500 text-sm font-semibold tracking-widest uppercase mb-4 block">Get In Touch</span>
            <h1 className="font-display text-display-xl font-bold text-white mb-6 max-w-4xl">
              Contact ERAM Hydraulics
            </h1>
            <p className="text-steel-300 text-xl leading-relaxed max-w-3xl">
              Request a quotation, schedule a service, or get expert technical support. Our engineering team is ready to assist with your hydraulic project requirements.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Form & info */}
      <section className="py-20 lg:py-28 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <Reveal className="lg:col-span-3">
              <div className="p-8 lg:p-10 bg-charcoal-800 rounded-3xl border border-white/5">
                <h2 className="font-display text-2xl font-bold text-white mb-2">Send Us an Enquiry</h2>
                <p className="text-steel-400 mb-8">Fill out the form to prepare an email to our team. No account or database is required.</p>

                {submitState === 'success' ? (
                  <div className="flex flex-col items-center text-center py-12">
                    <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-white mb-3">Your Email Draft Is Ready</h3>
                    <p className="text-steel-400 max-w-md mb-8">
                      Your email app should open with your enquiry prefilled. Review the draft and press Send in your email app. Nothing has been submitted to a server.
                    </p>
                    <button
                      onClick={() => setSubmitState('idle')}
                      className="px-6 py-3 bg-eram-600 hover:bg-eram-700 text-white font-semibold rounded-xl transition-colors"
                    >
                      Prepare Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">


                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-steel-300 text-sm font-medium mb-2">Full Name *</label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          className={`${inputClass} ${errors.name ? errorBorder : validBorder}`}
                          placeholder="John Doe"
                        />
                        {errors.name && <p className="text-eram-400 text-xs mt-1.5">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-steel-300 text-sm font-medium mb-2">Email *</label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          className={`${inputClass} ${errors.email ? errorBorder : validBorder}`}
                          placeholder="john@company.com"
                        />
                        {errors.email && <p className="text-eram-400 text-xs mt-1.5">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-steel-300 text-sm font-medium mb-2">Phone *</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          className={`${inputClass} ${errors.phone ? errorBorder : validBorder}`}
                          placeholder="+966 50 000 0000"
                        />
                        {errors.phone && <p className="text-eram-400 text-xs mt-1.5">{errors.phone}</p>}
                      </div>
                      <div>
                        <label className="block text-steel-300 text-sm font-medium mb-2">Company</label>
                        <input
                          type="text"
                          value={form.company}
                          onChange={(e) => handleChange('company', e.target.value)}
                          className={`${inputClass} ${validBorder}`}
                          placeholder="Your company (optional)"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-steel-300 text-sm font-medium mb-2">Service of Interest</label>
                      <select
                        value={form.service}
                        onChange={(e) => handleChange('service', e.target.value)}
                        className={`${inputClass} ${validBorder} cursor-pointer`}
                      >
                        <option value="">Select a service (optional)</option>
                        {services.map((s) => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                        <option value="Product Enquiry">Product Enquiry</option>
                        <option value="Partnership">Partnership Opportunity</option>
                        <option value="General">General Enquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-steel-300 text-sm font-medium mb-2">Message *</label>
                      <textarea
                        value={form.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        rows={5}
                        className={`${inputClass} ${errors.message ? errorBorder : validBorder} resize-none`}
                        placeholder="Describe your requirements, project details, or questions..."
                      />
                      {errors.message && <p className="text-eram-400 text-xs mt-1.5">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-eram-600 hover:bg-eram-700 disabled:bg-eram-600/50 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all hover:shadow-xl hover:shadow-eram-600/30"
                    >
                      Open Email Draft
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </Reveal>

            {/* Contact info */}
            <Reveal delay={2} className="lg:col-span-2">
              <div className="space-y-6">
                {locations.map((loc) => (
                  <div key={loc.city} className="p-6 bg-charcoal-800 rounded-2xl border border-white/5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-eram-600/15 rounded-lg flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-eram-400" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-white">{loc.city}</h3>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3 text-steel-400">
                        <MapPin className="w-4 h-4 text-eram-500 mt-0.5 flex-shrink-0" />
                        <span>{loc.address}</span>
                      </div>
                      <div className="flex items-center gap-3 text-steel-400">
                        <Phone className="w-4 h-4 text-eram-500 flex-shrink-0" />
                        <a href={`tel:${loc.phone.replace(/\s/g, '')}`} className="hover:text-eram-400 transition-colors">{loc.phone}</a>
                      </div>
                      <div className="flex items-center gap-3 text-steel-400">
                        <Clock className="w-4 h-4 text-eram-500 flex-shrink-0" />
                        <span>{loc.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="p-6 bg-charcoal-800 rounded-2xl border border-white/5">
                  <h3 className="font-display text-lg font-bold text-white mb-4">Other Ways to Reach Us</h3>
                  <div className="space-y-3">
                    <a href="mailto:info@eramhydraulics.com" className="flex items-center gap-3 text-steel-300 hover:text-eram-400 transition-colors">
                      <div className="w-9 h-9 bg-eram-600/15 rounded-lg flex items-center justify-center">
                        <Mail className="w-4 h-4 text-eram-400" />
                      </div>
                      info@eramhydraulics.com
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-0 bg-charcoal-900">
        <div className="max-w-7xl mx-auto px-6 pb-0">
          <Reveal>
            <div className="rounded-3xl overflow-hidden border border-white/5 h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d115758.123456789!2d50.103!3d26.4207!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49fcaf%3A0x0!2sDammam%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) contrast(0.8)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ERAM Hydraulics Dammam Location"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
