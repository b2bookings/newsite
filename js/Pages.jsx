(function(){
const { Button, Card, Icon, Badge, Eyebrow } = window.SolutionGroupDesignSystem_441f31;

const INDUSTRIES = [
  { icon: 'milk', title: 'Dairy & cheese', body: 'High-strength whey and wash-down loads, direct-discharge permits, and seasonal production swings.' },
  { icon: 'cookie', title: 'Food & beverage', body: 'Pretreatment ahead of municipal surcharge, fats and solids handling, and CIP chemistry.' },
  { icon: 'factory', title: 'Industrial manufacturing', body: 'Process water, cooling systems, and permit reporting under state and federal jurisdiction.' },
  { icon: 'building-2', title: 'Municipal systems', body: 'Contract operations, lagoon management, and cleanout planning for small and mid-size utilities.' },
  { icon: 'droplets', title: 'Agriculture & protein', body: 'Rendering, protein processing, and agricultural wastewater with heavy biosolids production.' },
  { icon: 'waves', title: 'Environmental & remediation', body: 'Contaminated sediment, pond closure, shoreline protection, and site decommissioning.' }
];

const CASES = [
  { client: 'Agropur', place: 'Lake Nordon, South Dakota', head: 'Restoring stability to support growth', stat: '$750K', statLabel: 'recurring annual OPEX savings', body: 'Daily NOVs cut from 26 in 2023 to 0 in 2025, wetland effluent volume down 75%, and $20 million in planned capital upgrades avoided.' },
  { client: 'Dairy State Cheese', place: 'Rudolph, Wisconsin', head: 'From a Notice of Violation to operational confidence', stat: '+68%', statLabel: 'membrane flow rate in two weeks', body: 'Aluminum consumption down 31% and COD loading down 26% while the plant ramped from 1.0 to 3.5 million gallons of milk per day.' }
];

function IndustriesScreen({ go }) {
  return (
    <div>
      <PageHero eyebrow="Industries" title="The plants we run, and the permits behind them" lead="Solution Group operates treatment systems for producers whose wastewater is as complex as their process. Same operators, same reporting discipline, whatever the industry." />
      <Section>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'var(--space-5)' }}>
          {INDUSTRIES.map((i) => (
            <Card key={i.title} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'var(--surface-accent)', color: 'var(--sg-navy)' }}><Icon name={i.icon} size={22} /></span>
              <h3 style={{ marginTop: 'var(--space-2)', fontSize: 'var(--text-h4)' }}>{i.title}</h3>
              <p style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)', lineHeight: 'var(--leading-normal)' }}>{i.body}</p>
            </Card>
          ))}
        </div>
      </Section>
      <Section tone="subtle">
        <SectionHead eyebrow="Case Studies" title="What the work looks like on site" />
        <div style={{ marginTop: 'var(--space-10)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)' }}>
          {CASES.map((c) => (
            <Card key={c.client} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <Badge>{c.client}</Badge>
                <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>{c.place}</span>
              </div>
              <h3 style={{ fontSize: 'var(--text-h4)', lineHeight: 'var(--leading-snug)' }}>{c.head}</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-3)' }}>
                <span style={{ fontSize: 40, fontWeight: 'var(--weight-semibold)', color: 'var(--sg-navy)', letterSpacing: 'var(--tracking-heading)' }}>{c.stat}</span>
                <span style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>{c.statLabel}</span>
              </div>
              <p style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)', lineHeight: 'var(--leading-normal)' }}>{c.body}</p>
              <span style={{ marginTop: 'auto', paddingTop: 'var(--space-2)' }}><Button variant="outline" size="sm" iconAfter="arrow-right" onClick={() => go('contact')}>Read the case study</Button></span>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}

