import { useEffect, useRef, useState, type FormEvent } from 'react'
import { Check, X } from 'lucide-react'
import { Button } from './ui/Button'
import { Logo } from './Logo'

export function LoginDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [email, setEmail] = useState('demo@scopebird.app')
  const [password, setPassword] = useState('definitely-a-real-password')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const dialog = dialogRef.current
    if (open && dialog && !dialog.open) dialog.showModal()
    if (!open && dialog?.open) dialog.close()
  }, [open])

  const submit = (event: FormEvent) => {
    event.preventDefault()
    if (email.trim() && password.trim()) setIsLoggedIn(true)
  }

  const close = () => {
    setIsLoggedIn(false)
    onClose()
  }

  return (
    <dialog ref={dialogRef} className="login-dialog" onClose={close} onClick={(event) => event.target === dialogRef.current && close()}>
      <button className="dialog-close" onClick={close} aria-label="Close login"><X size={20} /></button>
      {isLoggedIn ? (
        <div className="login-success">
          <span className="success-mark"><Check /></span>
          <h2>You’re in.</h2>
          <p>Your imaginary workspace is looking unusually organized.</p>
          <Button onClick={close} fullWidth>Enter workspace</Button>
        </div>
      ) : (
        <form className="login-form" onSubmit={submit}>
          <Logo compact />
          <div>
            <p className="eyebrow">Welcome back</p>
            <h2>Log in to Scopebird</h2>
            <p>We filled this in for the demo. Change it if you feel rebellious.</p>
          </div>
          <label>Email<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} autoFocus required /></label>
          <label>Password<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required /></label>
          <Button type="submit" size="large" fullWidth>Log in</Button>
          <small>Any non-empty email and password will work.</small>
        </form>
      )}
    </dialog>
  )
}
