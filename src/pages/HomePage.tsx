import { ArrowRight, CheckCircle2, MessagesSquare, Radar, Sparkles } from 'lucide-react'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { ProductPreview } from '../components/ProductPreview'
import type { Page } from '../types'

export function HomePage({ onLogin, onNavigate }: { onLogin: () => void; onNavigate: (page: Page) => void }) {
  return (
    <main>
      <section className="hero section">
        <div className="hero__orb hero__orb--one" /><div className="hero__orb hero__orb--two" />
        <div className="container hero__grid">
          <div className="hero__copy">
            <Badge>Customer signal, minus the spreadsheet</Badge>
            <h1>Build what matters.<br /><span>Skip what doesn’t.</span></h1>
            <p>Scopebird gathers customer requests, finds the patterns, and helps your team prioritize with evidence instead of whoever spoke last.</p>
            <div className="hero__actions">
              <Button size="large" onClick={onLogin}>Start for free <ArrowRight size={18} /></Button>
              <Button size="large" variant="secondary" onClick={() => onNavigate('product')}>See how it works</Button>
            </div>
            <div className="hero__proof"><span><CheckCircle2 /> No card required</span><span><CheckCircle2 /> Setup in 4 minutes</span></div>
          </div>
          <ProductPreview />
        </div>
      </section>

      <section className="customer-strip">
        <div className="container"><span>Trusted by teams who have enough tabs open</span><div className="customer-logos"><b>NORTH/STAR</b><b>acme</b><b>QUARRY</b><b>daylight</b><b>OWL LABS</b></div></div>
      </section>

      <section className="section feature-section">
        <div className="container">
          <div className="section-heading"><span className="eyebrow">From noise to next step</span><h2>Your roadmap needs evidence,<br />not another opinion.</h2><p>Capture the messy input. Scopebird does the sorting, connecting, and politely pointing out what matters.</p></div>
          <div className="feature-grid">
            <Card className="feature-card"><span className="feature-icon"><MessagesSquare /></span><span className="feature-number">01</span><h3>Collect every request</h3><p>Bring feedback from calls, support, Slack, and forms into one calm, searchable inbox.</p></Card>
            <Card className="feature-card feature-card--dark"><span className="feature-icon"><Radar /></span><span className="feature-number">02</span><h3>Spot the signal</h3><p>Group duplicate ideas and see which themes connect to revenue, retention, and actual humans.</p></Card>
            <Card className="feature-card"><span className="feature-icon"><Sparkles /></span><span className="feature-number">03</span><h3>Decide with confidence</h3><p>Share clear priorities with your team. Retire the “I have a feeling” framework gracefully.</p></Card>
          </div>
        </div>
      </section>

      <section className="section cta-section"><div className="container cta-box"><div><Badge tone="blue">A clearer roadmap awaits</Badge><h2>Your customers are already telling you what to build.</h2><p>Scopebird just makes them easier to hear.</p></div><Button size="large" onClick={onLogin}>Start listening <ArrowRight size={18} /></Button></div></section>
    </main>
  )
}
