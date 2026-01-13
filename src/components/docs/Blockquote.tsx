import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { Info, AlertTriangle, Lightbulb } from 'lucide-react';

interface BlockquoteProps {
  children: ReactNode;
  variant?: 'info' | 'warning' | 'tip';
  className?: string;
}

export function Blockquote({ children, variant = 'info', className }: BlockquoteProps) {
  const variantConfig = {
    info: {
      bgClass: 'bg-[hsl(270,100%,98%)] dark:bg-[hsl(263,40%,15%)]',
      borderClass: 'border-l-[hsl(263,70%,50%)]',
      iconClass: 'text-[hsl(263,70%,50%)]',
      Icon: Info,
    },
    warning: {
      bgClass: 'bg-[hsl(45,100%,96%)] dark:bg-[hsl(45,50%,15%)]',
      borderClass: 'border-l-[hsl(45,93%,47%)]',
      iconClass: 'text-[hsl(45,93%,47%)]',
      Icon: AlertTriangle,
    },
    tip: {
      bgClass: 'bg-[hsl(142,76%,96%)] dark:bg-[hsl(142,40%,15%)]',
      borderClass: 'border-l-[hsl(142,71%,45%)]',
      iconClass: 'text-[hsl(142,71%,45%)]',
      Icon: Lightbulb,
    },
  };

  const config = variantConfig[variant];
  const IconComponent = config.Icon;

  return (
    <blockquote
      className={cn(
        'flex gap-3 pl-4 py-4 pr-4 border-l-4 rounded-r-lg text-sm leading-relaxed my-4',
        config.bgClass,
        config.borderClass,
        className
      )}
    >
      <IconComponent className={cn('h-5 w-5 shrink-0 mt-0.5', config.iconClass)} />
      <div className="text-foreground/90">
        {children}
      </div>
    </blockquote>
  );
}
