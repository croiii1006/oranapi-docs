import { cn } from '@/lib/utils';

interface DevIndicatorProps {
  className?: string;
}

export function DevIndicator({ className }: DevIndicatorProps) {
  return (
    <span 
      className={cn('dev-indicator', className)} 
      title="开发中"
      aria-label="开发中"
    />
  );
}
