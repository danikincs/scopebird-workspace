import { Bird } from 'lucide-react'

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="logo" aria-label="Scopebird">
      <span className="logo__mark"><Bird size={20} strokeWidth={2.4} /></span>
      {!compact && <span>scopebird</span>}
    </span>
  )
}
