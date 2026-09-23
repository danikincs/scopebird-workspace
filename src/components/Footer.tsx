import type { Page } from '../types'
import { Logo } from './Logo'

export function Footer({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <Logo />
          <p>Signal for product teams. Noise for nobody.</p>
        </div>
        <div className="footer__links">
          <button onClick={() => onNavigate('product')}>How it works</button>
          <button onClick={() => onNavigate('pricing')}>Pricing</button>
          <span>© 2026 Scopebird</span>
        </div>
      </div>
    </footer>
  )
}
