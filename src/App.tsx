import { ArrowUpRight, ArrowRight, Layers3, Monitor, MoveUpRight, ExternalLink, CheckCircle2, LayoutGrid, Menu, X, Maximize2 } from 'lucide-react';
import { useState } from 'react';

const variants = [
  { id: 1, label: 'Classic Corporate', tagline: 'Timeless engineering credibility', description: 'Traditional navigation, confident typography, and a reliable industrial identity.', category: 'Corporate', hue: 'blue', accent: '#1d527d' },
  { id: 2, label: 'Industrial Showcase', tagline: 'Image-led engineering presence', description: 'Rich industrial visuals and structured service navigation built for commercial buyers.', category: 'Industrial', hue: 'cyan', accent: '#006f88' },
  { id: 3, label: 'Clean & Minimal', tagline: 'A refined, direct presentation', description: 'Less visual noise with clear priorities, straightforward content, and comfortable reading.', category: 'Minimal', hue: 'slate', accent: '#445d70' },
  { id: 4, label: 'Enterprise Engineering', tagline: 'Complete multi-page experience', description: 'Deep product and service pages, rich details, and a more comprehensive corporate structure.', category: 'Enterprise', hue: 'gold', accent: '#bc873c' },
  { id: 5, label: 'Modern Dark', tagline: 'Bold, premium industrial design', description: 'A distinctive high-contrast direction with dark backgrounds and confident large-format content.', category: 'Dark', hue: 'ink', accent: '#29b4c8' },
];

function DesignCard({ item }: { item: (typeof variants)[number] }) {
  const url = `/styles/v${item.id}/`;
  return (
    <article className={`design-card design-${item.hue}`}>
      <div className="preview-frame">
        <div className="preview-bar"><span className="browser-dots"><i/><i/><i/></span><span className="browser-address">eramhydraulics.com / concept-{String(item.id).padStart(2, '0')}</span><ExternalLink size={13}/></div>
        <div className="preview-window">
          <iframe title={`${item.label} website preview`} src={url} loading="lazy" tabIndex={-1} aria-hidden="true" />
          <a href={url} target="_blank" rel="noopener noreferrer" className="preview-overlay" aria-label={`Open ${item.label} in new tab`}><span>Explore design <ArrowUpRight size={16}/></span></a>
        </div>
      </div>
      <div className="design-card-body">
        <div className="card-heading"><span className="design-index">0{item.id}</span><span className="card-pill">{item.category}</span></div>
        <h3>{item.label}</h3>
        <p className="tagline">{item.tagline}</p>
        <p className="card-description">{item.description}</p>
        <a className="open-preview" href={url} target="_blank" rel="noopener noreferrer">View full website <ArrowUpRight size={17}/></a>
      </div>
    </article>
  );
}

function App() {
 const [mobileMenu, setMobileMenu] = useState(false);
 return <div className="site-shell">
   <div className="top-stripe" />
   <header className="site-header">
     <div className="container header-inner">
       <a className="logo" href="/" aria-label="ERAM website showcase home"><span className="official-logo-bg"><img src="/eram-official-logo.png" width="213" height="71" alt="ERAM Hydraulics official logo" className="official-logo" /></span><span className="logo-separator"/><span className="showcase-name">Design Showcase</span></a>
       <nav className={mobileMenu ? 'nav open' : 'nav'} aria-label="Main navigation"><a href="#concepts" onClick={() => setMobileMenu(false)}>Design concepts</a><a href="#presentation" onClick={() => setMobileMenu(false)}>About this presentation</a><a className="nav-cta" href="/styles/v1/" target="_blank" rel="noopener noreferrer">View first concept <ArrowUpRight size={15}/></a></nav>
       <button className="menu-toggle" onClick={() => setMobileMenu(!mobileMenu)} aria-label={mobileMenu ? 'Close menu':'Open menu'}>{mobileMenu ? <X size={23}/> : <Menu size={23}/>}</button>
     </div>
   </header>
   <main>
     <section className="hero">
       <div className="hero-grid-bg" />
       <div className="container hero-content">
         <div className="hero-copy"><p className="eyebrow"><span className="eyebrow-line"/> EXCLUSIVE CLIENT PRESENTATION <span className="eyebrow-serial">/ 2026</span></p><h1>One company.<br/><em>Five directions.</em></h1><p className="hero-intro">Explore five distinct website concepts for ERAM Hydraulics. Compare the styles, experience the full pages, and choose the direction that represents your brand best.</p><div className="hero-actions"><a className="button-primary" href="#concepts">Explore the designs <ArrowRight size={18}/></a><span className="hero-hint"><Monitor size={17}/> Open any concept in a new tab</span></div></div>
         <div className="hero-aside"><div className="aside-label">THE COLLECTION <span>01—05</span></div><div className="stack-art"><div className="art-block a"/><div className="art-block b"/><div className="art-block c"/><div className="art-block d"/><div className="art-block e"/><div className="stack-art-caption"><span><img src="/eram-official-logo.png" alt="ERAM Hydraulics logo" className="stack-official-logo" /></span><small>WEB CONCEPTS<br/>2026</small></div></div><div className="aside-footer">ENGINEERING AN EXCEPTIONAL<br/>DIGITAL FIRST IMPRESSION <MoveUpRight size={16}/></div></div>
       </div>
       <div className="container hero-bottom"><span>WEB EXPERIENCE CONCEPTS</span><div><span>5 DISTINCT STYLES</span><span className="divider-dot"/><span>1 SHARED PURPOSE</span></div></div>
     </section>
     <section id="concepts" className="concepts-section"><div className="container"><div className="section-intro"><div><p className="section-kicker">THE DESIGN COLLECTION <span>— 05 CONCEPTS</span></p><h2>Choose your <span>digital identity.</span></h2></div><p>Each concept is a complete, browsable React website. Select a design below to view it in a separate browser tab.</p></div><div className="design-grid">{variants.map(item=><DesignCard item={item} key={item.id}/>)}</div><div className="collection-note"><CheckCircle2 size={18}/><span>All five concepts are included in this presentation. Click a card preview or its button to open the live design in a new tab.</span></div></div></section>
     <section id="presentation" className="presentation-section"><div className="container presentation-inner"><div><p className="section-kicker">DESIGNED FOR YOUR DECISION</p><h2>Explore freely.<br/><em>Decide confidently.</em></h2></div><div className="presentation-features"><div><LayoutGrid size={23}/><span><strong>Five original styles</strong><small>Compare different creative directions side by side.</small></span></div><div><Maximize2 size={23}/><span><strong>Full website previews</strong><small>Browse each version as a real standalone website.</small></span></div><div><Layers3 size={23}/><span><strong>One convenient dashboard</strong><small>All designs are accessible from one application.</small></span></div></div></div></section>
   </main>
   <footer className="footer"><div className="container footer-inner"><div className="footer-brand"><img src="/eram-official-logo.png" alt="ERAM Hydraulics logo" className="footer-official-logo"/><span className="footer-separator"/> DESIGN PRESENTATION</div><span>Prepared for design review · Five website concepts</span><a href="#concepts">Back to concepts ↑</a></div></footer>
 </div>
}

export default App;
