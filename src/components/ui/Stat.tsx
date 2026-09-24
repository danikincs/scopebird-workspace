import type { ReactNode } from 'react'

export function Stat({ icon, label, value, note, tone = 'blue' }: { icon?: ReactNode; label: string; value: string; note: string; tone?: string }) {
  return <div className="ui-stat"><span className={`stat-icon stat-icon--${tone}`}>{icon}</span><span><small>{label}</small><strong>{value}</strong><em>{note}</em></span></div>
}
