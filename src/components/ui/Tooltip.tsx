import type { ReactNode } from 'react'

export function Tooltip({ label, children }: { label: string; children: ReactNode }) {
  return <span className="tooltip"><span className="tooltip__trigger">{children}</span><span className="tooltip__content" role="tooltip">{label}</span></span>
}