const ROLES = [
  { title: 'Wastewater Operator', place: 'Multiple sites, Midwest', type: 'Full time' },
  { title: 'Site Manager, Industrial WWTP', place: 'Monona, Iowa', type: 'Full time' },
  { title: 'Laboratory Technician', place: 'Lake Nordon, South Dakota', type: 'Full time' },
  { title: 'Electro-Mechanical Technician', place: 'Indianapolis, Indiana', type: 'Full time' },
  { title: 'Dewatering Crew Lead', place: 'Caledonia, Michigan', type: 'Full time' }
];

function CareersScreen({ go }) {
  return (
    <div>
      <PageHero eyebrow="Careers" title="Interested in joining the Solution Group team?" lead="See open positions and learn about our apprenticeship program." />
      <Section>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 'var(--space-16)', alignItems: 'start' }}>
          <div>
            <SectionHead eyebrow="Open positions" title="Where we are hiring" />
            <div style={{ marginTop: 'var(--space-8)', display: 'flex', flexDirection: 'column' }}>
              {ROLES.map((r) => (
                <div key={r.title} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-6)', padding: 'var(--space-5) 0', borderTop: '1px solid var(--border-subtle)' }}>
                  <div>
                    <h3 style={{ fontSize: 'var(--text-h5)', color: 'var(--sg-navy)' }}>{r.title}</h3>
                    <p style={{ marginTop: 4, fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>{r.place} · {r.type}</p>
                  </div>
                  <Button variant="outline" size="sm" iconAfter="arrow-right" onClick={() => go('contact')}>Apply</Button>
                </div>
              ))}
            </div>
          </div>
          <Card style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <Eyebrow>Apprenticeships</Eyebrow>
            <h3 style={{ fontSize: 'var(--text-h4)' }}>Licensed in two years, paid from day one</h3>
            <p style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)', lineHeight: 'var(--leading-normal)' }}>Our apprenticeship program takes people with no water background and puts them on a licensed operator track: classroom hours, supervised field time, and exam support, working alongside operators who have run these plants for decades.</p>
            <PhotoSlot label="Apprentices on site" height={170} />
            <Button iconAfter="arrow-right" onClick={() => go('contact')}>Get Started</Button>
          </Card>
        </div>
      </Section>
    </div>
  );
}

const VALUES = [
  { title: 'PEOPLE First, Always', body: 'Our people are our greatest strength. We foster a culture of respect and continuous learning, empowering every team member.' },
  { title: 'Integrity in Every Drop', body: 'We act with honesty, accountability, and transparency in every decision. Integrity drives trust and ensures we meet the highest standards of safety, compliance, and ethical conduct.' },
  { title: 'Excellence Through Expertise', body: "We hold ourselves to a higher technical standard. Our team's certifications, licenses, and experience mean we don't just meet compliance, we help our clients stay ahead of it as regulations and technology evolve." }
];

