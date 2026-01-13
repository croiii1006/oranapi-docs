import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface BlockquoteProps {
  children: ReactNode;
  variant?: 'info' | 'warning' | 'tip';
  className?: string;
}

export function Blockquote({ children, variant = 'info', className }: BlockquoteProps) {
  const variantStyles = {
    info: 'bg-purple-50 dark:bg-purple-950/30 border-l-purple-500',
    warning: 'bg-amber-50 dark:bg-amber-950/30 border-l-amber-500',
    tip: 'bg-emerald-50 dark:bg-emerald-950/30 border-l-emerald-500',
  };

  return (
    <blockquote
      className={cn(
        'pl-4 py-3 pr-4 border-l-4 rounded-r-lg text-sm leading-relaxed',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </blockquote>
  );
}
