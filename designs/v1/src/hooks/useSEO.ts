import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const siteName = 'ERAM Hydraulics';
const defaultDescription = 'ERAM Hydraulics — Engineering Hydraulic Excellence. Saudi Arabia\'s trusted hydraulic engineering company specializing in offshore, marine, industrial, and mobile hydraulic systems.';
const defaultKeywords = 'hydraulics, hydraulic cylinders, power packs, hydraulic pumps, hydraulic motors, hydraulic valves, Saudi Arabia, Dammam, Riyadh, offshore hydraulics, marine hydraulics, industrial hydraulics, ERAM Hydraulics';

export function useSEO({ title, description = defaultDescription, keywords = defaultKeywords }: SEOProps = {}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${siteName}` : `${siteName} | Engineering Hydraulic Excellence`;
    document.title = fullTitle;

    const setMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      let tag = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('keywords', keywords);
    setMeta('og:title', fullTitle, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:site_name', siteName, 'property');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);
  }, [title, description, keywords]);
}
