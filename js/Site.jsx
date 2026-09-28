(function(){
const { Logo, Button, IconButton, Icon, Eyebrow } = window.SolutionGroupDesignSystem_441f31;
const A = 'assets/logos';

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services', children: ['Operations', 'Automation', 'Engineering', 'Chemical Management', 'Solids Management'] },
  { id: 'industries', label: 'Industries', children: ['Case Studies'] },
  { id: 'careers', label: 'Careers', children: ['Apprenticeships'] },
  { id: 'about', label: 'About' },
  { id: 'news', label: 'Company News' },
  { id: 'contact', label: 'Contact' }
];

function SiteHeader({ route, go }) {
  const [open, setOpen] = React.useState(null);
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 30, background: 'rgba(255,255,255,.94)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '10px var(--gutter)', minHeight: 78, display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
        <a href="#" onClick={(e) => { e.preventDefault(); go('home'); }} style={{ display: 'flex', flex: '0 0 auto' }}>
          <Logo variant="main" color="navy-blue" width={176} assetBase={A} />
        </a>
        <nav style={{ display: 'flex', gap: 'var(--space-4)', marginLeft: 'auto', alignItems: 'center', flexWrap: 'wrap' }}>
          {NAV.map((n) => (
            <div key={n.id} style={{ position: 'relative' }} onMouseEnter={() => setOpen(n.id)} onMouseLeave={() => setOpen(null)}>
              <a href="#" onClick={(e) => { e.preventDefault(); go(n.id); }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 4, whiteSpace: 'nowrap', fontSize: 'var(--text-body-sm)', fontWeight: route === n.id ? 'var(--weight-semibold)' : 'var(--weight-regular)', color: route === n.id ? 'var(--sg-navy)' : 'var(--text-muted)', textDecoration: 'none', padding: '18px 0', borderBottom: '2px solid ' + (route === n.id ? 'var(--sg-blue)' : 'transparent') }}>
                {n.label}{n.children ? <Icon name="chevron-down" size={13} /> : null}
              </a>
              {n.children && open === n.id ? (
                <div style={{ position: 'absolute', top: '100%', left: -14, minWidth: 210, background: 'var(--sg-white)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-lg)', padding: 'var(--space-2) 0', display: 'flex', flexDirection: 'column' }}>
                  {n.children.map((c) => (
                    <a key={c} href="#" onClick={(e) => { e.preventDefault(); go(n.id); }} style={{ padding: '9px 18px', fontSize: 'var(--text-body-sm)', color: 'var(--text-body)', textDecoration: 'none' }}>{c}</a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>
        <span style={{ flex: '0 0 auto' }}><Button size="sm" onClick={() => go('contact')}>Work With Us</Button></span>
      </div>
    </header>
  );
}

function SiteFooter({ go }) {
  const link = (label, r) => <a key={label} href="#" onClick={(e) => { e.preventDefault(); if (r) go(r); }} style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-inverse-muted)', textDecoration: 'none' }}>{label}</a>;
  const head = (t) => <span style={{ fontSize: 'var(--text-micro)', fontWeight: 'var(--weight-semibold)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--blue-400)' }}>{t}</span>;
  return (
    <footer style={{ background: 'var(--surface-navy-deep)', color: 'var(--text-inverse)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-16) var(--gutter) var(--space-8)', display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 'var(--space-10)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
          <Logo variant="tagline" color="white-blue" width={250} assetBase={A} />
          <p style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-inverse-muted)', maxWidth: 330 }}>For over 20 years, Solution Group has redefined what's possible in water and wastewater management.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          {head('Services')}
          {['Operations', 'Automation', 'Engineering', 'Chemical Management', 'Solids Management'].map((l) => link(l, 'services'))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          {head('Company')}
          {link('Industries', 'industries')}
          {link('Case Studies', 'industries')}
          {link('Careers', 'careers')}
          {link('About', 'about')}
          {link('Company News', 'news')}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          {head('Contact')}
          <span style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-inverse-muted)' }}>(463) 265-5166</span>
          <span style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-inverse-muted)', lineHeight: 'var(--leading-normal)' }}>6239 S. East St., Ste. F<br />Indianapolis, IN 46227</span>
          <span><Button size="sm" variant="inverse-outline" onClick={() => go('contact')}>Work With Us</Button></span>
        </div>
      </div>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-5) var(--gutter)', borderTop: '1px solid var(--border-inverse)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-inverse-muted)' }}>© 2026 Solution Group. All Rights Reserved.</span>
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <IconButton icon="linkedin" label="LinkedIn" variant="inverse" size="sm" />
          <IconButton icon="mail" label="Email us" variant="inverse" size="sm" />
        </div>
      </div>
    </footer>
  );
}

function Section({ children, tone = 'light', style }) {
  const tones = {
    light: { background: 'var(--surface-page)' },
    subtle: { background: 'var(--surface-subtle)' },
    accent: { background: 'var(--surface-accent)' },
    navy: { background: 'var(--surface-navy)', color: 'var(--text-inverse)' },
    gradient: { background: 'var(--gradient-navy-blue)', color: 'var(--text-inverse)' }
  }[tone];
  return (
    <section style={{ ...tones, ...style }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--section-y) var(--gutter)' }}>{children}</div>
    </section>
  );
}

function SectionHead({ eyebrow, title, lead, tone = 'dark', align = 'left', max = 680 }) {
  const inverse = tone === 'light';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: max, margin: align === 'center' ? '0 auto' : undefined, textAlign: align }}>
      {eyebrow ? <span style={{ alignSelf: align === 'center' ? 'center' : 'flex-start' }}><Eyebrow tone={inverse ? 'light' : 'blue'}>{eyebrow}</Eyebrow></span> : null}
      <h2 style={{ fontSize: 'var(--text-h2)', fontWeight: 'var(--weight-semibold)', color: inverse ? 'var(--sg-white)' : 'var(--sg-navy)' }}>{title}</h2>
      {lead ? <p style={{ fontSize: 'var(--text-lead)', lineHeight: 'var(--leading-normal)', color: inverse ? 'var(--text-inverse-muted)' : 'var(--text-body)' }}>{lead}</p> : null}
    </div>
  );
}

function PageHero({ eyebrow, title, lead }) {
  return (
    <section style={{ background: 'var(--gradient-navy-blue)', color: 'var(--text-inverse)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-16) var(--gutter)' }}>
        <Eyebrow tone="light">{eyebrow}</Eyebrow>
        <h1 style={{ marginTop: 'var(--space-4)', maxWidth: 900, fontSize: 'var(--text-h1)', lineHeight: 'var(--leading-tight)', fontWeight: 'var(--weight-semibold)', color: 'var(--sg-white)' }}>{title}</h1>
        {lead ? <p style={{ marginTop: 'var(--space-5)', maxWidth: 680, fontSize: 'var(--text-lead)', lineHeight: 'var(--leading-normal)', color: 'var(--sg-light-blue)' }}>{lead}</p> : null}
      </div>
    </section>
  );
}

function PhotoSlot({ label, height = 200, radius = 'var(--radius-md)' }) {
  return (
    <div style={{ height, borderRadius: radius, background: 'var(--surface-accent)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, color: 'var(--text-muted)' }}>
      <Icon name="image" size={18} />
      <span style={{ fontSize: 'var(--text-caption)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase' }}>{label}</span>
    </div>
  );
}

Object.assign(window, { SiteHeader, SiteFooter, Section, SectionHead, PageHero, PhotoSlot, NAV, ASSETS: A });
})();
