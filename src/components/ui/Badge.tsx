import type { ReactNode } from 'react'

export function Badge({ children, tone = 'lime' }: { children: ReactNode; tone?: 'lime' | 'blue' | 'neutral' }) {
  return <span className={`badge badge--${tone}`}>{children}</span>
}
