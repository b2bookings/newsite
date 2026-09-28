(function(){
const { Card, Button, Field, Input, Select, Checkbox, Radio, Alert, Icon, Eyebrow } = window.SolutionGroupDesignSystem_441f31;

function ContactScreen() {
  const [sent, setSent] = React.useState(false);
  return (
    <Section>
      <div style={{ display: 'grid', gridTemplateColumns: '1.15fr .85fr', gap: 'var(--space-16)', alignItems: 'start' }}>
        <div>
          <Eyebrow>Get started</Eyebrow>
          <h1 style={{ marginTop: 'var(--space-4)', fontSize: 'var(--text-h1)' }}>Request an assessment</h1>
          <p style={{ marginTop: 'var(--space-5)', fontSize: 'var(--text-lead)', color: 'var(--text-body)', maxWidth: 560 }}>
            Tell us about the facility. An engineer will follow up within one business day to schedule the site walk.
          </p>

          {sent ? (
            <Alert tone="ok" title="Request received" style={{ marginTop: 'var(--space-8)' }} onDismiss={() => setSent(false)}>
              We'll be in touch within one business day. Reference SG-2026-0418.
            </Alert>
          ) : null}

          <Card padding="lg" style={{ marginTop: 'var(--space-8)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)' }}>
              <Field label="Full name" required htmlFor="n"><Input id="n" placeholder="Dana Mercer" /></Field>
              <Field label="Work email" required htmlFor="e"><Input id="e" icon="mail" placeholder="you@utility.gov" /></Field>
              <Field label="Facility name" required htmlFor="fa" hint="As it appears on the discharge permit"><Input id="fa" placeholder="Riverside WWTP" /></Field>
              <Field label="Phone" htmlFor="p"><Input id="p" icon="phone" placeholder="(000) 000-0000" /></Field>
              <Field label="Facility type" htmlFor="t"><Select id="t" placeholder="Select one" options={['Municipal', 'Food & beverage', 'Metal finishing', 'Pharmaceutical', 'Other industrial']} /></Field>
              <Field label="Average daily flow" htmlFor="fl" hint="MGD"><Input id="fl" placeholder="2.4" /></Field>
              <div style={{ gridColumn: '1 / -1' }}>
                <Field label="What prompted the inquiry?"><Radio name="reason" direction="row" defaultValue="Compliance risk" options={['Compliance risk', 'Staffing gap', 'Equipment condition', 'New permit']} /></Field>
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <Field label="Anything we should know before the walk?" htmlFor="msg"><Input id="msg" multiline rows={4} placeholder="Recent exceedances, upcoming permit renewal, process changes…" /></Field>
              </div>
              <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <Checkbox label="Include an OptiClear instrumentation review" description="Adds roughly two hours to the site visit" defaultChecked />
                <Checkbox label="Send me the monthly compliance briefing" />
              </div>
              <div style={{ gridColumn: '1 / -1', display: 'flex', gap: 'var(--space-3)', alignItems: 'center' }}>
                <Button size="lg" iconAfter="arrow-right" onClick={() => setSent(true)}>Submit request</Button>
                <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>Or call 24/7 service at (800) 000-0000</span>
              </div>
            </div>
          </Card>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
          <Card tone="navy" padding="lg">
            <h3 style={{ fontSize: 'var(--text-h4)', color: 'var(--sg-white)' }}>What the assessment covers</h3>
            <div style={{ marginTop: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              {[['clipboard-check', 'Site operations baseline'], ['gauge', 'Equipment condition and instrumentation'], ['shield-check', 'Regulatory exposure and permit review'], ['list-ordered', 'Prioritised recommendations']].map(([i, t]) => (
                <div key={t} style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center', color: 'var(--sg-light-blue)' }}>
                  <Icon name={i} size={20} />
                  <span style={{ fontSize: 'var(--text-body-sm)' }}>{t}</span>
                </div>
              ))}
            </div>
            <p style={{ marginTop: 'var(--space-6)', fontSize: 'var(--text-caption)', color: 'var(--text-inverse-muted)' }}>No pricing, no commercial terms, the assessment is a written baseline. Commercial discussion comes after.</p>
          </Card>
          <Card tone="accent" padding="lg">
            <h3 style={{ fontSize: 'var(--text-h4)' }}>Emergency?</h3>
            <p style={{ marginTop: 'var(--space-3)', fontSize: 'var(--text-body-sm)', color: 'var(--text-body)' }}>For a process upset or release in progress, call dispatch directly. Crews are on call around the clock.</p>
            <div style={{ marginTop: 'var(--space-5)' }}><Button variant="outline" icon="phone">(800) 000-0000</Button></div>
          </Card>
        </div>
      </div>
    </Section>
  );
}
Object.assign(window, { ContactScreen });
})();
