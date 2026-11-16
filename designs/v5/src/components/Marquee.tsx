import { services } from '@/data/siteContent';

const items = [...services.map((service) => service.title), 'ISO 9001:2015', 'Hydraulic', 'Pneumatic', 'Lubrication'];

export default function Marquee() {
  const track = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-ink-950 bg-signal-400 py-5 text-ink-950">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {track.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center font-display text-2xl font-bold uppercase">
            <span className="px-6">{item}</span>
            <span aria-hidden className="h-2 w-2 rotate-45 bg-ink-950/50" />
          </span>
        ))}
      </div>
    </div>
  );
}
