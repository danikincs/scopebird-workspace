import { ArrowUpRight, CircleUserRound, MessageSquareText, Sparkles } from 'lucide-react'
import { Badge } from './ui/Badge'

const requests = [
  { name: 'Acme Co.', text: 'Could we export reports as PDF?', votes: 28, color: 'violet' },
  { name: 'Northstar', text: 'A Slack digest would save our Fridays.', votes: 21, color: 'orange' },
  { name: 'Owl Labs', text: 'Please add custom dashboard views.', votes: 17, color: 'blue' },
]

export function ProductPreview() {
  return (
    <div className="product-preview" aria-label="Scopebird dashboard preview">
      <div className="preview__rail">
        <span className="mini-logo">s.</span>
        <span className="rail-dot rail-dot--active" />
        <span className="rail-dot" />
        <span className="rail-dot" />
        <CircleUserRound className="rail-user" size={22} />
      </div>
      <div className="preview__main">
        <div className="preview__top"><span>Request inbox</span><Badge tone="neutral">Q3 planning</Badge></div>
        <div className="preview__heading">
          <div><span className="eyebrow">Customer signal</span><h3>What should we build next?</h3></div>
          <button aria-label="Open report"><ArrowUpRight size={18} /></button>
        </div>
        <div className="request-list">
          {requests.map((request) => (
            <div className="request-row" key={request.name}>
              <span className={`request-avatar request-avatar--${request.color}`}>{request.name[0]}</span>
              <div><strong>{request.text}</strong><span>{request.name} · 2h ago</span></div>
              <span className="vote-count"><MessageSquareText size={14} /> {request.votes}</span>
            </div>
          ))}
        </div>
        <div className="insight-card">
          <span className="insight-icon"><Sparkles size={18} /></span>
          <div><span>Scopebird insight</span><strong>Exports affect $42k in active opportunities</strong></div>
        </div>
      </div>
    </div>
  )
}
