import { cn } from '@/lib/utils'

interface EmptyProps {
  title: string
  description?: string
  className?: string
}

export function Empty({ title, description, className }: EmptyProps) {
  return (
    <div className={cn('text-center py-12', className)}>
      <div className="mx-auto mb-4 text-muted-foreground">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 11h1" />
          <path d="M19 11v1" />
          <path d="M2 11v2" />
          <path d="M7 11h1" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      {description && <p className="text-muted-foreground">{description}</p>}
    </div>
  )
}