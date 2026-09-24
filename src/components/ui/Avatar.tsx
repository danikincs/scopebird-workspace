import type { HTMLAttributes } from 'react'

type AvatarProps = HTMLAttributes<HTMLSpanElement> & { name: string; size?: 'small' | 'medium' | 'large' }

export function Avatar({ name, size = 'medium', className = '', ...props }: AvatarProps) {
  const initials = name.split(' ').map((part) => part[0]).join('').slice(0, 2).toUpperCase()
  return <span className={`avatar avatar--${size} ${className}`} aria-label={name} {...props}>{initials}</span>
}
