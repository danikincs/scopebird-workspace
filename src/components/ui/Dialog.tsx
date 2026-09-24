import { useEffect, useRef, type ReactNode } from 'react'
import { X } from 'lucide-react'

export function Dialog({ open, title, onClose, children }: { open: boolean; title: string; onClose: () => void; children: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null)
  useEffect(() => { const dialog = ref.current; if (open && dialog && !dialog.open) dialog.showModal(); if (!open && dialog?.open) dialog.close() }, [open])
  return <dialog ref={ref} className="ui-dialog" onClose={onClose} onClick={(event) => event.target === ref.current && onClose()}><button className="dialog-close" onClick={onClose} aria-label={`Close ${title}`}><X size={18} /></button><div className="ui-dialog__body"><p className="eyebrow">Workspace interaction</p><h2>{title}</h2>{children}</div></dialog>
}
