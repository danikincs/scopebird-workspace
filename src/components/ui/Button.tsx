import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
}

export function Button({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const classes = ['button', `button--${variant}`, `button--${size}`, fullWidth ? 'button--full' : '', className]
    .filter(Boolean)
    .join(' ')

  return <button className={classes} {...props}>{children}</button>
}
