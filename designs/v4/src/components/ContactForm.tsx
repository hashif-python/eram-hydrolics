import { useState, type FormEvent } from 'react';
import { Send } from 'lucide-react';
import { company } from '@/data/company';
import { services } from '@/data/services';

const topics = ['General enquiry', 'Products', ...services.map((s) => s.title), 'Other'];

interface ContactFormProps {
  initialTopic?: string;
}

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
}

type Errors = Partial<Record<keyof FormState, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Please enter a valid email address.';
  if (values.message.trim().length < 10) errors.message = 'Please describe your requirement (at least 10 characters).';
  return errors;
}

export default function ContactForm({ initialTopic }: ContactFormProps) {
  const [values, setValues] = useState<FormState>({
    name: '',
    company: '',
    email: '',
    phone: '',
    topic: initialTopic && topics.includes(initialTopic) ? initialTopic : 'General enquiry',
    message: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [prepared, setPrepared] = useState(false);

  const update = (field: keyof FormState) => (event: { target: { value: string } }) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    setPrepared(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    const lines = [
      `Name: ${values.name.trim()}`,
      `Company: ${values.company.trim() || '-'}`,
      `Email: ${values.email.trim()}`,
      `Phone: ${values.phone.trim() || '-'}`,
      `Topic: ${values.topic}`,
      '',
      values.message.trim(),
    ];
    const subject = `Website enquiry: ${values.topic}`;
    const href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
    window.location.href = href;
    setPrepared(true);
  };

  const fieldClass = (field: keyof FormState) =>
    `field ${errors[field] ? 'border-error-500 focus:border-error-500 focus:ring-error-100' : ''}`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6" aria-label="Enquiry form">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-navy-900">
            Full name <span className="text-error-500">*</span>
          </label>
          <input id="name" name="name" autoComplete="name" value={values.name} onChange={update('name')} className={fieldClass('name')} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} />
          {errors.name && <p id="name-error" className="mt-2 text-sm text-error-700">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-semibold text-navy-900">Company</label>
          <input id="company" name="company" autoComplete="organization" value={values.company} onChange={update('company')} className={fieldClass('company')} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-navy-900">
            Email <span className="text-error-500">*</span>
          </label>
          <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={update('email')} className={fieldClass('email')} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} />
          {errors.email && <p id="email-error" className="mt-2 text-sm text-error-700">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-navy-900">Phone</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" value={values.phone} onChange={update('phone')} className={fieldClass('phone')} />
        </div>
      </div>

      <div>
        <label htmlFor="topic" className="mb-2 block text-sm font-semibold text-navy-900">Enquiry about</label>
        <select id="topic" name="topic" value={values.topic} onChange={update('topic')} className={fieldClass('topic')}>
          {topics.map((topic) => (
            <option key={topic} value={topic}>{topic}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-navy-900">
          Requirement <span className="text-error-500">*</span>
        </label>
        <textarea id="message" name="message" rows={6} value={values.message} onChange={update('message')} placeholder="Equipment type, location, and what you need from us" className={fieldClass('message')} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} />
        {errors.message && <p id="message-error" className="mt-2 text-sm text-error-700">{errors.message}</p>}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn-primary">
          <Send className="h-4 w-4" aria-hidden="true" />
          Prepare Email Enquiry
        </button>
        <p className="text-sm text-steel-600" role="status">
          {prepared
            ? 'Your email app should open with the message ready. Press send there to reach our team.'
            : 'This opens your email app with your details filled in. Nothing is sent from this website.'}
        </p>
      </div>
    </form>
  );
}
