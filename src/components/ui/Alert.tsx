import type { ReactNode } from 'react'

export function Alert({ tone = 'info', title, children }: { tone?: 'info' | 'success' | 'error'; title: string; children: ReactNode }) {
  return <div className={`alert alert--${tone}`} role="status"><strong>{title}</strong><span>{children}</span></div>
}

export function Toast({ message, onClose }: { message: string; onClose?: () => void }) {
  return <div className="toast" role="status"><span>{message}</span>{onClose && <button onClick={onClose} aria-label="Dismiss notification">×</button>}</div>
}
