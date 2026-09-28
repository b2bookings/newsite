(function(){
const { Card, Badge, Button, Icon, Tabs, Eyebrow, WaveDivider } = window.SolutionGroupDesignSystem_441f31;

const DETAIL = {
  'Operations & maintenance': {
    icon: 'wrench',
    lead: 'Licensed operators, preventive maintenance, and the reporting that keeps a permit clean.',
    points: ['Certified Class I–IV operators on staff', 'Preventive and predictive maintenance programs', 'Chemical management and inventory', 'Monthly operating reports and trend review', 'Staff augmentation or full contract operations']
  },
  'Automation & instrumentation': {
    icon: 'cpu',
    lead: 'Controls and instrumentation built so the data you act on is data you can trust.',
    points: ['PLC and SCADA design, build, and integration', 'Instrument calibration and validation', 'OptiClear telemetry and remote monitoring', 'Alarm rationalisation and escalation logic', 'Control panel fabrication and retrofit']
  },
  'Compliance & reporting': {
    icon: 'clipboard-check',
    lead: 'Permit obligations tracked and filed by people who read the regulations for a living.',
    points: ['NPDES and pretreatment permit management', 'Sampling programs and chain of custody', 'DMR preparation and submission', 'Regulatory correspondence and audit support', 'Compliance gap assessments']
  },
  'Emergency response': {
    icon: 'siren',
    lead: 'On-call crews and rental treatment capacity for upsets that cannot wait.',
    points: ['24/7 dispatch', 'Mobile treatment and temporary systems', 'Process upset diagnosis and recovery', 'Spill and release support', 'Post-event root cause reporting']
  }
};

function ServicesScreen({ go }) {
  const names = Object.keys(DETAIL);
  const [active, setActive] = React.useState(names[0]);
  const d = DETAIL[active];
  return (
    <div>
      <section style={{ background: 'var(--surface-navy)', color: 'var(--text-inverse)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-16) var(--gutter)' }}>
          <Eyebrow tone="light">Services</Eyebrow>
          <h1 style={{ marginTop: 'var(--space-4)', maxWidth: 720, fontSize: 'var(--text-h1)', color: 'var(--sg-white)' }}>From operations to automation to compliance</h1>
          <p style={{ marginTop: 'var(--space-5)', maxWidth: 620, fontSize: 'var(--text-lead)', color: 'var(--sg-light-blue)' }}>One contract, one accountable team, and a single record of what happened at your plant.</p>
        </div>
      </section>

      <Section>
        <Tabs tabs={names.map((n) => ({ value: n, label: n, icon: DETAIL[n].icon }))} value={active} onChange={setActive} />
        <div style={{ marginTop: 'var(--space-10)', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 'var(--space-12)', alignItems: 'start' }}>
          <div>
            <h2 style={{ fontSize: 'var(--text-h2)' }}>{active}</h2>
            <p style={{ marginTop: 'var(--space-4)', fontSize: 'var(--text-lead)', color: 'var(--text-body)' }}>{d.lead}</p>
            <div style={{ marginTop: 'var(--space-8)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {d.points.map((p) => (
                <div key={p} style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--sg-blue)', marginTop: 2 }}><Icon name="check" size={18} strokeWidth={2.25} /></span>
                  <span style={{ fontSize: 'var(--text-body-md)', color: 'var(--text-body)' }}>{p}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 'var(--space-8)' }}>
              <Button iconAfter="arrow-right" onClick={() => go('contact')}>Talk to an engineer</Button>
            </div>
          </div>
          <Card tone="subtle" padding="lg" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
            <img src="assets/imagery/plant-operators.png" alt="Operators reviewing a clarifier" style={{ display: 'block', width: '100%', height: 230, objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} />
            <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
              <Badge tone="light">Municipal</Badge><Badge tone="light">Food &amp; beverage</Badge><Badge tone="light">Metal finishing</Badge><Badge tone="light">Pharma</Badge>
            </div>
            <p style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>Every engagement starts with a written assessment: operations, equipment condition, and regulatory exposure, prioritised.</p>
          </Card>
        </div>
      </Section>

      <WaveDivider tone="light" mode="fill-edge" height={170} />
      <Section tone="accent" style={{ marginTop: -1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: 'var(--space-6)' }}>
          {[['shield-check', 'Safety first', 'Site-specific JSAs and a culture that stops work when something is wrong.'], ['file-check', 'Documented', 'Everything we do lands in a report you can hand to a regulator.'], ['users', 'One team', 'The same engineers who assess your plant are the ones who run it.']].map(([i, t, b]) => (
            <div key={t} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <span style={{ color: 'var(--sg-navy)' }}><Icon name={i} size={26} /></span>
              <h3 style={{ fontSize: 'var(--text-h4)' }}>{t}</h3>
              <p style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-body)' }}>{b}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
Object.assign(window, { ServicesScreen });
})();
