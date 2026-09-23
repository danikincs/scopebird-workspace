import { useEffect, useState } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { LoginDialog } from './components/LoginDialog'
import { HomePage } from './pages/HomePage'
import { PricingPage } from './pages/PricingPage'
import { ProductPage } from './pages/ProductPage'
import type { Page } from './types'

const pathToPage = (path: string): Page => path === '/pricing' ? 'pricing' : path === '/how-it-works' ? 'product' : 'home'
const pageToPath: Record<Page, string> = { home: '/', product: '/how-it-works', pricing: '/pricing' }

export function App() {
  const [page, setPage] = useState<Page>(() => pathToPage(window.location.pathname))
  const [loginOpen, setLoginOpen] = useState(false)

  useEffect(() => {
    const updatePage = () => setPage(pathToPage(window.location.pathname))
    window.addEventListener('popstate', updatePage)
    return () => window.removeEventListener('popstate', updatePage)
  }, [])

  const navigate = (nextPage: Page) => {
    window.history.pushState({}, '', pageToPath[nextPage])
    setPage(nextPage)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app-shell">
      <Header activePage={page} onNavigate={navigate} onLogin={() => setLoginOpen(true)} />
      {page === 'home' && <HomePage onLogin={() => setLoginOpen(true)} onNavigate={navigate} />}
      {page === 'product' && <ProductPage onLogin={() => setLoginOpen(true)} />}
      {page === 'pricing' && <PricingPage onLogin={() => setLoginOpen(true)} />}
      <Footer onNavigate={navigate} />
      <LoginDialog open={loginOpen} onClose={() => setLoginOpen(false)} />
    </div>
  )
}
