import type { ReactNode } from 'react'

export function Tabs({ items, value, onChange }: { items: string[]; value: string; onChange: (value: string) => void }) {
  return <div className="tabs" role="tablist">{items.map((item) => <button key={item} role="tab" aria-selected={value === item} className={value === item ? 'tabs__tab tabs__tab--active' : 'tabs__tab'} onClick={() => onChange(item)}>{item}</button>)}</div>
}

export function TabPanel({ children }: { children: ReactNode }) { return <div className="tabs__panel">{children}</div> }
