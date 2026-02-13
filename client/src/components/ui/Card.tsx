import React from 'react'
import { cn } from '@/lib/utils'

export interface CardProps {
  children: React.ReactNode
  title?: string
  subtitle?: string
  actions?: React.ReactNode
  hoverable?: boolean
  className?: string
}

export const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  actions,
  hoverable = false,
  className,
}) => {
  return (
    <div
      className={cn(
        'bg-[#1A1A1A] rounded-xl shadow-lg p-6 border border-[#2A2A2A]',
        hoverable && 'hover:bg-[#252525] transition-all duration-200 cursor-pointer',
        className
      )}
    >
      {(title || subtitle || actions) && (
        <div className="flex items-start justify-between mb-4">
          <div>
            {title && <h3 className="text-xl font-semibold text-white">{title}</h3>}
            {subtitle && <p className="text-sm text-gray-400 mt-1">{subtitle}</p>}
          </div>
          {actions && <div className="flex items-center gap-2">{actions}</div>}
        </div>
      )}
      {children}
    </div>
  )
}

export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div className={cn('mb-4', className)}>{children}</div>
)

export const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div className={cn('text-gray-300', className)}>{children}</div>
)

export const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div className={cn('mt-4 pt-4 border-t border-[#2A2A2A]', className)}>{children}</div>
)
