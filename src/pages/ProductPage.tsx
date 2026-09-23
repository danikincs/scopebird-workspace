import { ArrowRight, GitMerge, Inbox, LineChart, WandSparkles } from 'lucide-react'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'

const steps = [
  { number: '01', icon: Inbox, title: 'Connect the places feedback hides', text: 'Forward emails, connect support tools, paste interview notes, or use a public request form. Everything lands in one inbox.' },
  { number: '02', icon: GitMerge, title: 'Let duplicates become patterns', text: 'Scopebird groups related requests and links them to accounts, segments, and revenue. The fifteenth “tiny request” finally looks important.' },
  { number: '03', icon: LineChart, title: 'Prioritize with the full picture', text: 'Compare reach, strategic fit, effort, and commercial impact before moving an idea onto the roadmap.' },
]

export function ProductPage({ onLogin }: { onLogin: () => void }) {
  return (
    <main>
      <section className="subhero section"><div className="container"><Badge tone="blue">How Scopebird works</Badge><h1>From “someone mentioned it”<br />to a decision you can defend.</h1><p>One clear workflow for collecting customer evidence, finding patterns, and deciding what earns a spot on the roadmap.</p><Button size="large" onClick={onLogin}>Try the workflow <ArrowRight size={18} /></Button></div></section>
      <section className="section steps-section"><div className="container steps-list">
        {steps.map((step, index) => <Card className="step-card" key={step.number}><div className="step-card__copy"><span className="step-number">{step.number}</span><span className="feature-icon"><step.icon /></span><h2>{step.title}</h2><p>{step.text}</p></div><div className={`step-visual step-visual--${index + 1}`}><WandSparkles /><strong>{index === 0 ? '12 new requests' : index === 1 ? '4 themes detected' : 'Priority: High'}</strong><span>{index === 0 ? 'Nicely contained. For now.' : index === 1 ? 'The pattern is patterning.' : 'Evidence beats volume.'}</span></div></Card>)}
      </div></section>
      <section className="section quote-section"><div className="container"><blockquote>“We replaced three spreadsheets, one weekly argument, and a board called FINAL-final-v2.”</blockquote><p>Jamie Lin, Head of Product at Northstar</p></div></section>
    </main>
  )
}
