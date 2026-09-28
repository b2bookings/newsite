(function(){
const { Logo, Card, Button, Badge, Icon, Eyebrow, MetricTile, StatusPill, Sparkline, DataTable, WaveDivider } = window.SolutionGroupDesignSystem_441f31;

const CAPS = [
  { icon: 'radio', title: 'Real-time telemetry', body: 'Calibrated instruments reporting continuously, not a clipboard reading taken twice a shift.' },
  { icon: 'bell', title: 'Rationalised alarms', body: 'Thresholds tied to permit limits and setpoints, with escalation that reaches a human.' },
  { icon: 'trending-up', title: 'Trends that mean something', body: 'Process history alongside the limit line, so drift is visible before it is an exceedance.' },
  { icon: 'file-text', title: 'Reporting built in', body: 'The same data stream that runs the plant produces the monthly report.' }
];

function OptiClearScreen({ go }) {
  return (
    <div>
      <section style={{ background: 'var(--gradient-deep-light)', color: 'var(--text-inverse)' }}>
        <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: 'var(--space-20) var(--gutter)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-12)', alignItems: 'center' }}>
          <div>
            <Logo variant="opticlear" color="white-blue" width={280} assetBase="assets/logos" />
            <p style={{ marginTop: 'var(--space-6)', fontSize: 'var(--text-lead)', lineHeight: 'var(--leading-normal)', color: 'var(--sg-white)', maxWidth: 520 }}>
              OptiClear is the technology behind our promise. As Solution Group's proprietary automation and instrumentation platform, it delivers real-time data and full operational transparency, a true force multiplier for our clients.
            </p>
            <p style={{ marginTop: 'var(--space-4)', fontSize: 'var(--text-body-md)', color: 'var(--blue-200)', maxWidth: 520 }}>
              It's a core part of how Solution Group delivers on being a true partner, not just a service provider.
            </p>
            <div style={{ marginTop: 'var(--space-8)', display: 'flex', gap: 'var(--space-3)' }}>
              <Button variant="inverse" iconAfter="arrow-right" onClick={() => go('contact')}>Book a walkthrough</Button>
              <Button variant="inverse-outline">Client login</Button>
            </div>
          </div>
          <Card style={{ padding: 0, overflow: 'hidden', boxShadow: 'var(--shadow-xl)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'var(--space-4) var(--space-5)', borderBottom: '1px solid var(--border-subtle)' }}>
              <span style={{ fontSize: 'var(--text-body-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--sg-navy)' }}>Riverside WWTP</span>
              <StatusPill status="ok" />
            </div>
            <div style={{ padding: 'var(--space-5)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)' }}>
              <MetricTile label="Effluent pH" value="7.2" icon="beaker" delta="+0.1" trend="up" />
              <MetricTile label="Turbidity" value="1.8" unit="NTU" icon="eye" delta="−0.4" trend="down" />
            </div>
            <div style={{ padding: '0 var(--space-5) var(--space-5)' }}>
              <div style={{ padding: 'var(--space-4)', background: 'var(--surface-subtle)', borderRadius: 'var(--radius-md)' }}>
                <span style={{ fontSize: 'var(--text-micro)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', fontWeight: 'var(--weight-semibold)', color: 'var(--text-muted)' }}>Turbidity · 6h vs permit limit</span>
                <div style={{ marginTop: 'var(--space-3)' }}><Sparkline data={[1.4, 1.6, 1.5, 1.9, 1.7, 1.8]} width={420} height={70} limit={5} /></div>
              </div>
            </div>
          </Card>
        </div>
        <WaveDivider tone="white" height={140} style={{ marginBottom: -1 }} />
      </section>

      <Section>
        <SectionHead eyebrow="Capabilities" title="Operational transparency, not another dashboard" lead="Every number in OptiClear traces back to a calibrated instrument and a documented setpoint." />
        <div style={{ marginTop: 'var(--space-12)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: 'var(--space-5)' }}>
          {CAPS.map((c) => (
            <Card key={c.title} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <span style={{ color: 'var(--sg-blue)' }}><Icon name={c.icon} size={26} /></span>
              <h3 style={{ fontSize: 'var(--text-h4)' }}>{c.title}</h3>
              <p style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>{c.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="subtle">
        <SectionHead eyebrow="Coverage" title="Every site in one view" />
        <div style={{ marginTop: 'var(--space-8)' }}>
          <DataTable
            columns={[
              { key: 'site', label: 'Site' },
              { key: 'type', label: 'Type' },
              { key: 'status', label: 'Status', render: (r) => <StatusPill status={r.status} /> },
              { key: 'ph', label: 'pH', align: 'right' },
              { key: 'flow', label: 'Flow (MGD)', align: 'right' }
            ]}
            rows={[
              { id: 1, site: 'Riverside WWTP', type: 'Municipal', status: 'ok', ph: '7.2', flow: '2.41' },
              { id: 2, site: 'Cedar Mill Industrial', type: 'Food & beverage', status: 'alarm', ph: '5.9', flow: '0.86' },
              { id: 3, site: 'North Plant', type: 'Metal finishing', status: 'watch', ph: '8.4', flow: '1.12' },
              { id: 4, site: 'Harbor Pretreatment', type: 'Municipal', status: 'offline', ph: 'n/a', flow: 'n/a' }
            ]}
          />
        </div>
      </Section>

      <Section tone="navy">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-10)', flexWrap: 'wrap' }}>
          <div style={{ maxWidth: 620 }}>
            <Logo variant="opticlear-lockup" width={300} assetBase="assets/logos" />
            <p style={{ marginTop: 'var(--space-6)', fontSize: 'var(--text-lead)', color: 'var(--sg-light-blue)' }}>Use the combined lockup when introducing the brand for the first time or where the relationship to Solution Group should be clearly communicated.</p>
          </div>
          <Button variant="inverse" size="lg" iconAfter="arrow-right" onClick={() => go('contact')}>Request an assessment</Button>
        </div>
      </Section>
    </div>
  );
}
Object.assign(window, { OptiClearScreen });
})();
