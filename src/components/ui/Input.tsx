import type { InputHTMLAttributes, ReactNode } from 'react'

export function Input({ className = '', ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={`ui-input ${className}`} {...props} />
}

export function FormField({ label, hint, error, children }: { label: string; hint?: string; error?: string; children: ReactNode }) {
  return <label className="form-field"><span>{label}</span>{children}<small className={error ? 'form-field__error' : ''}>{error || hint}</small></label>
}
