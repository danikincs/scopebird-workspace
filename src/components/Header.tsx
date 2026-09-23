import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import type { Page } from '../types'
import { Button } from './ui/Button'
import { Logo } from './Logo'

type HeaderProps = {
  activePage: Page
  onNavigate: (page: Page) => void
  onLogin: () => void
}

export function Header({ activePage, onNavigate, onLogin }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navigate = (page: Page) => {
    onNavigate(page)
    setIsOpen(false)
  }

  return (
    <header className="site-header">
      <div className="container header__inner">
        <button className="logo-button" onClick={() => navigate('home')} aria-label="Go to home page">
          <Logo />
        </button>
        <button className="menu-button" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation" aria-expanded={isOpen}>
          {isOpen ? <X /> : <Menu />}
        </button>
        <nav className={`nav ${isOpen ? 'nav--open' : ''}`} aria-label="Main navigation">
          <button className={activePage === 'product' ? 'nav__link nav__link--active' : 'nav__link'} onClick={() => navigate('product')}>How it works</button>
          <button className={activePage === 'pricing' ? 'nav__link nav__link--active' : 'nav__link'} onClick={() => navigate('pricing')}>Pricing</button>
          <div className="nav__actions">
            <Button variant="ghost" onClick={onLogin}>Log in</Button>
            <Button onClick={onLogin}>Start for free</Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