function AboutScreen({ go }) {
  return (
    <div>
      <PageHero eyebrow="About" title="Twenty years of doing water different" lead="Solution Group is a full-service, technology-driven water and wastewater management company headquartered in Indianapolis, with operators and crews working at plants nationwide." />
      <Section>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 'var(--space-16)', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
            <SectionHead eyebrow="Our story" title="Built from a family of brands" lead="Solution Group brings operations, automation, engineering, chemical management and solids management under one accountable team, so a plant has one relationship instead of five vendors." />
            <p style={{ fontSize: 'var(--text-body)', color: 'var(--text-muted)', lineHeight: 'var(--leading-relaxed)' }}>With WaterSolve now part of Solution Group, that reach extends to the solids side of the business: geotextile tube dewatering, dredging, lagoon cleanouts and environmental remediation, for industrial plants and municipal systems alike.</p>
            <div style={{ display: 'flex', gap: 'var(--space-10)', marginTop: 'var(--space-2)' }}>
              {[['20+', 'years operating'], ['6', 'service lines'], ['24/7', 'on-call support']].map(([n, l]) => (
                <div key={l} style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: 32, fontWeight: 'var(--weight-semibold)', color: 'var(--sg-navy)', letterSpacing: 'var(--tracking-heading)' }}>{n}</span>
                  <span style={{ fontSize: 'var(--text-caption)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{l}</span>
                </div>
              ))}
            </div>
          </div>
          <PhotoSlot label="Team photograph" height={380} />
        </div>
      </Section>
      <Section tone="gradient">
        <SectionHead eyebrow="Our values" tone="light" title="The difference isn't simply in what we do, it's in how we do it." max={760} />
        <div style={{ marginTop: 'var(--space-12)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: 'var(--space-6)' }}>
          {VALUES.map((v) => (
            <div key={v.title} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', paddingTop: 'var(--space-5)', borderTop: '2px solid var(--sg-blue)' }}>
              <h3 style={{ fontSize: 'var(--text-h4)', color: 'var(--sg-white)' }}>{v.title}</h3>
              <p style={{ fontSize: 'var(--text-body-sm)', lineHeight: 'var(--leading-relaxed)', color: 'var(--blue-300)' }}>{v.body}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section tone="accent">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-10)', flexWrap: 'wrap' }}>
          <h2 style={{ fontSize: 'var(--text-h2)', maxWidth: 560 }}>Still Curious?</h2>
          <Button size="lg" iconAfter="arrow-right" onClick={() => go('contact')}>Get In Touch</Button>
        </div>
      </Section>
    </div>
  );
}

const POSTS = [
  { date: 'July 28, 2026', title: 'Solution Group Acquires WaterSolve, Expanding National Dewatering and Environmental Remediation Capabilities', body: 'INDIANAPOLIS, IN – July 27, 2026 – Solution Group, a national leader in water and wastewater management, has completed the acquisition of WaterSolve, a Caledonia,' },
  { date: 'April 3, 2026', title: "Solution Group's OptiClear Platform Earns Shortlisting in 2026 WEX Global Awards", body: 'All-in-one reporting and monitoring solution recognized in the Innovation in Digital Transformation of the Water Sector category INDIANAPOLIS (April 3, 2026), Solution Group, a' },
  { date: 'April 2, 2026', title: "Solution Group's OptiClear Technology Platform Recognized Globally for Real-Time Alerts, Saving Companies Thousands of Dollars", body: 'The Challenge SCADA tools are ubiquitous across the industrial sector, tracking and reporting operations in real time. As Solution Group grew its operations and brought' }
];

function NewsScreen({ go }) {
  const [lead, ...rest] = POSTS;
  return (
    <div>
      <PageHero eyebrow="Company News" title="Announcements, awards and field notes" />
      <Section>
        <Card style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-8)', alignItems: 'center' }}>
          <PhotoSlot label="Feature image" height={260} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <span style={{ fontSize: 'var(--text-caption)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{lead.date}</span>
            <h2 style={{ fontSize: 'var(--text-h3)', lineHeight: 'var(--leading-snug)', color: 'var(--sg-navy)' }}>{lead.title}</h2>
            <p style={{ fontSize: 'var(--text-body)', color: 'var(--text-muted)', lineHeight: 'var(--leading-normal)' }}>{lead.body}</p>
            <span><Button variant="outline" iconAfter="arrow-right" onClick={() => go('contact')}>Read More</Button></span>
          </div>
        </Card>
        <div style={{ marginTop: 'var(--space-8)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)' }}>
          {rest.map((p) => (
            <Card key={p.date} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <span style={{ fontSize: 'var(--text-caption)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{p.date}</span>
              <h3 style={{ fontSize: 'var(--text-h5)', lineHeight: 'var(--leading-snug)', color: 'var(--sg-navy)' }}>{p.title}</h3>
              <p style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)', lineHeight: 'var(--leading-normal)' }}>{p.body}</p>
              <span style={{ marginTop: 'auto', paddingTop: 'var(--space-3)', display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 'var(--text-body-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--sg-navy)' }}>Read More <Icon name="arrow-right" size={15} /></span>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}

Object.assign(window, { IndustriesScreen, CareersScreen, AboutScreen, NewsScreen });
})();
