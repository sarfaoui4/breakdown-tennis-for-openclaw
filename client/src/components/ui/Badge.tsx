import React from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps {
  children: React.ReactNode
  variant?: 'orange' | 'green' | 'yellow' | 'red' | 'gray'
  size?: 'sm' | 'md'
  className?: string
}

const variantClasses = {
  orange: 'bg-[#FF6B35]/20 text-[#FF6B35] border border-[#FF6B35]/30',
  green: 'bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30',
  yellow: 'bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/30',
  red: 'bg-[#EF4444]/20 text-[#EF4444] border border-[#EF4444]/30',
  gray: 'bg-gray-800 text-gray-300 border border-gray-700',
}

const sizeClasses = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-sm',
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'gray',
  size = 'sm',
  className,
}) => {
  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </span>
  )
}
