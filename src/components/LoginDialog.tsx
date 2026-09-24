import { useState, type FormEvent } from 'react'
import { Button } from './ui/Button'
import { Logo } from './Logo'
import { Dialog } from './ui/Dialog'
import { FormField, Input } from './ui/Input'

export function LoginDialog({ open, onClose, onAuthenticated }: { open: boolean; onClose: () => void; onAuthenticated: (email: string) => void }) {
  const [email, setEmail] = useState('demo@scopebird.app')
  const [password, setPassword] = useState('definitely-a-real-password')
  const [mode, setMode] = useState<'login' | 'signup'>('login')

  const submit = (event: FormEvent) => {
    event.preventDefault()
    if (email.trim() && password.trim()) onAuthenticated(email.trim())
  }

  const close = () => {
    onClose()
  }

  return (
    <Dialog open={open} title={mode === 'login' ? 'Log in to Scopebird' : 'Create your workspace'} onClose={close}>
      <form className="login-form" onSubmit={submit}>
          <Logo compact />
          <div>
            <p className="eyebrow">{mode === 'login' ? 'Welcome back' : 'Start listening'}</p>
            <p>{mode === 'login' ? 'Your customer signal is waiting.' : 'Bring your customer requests into one calm place.'}</p>
          </div>
          <FormField label="Email" hint="Use any email for this demo"><Input type="email" value={email} onChange={(event) => setEmail(event.target.value)} autoFocus required /></FormField>
          <FormField label="Password"><Input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required /></FormField>
          <Button type="submit" size="large" fullWidth>{mode === 'login' ? 'Log in' : 'Create workspace'}</Button>
          <small>Any non-empty email and password will work.</small>
          <button type="button" className="login-switch" onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}>
            {mode === 'login' ? 'New to Scopebird? Create an account' : 'Already have an account? Log in'}
          </button>
      </form>
    </Dialog>
  )
}
