import { ArrowRight, Check } from 'lucide-react'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'

const plans = [
  { name: 'Nest', price: '$0', description: 'For small teams proving there is, in fact, a pattern.', features: ['2 team members', '100 requests', 'Public feedback board', 'Basic themes'], action: 'Start free' },
  { name: 'Flock', price: '$24', description: 'For product teams ready to connect feedback to decisions.', features: ['Unlimited members', 'Unlimited requests', 'AI theme detection', 'Revenue context', 'Slack and email imports'], action: 'Start 14-day trial', featured: true },
  { name: 'Migration', price: '$79', description: 'For growing teams with more products and more opinions.', features: ['Everything in Flock', 'Multiple workspaces', 'Priority support', 'Custom segments', 'Advanced exports'], action: 'Choose Migration' },
]

export function PricingPage({ onLogin }: { onLogin: () => void }) {
  return (
    <main>
      <section className="subhero pricing-hero section"><div className="container"><Badge>Simple pricing</Badge><h1>Fewer pricing puzzles.<br />More product clarity.</h1><p>Start free. Upgrade when the customer evidence becomes too compelling to ignore.</p></div></section>
      <section className="pricing-section"><div className="container pricing-grid">
        {plans.map((plan) => <Card className={`pricing-card ${plan.featured ? 'pricing-card--featured' : ''}`} key={plan.name}>{plan.featured && <span className="popular-label">Most popular</span>}<h2>{plan.name}</h2><p>{plan.description}</p><div className="price"><strong>{plan.price}</strong><span>{plan.price !== '$0' ? '/ month' : 'forever'}</span></div><Button variant={plan.featured ? 'primary' : 'secondary'} fullWidth size="large" onClick={onLogin}>{plan.action} <ArrowRight size={17} /></Button><ul>{plan.features.map((feature) => <li key={feature}><Check size={17} />{feature}</li>)}</ul></Card>)}
      </div></section>
      <section className="section faq-section"><div className="container"><div className="section-heading"><span className="eyebrow">Good questions</span><h2>Before you ask finance.</h2></div><div className="faq-grid"><div><h3>Can I cancel anytime?</h3><p>Yes. No calls, no awkward exit survey, no carrier pigeon demanding closure.</p></div><div><h3>Is there a free trial?</h3><p>Flock and Migration include 14 days free. Nest stays free for as long as you need it.</p></div><div><h3>Do you charge per seat?</h3><p>No. Product clarity improves when everyone can see the evidence, so seats are unlimited on paid plans.</p></div><div><h3>Is this a real checkout?</h3><p>Not today. This demo lets you explore every interaction without meeting a payment form.</p></div></div></div></section>
    </main>
  )
}
