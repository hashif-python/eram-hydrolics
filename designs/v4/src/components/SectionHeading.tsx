interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
}: SectionHeadingProps) {
  const isDark = tone === 'dark';
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className={`eyebrow mb-4 ${isDark ? 'text-gold-300' : ''}`}>{eyebrow}</p>}
      <h2 className={`font-serif text-3xl font-bold md:text-4xl ${isDark ? 'text-white' : 'text-navy-900'}`}>{title}</h2>
      <span
        className={`mt-6 block h-0.5 w-16 bg-gold-500 ${align === 'center' ? 'mx-auto' : ''}`}
        aria-hidden="true"
      />
      {description && (
        <p className={`mt-6 text-lg leading-[1.6] ${isDark ? 'text-steel-200' : 'text-steel-700'}`}>{description}</p>
      )}
    </div>
  );
}
