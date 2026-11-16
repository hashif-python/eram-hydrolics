import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface Crumb {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
  tone?: 'light' | 'dark';
  className?: string;
}

export default function Breadcrumbs({ items, tone = 'dark', className = '' }: BreadcrumbsProps) {
  const isLight = tone === 'light';
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className={`flex flex-wrap items-center gap-2 text-sm ${isLight ? 'text-steel-200' : 'text-steel-600'}`}>
        <li>
          <Link to="/" className={`transition hover:underline ${isLight ? 'hover:text-white' : 'hover:text-navy-900'}`}>
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            <ChevronRight className="h-3.5 w-3.5 opacity-70" aria-hidden="true" />
            {item.to ? (
              <Link to={item.to} className={`transition hover:underline ${isLight ? 'hover:text-white' : 'hover:text-navy-900'}`}>
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className={isLight ? 'text-white' : 'text-navy-900'}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
