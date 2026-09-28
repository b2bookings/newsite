(function(){
const { Logo, Button, Card, Icon, Eyebrow, WaveDivider } = window.SolutionGroupDesignSystem_441f31;

const SERVICES = [
  { icon: 'wrench', title: 'Operations', tagline: 'We Make Water Work Smarter.', body: "Operations aren't just about keeping the lights on, they're about making systems run cleaner, faster, and more efficiently every single day. With Solution Group, you don't just operate, you outperform." },
  { icon: 'cpu', title: 'Automation', tagline: 'We Turn Real-Time Data into Real-World Results.', body: 'Our proprietary OptiClear™ automation platform puts the power back in your hands. Our automation is powered by data and built for people to make their jobs better.', route: 'opticlear' },
  { icon: 'ruler', title: 'Engineering', tagline: 'From Blueprint to Breakthrough.', body: 'Our in-house engineering team delivers solutions grounded in operations that are built to last. We design systems the way operators wish they were built.' },
  { icon: 'beaker', title: 'Chemical Management', tagline: 'Cleaner Chemistry. Smarter Strategy.', body: "Chemical use is often the largest line item in a water system and one of the biggest opportunities for savings. We don't just supply chemicals, we optimize your entire program." },
  { icon: 'layers', title: 'Solids Management', tagline: 'The Solids Side, Now In House.', body: 'With WaterSolve now part of Solution Group, lagoon cleanouts, geotextile tube dewatering, dredging and remediation are handled by the same team you already know.' }
];

const WHY = [
  { title: 'Safety', body: 'Our safety-first culture ensures every process and procedure meets or exceeds safety standards.' },
  { title: 'Compliance', body: "We stay ahead of changing environmental and discharge regulations to ensure you're always compliant." },
  { title: 'Cost Efficiency', body: 'Your system works, but we optimize it to perform better, saving you money and energy while reducing waste.' },
  { title: 'Our Team', body: 'Everything we do is driven by our team culture that challenges our team to think and act differently.' }
];

const NEWS = [
  { date: 'July 28, 2026', title: 'Solution Group Acquires WaterSolve, Expanding National Dewatering and Environmental Remediation Capabilities', body: 'INDIANAPOLIS, IN – July 27, 2026 – Solution Group, a national leader in water and wastewater management, has completed the acquisition of WaterSolve, a Caledonia,' },
  { date: 'April 3, 2026', title: "Solution Group's OptiClear Platform Earns Shortlisting in 2026 WEX Global Awards", body: 'All-in-one reporting and monitoring solution recognized in the Innovation in Digital Transformation of the Water Sector category INDIANAPOLIS (April 3, 2026), Solution Group, a' },
  { date: 'April 2, 2026', title: "Solution Group's OptiClear Technology Platform Recognized Globally for Real-Time Alerts, Saving Companies Thousands of Dollars", body: 'The Challenge SCADA tools are ubiquitous across the industrial sector, tracking and reporting operations in real time. As Solution Group grew its operations and brought' }
];

const CLIENTS = ['Fairlife', 'Coca-Cola', 'PepsiCo', 'Frito-Lay', 'Agropur', 'Nestlé'];

function HomeScreen({ go }) {
  return (
    <div>
      <section style={{ position: 'relative', background: 'var(--surface-navy-deep)', color: 'var(--text-inverse)', overflow: 'hidden' }}>
        <img src="assets/imagery/plant-operators.png" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: .32 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg,rgba(0,38,59,.96) 0%,rgba(0,59,92,.82) 48%,rgba(0,59,92,.35) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-24) var(--gutter) var(--space-20)' }}>
          <h1 style={{ maxWidth: 900, fontSize: 'var(--text-display)', lineHeight: 'var(--leading-tight)', letterSpacing: 'var(--tracking-display)', fontWeight: 'var(--weight-semibold)', color: 'var(--sg-white)' }}>We Do Water Different</h1>
          <p style={{ marginTop: 'var(--space-6)', maxWidth: 680, fontSize: 'var(--text-lead)', lineHeight: 'var(--leading-normal)', color: 'var(--sg-light-blue)' }}>
            For over 20 years, Solution Group has redefined what's possible in water and wastewater management. As a full-service, technology-driven team, we go beyond basic compliance to create <strong style={{ color: 'var(--sg-white)', fontWeight: 'var(--weight-semibold)' }}>smarter, safer, cost-effective</strong> systems that drive performance.
          </p>
          <div style={{ marginTop: 'var(--space-10)', display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
            <Button variant="inverse" size="lg" iconAfter="arrow-right" onClick={() => go('services')}>Explore Our Solutions</Button>
            <Button variant="inverse-outline" size="lg" onClick={() => go('contact')}>Get In Touch</Button>
          </div>
        </div>
        <WaveDivider tone="white" height={150} style={{ position: 'relative', marginBottom: -1 }} />
      </section>

      <Section>
        <SectionHead title="Complete Water Management Solutions" lead="From operations to engineering, we deliver integrated solutions that make your water systems run smoothly, sustainably, and well within regulatory compliance." max={760} />
        <div style={{ marginTop: 'var(--space-12)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'var(--space-5)' }}>
          {SERVICES.map((s) => (
            <Card key={s.title} interactive onClick={() => go(s.route || 'services')} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 46, height: 46, borderRadius: 'var(--radius-md)', background: 'var(--surface-accent)', color: 'var(--sg-navy)' }}><Icon name={s.icon} size={24} /></span>
              <h3 style={{ marginTop: 'var(--space-2)', fontSize: 'var(--text-h4)' }}>{s.title}</h3>
              <p style={{ fontSize: 'var(--text-body-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--sg-blue)' }}>{s.tagline}</p>
              <p style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)', lineHeight: 'var(--leading-normal)' }}>{s.body}</p>
              <span style={{ marginTop: 'auto', paddingTop: 'var(--space-3)', display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 'var(--text-body-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--sg-navy)' }}>Learn More <Icon name="arrow-right" size={15} /></span>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="subtle">
        <SectionHead title="Why Choose Solution Group?" align="center" max={640} />
        <div style={{ marginTop: 'var(--space-12)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: 'var(--space-6)' }}>
          {WHY.map((w) => (
            <div key={w.title} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <PhotoSlot label={w.title} height={180} />
              <h3 style={{ fontSize: 'var(--text-h4)', color: 'var(--sg-navy)' }}>{w.title}</h3>
              <p style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)', lineHeight: 'var(--leading-normal)' }}>{w.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="gradient">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-10)', flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 620 }}>
            <h2 style={{ fontSize: 'var(--text-h2)', color: 'var(--sg-white)' }}>Still Curious?</h2>
            <p style={{ marginTop: 'var(--space-4)', fontSize: 'var(--text-lead)', color: 'var(--sg-light-blue)' }}>Explore all of our solutions and get in touch with Solution Group to transform your water systems today.</p>
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
            <Button variant="inverse" size="lg" onClick={() => go('services')}>Explore Our Solutions</Button>
            <Button variant="inverse-outline" size="lg" onClick={() => go('contact')}>Get In Touch</Button>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead eyebrow="Company News" title="What we have been working on" />
        <div style={{ marginTop: 'var(--space-10)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'var(--space-5)' }}>
          {NEWS.map((n) => (
            <Card key={n.date} interactive onClick={() => go('news')} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <span style={{ fontSize: 'var(--text-caption)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{n.date}</span>
              <h3 style={{ fontSize: 'var(--text-h5)', lineHeight: 'var(--leading-snug)', color: 'var(--sg-navy)' }}>{n.title}</h3>
              <p style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)', lineHeight: 'var(--leading-normal)' }}>{n.body}</p>
              <span style={{ marginTop: 'auto', paddingTop: 'var(--space-3)', display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 'var(--text-body-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--sg-navy)' }}>Read More <Icon name="arrow-right" size={15} /></span>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="accent">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-10)', flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 620 }}>
            <Eyebrow>Careers</Eyebrow>
            <h2 style={{ marginTop: 'var(--space-3)', fontSize: 'var(--text-h2)' }}>Interested in joining the Solution Group team?</h2>
            <p style={{ marginTop: 'var(--space-4)', fontSize: 'var(--text-lead)', color: 'var(--text-body)' }}>See open positions and learn about our apprenticeship program.</p>
          </div>
          <Button size="lg" iconAfter="arrow-right" onClick={() => go('careers')}>Get Started</Button>
        </div>
      </Section>

      <Section>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: 'var(--space-6)', alignItems: 'center' }}>
          {CLIENTS.map((c) => (
            <div key={c} style={{ height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-subtle)', color: 'var(--text-muted)', fontSize: 'var(--text-body-sm)', fontWeight: 'var(--weight-semibold)', letterSpacing: 'var(--tracking-wide)' }}>{c}</div>
          ))}
        </div>
      </Section>
    </div>
  );
}
Object.assign(window, { HomeScreen });
})();
