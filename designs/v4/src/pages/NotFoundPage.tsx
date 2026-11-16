import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

export default function NotFoundPage() {
  useDocumentMeta('Page Not Found', 'The page you are looking for could not be found.');

  return (
    <section className="flex min-h-[70vh] items-center py-24">
      <div className="container-page max-w-2xl">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-4 font-serif text-4xl font-bold md:text-5xl">Page not found</h1>
        <p className="mt-6 text-lg leading-[1.7] text-steel-700">
          The page you requested may have moved. Use the menu above or return to the home page.
        </p>
        <Link to="/" className="btn-primary mt-10">
          Return to Home <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
