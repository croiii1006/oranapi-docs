import { cn } from '@/lib/utils';
import { HttpMethod } from '@/types/navigation';

interface MethodBadgeProps {
  method: HttpMethod;
  isActive?: boolean;
  className?: string;
}

export function MethodBadge({ method, isActive = false, className }: MethodBadgeProps) {
  if (!method) return null;

  const baseClasses = 'method-badge';
  
  const methodClasses = {
    GET: cn(baseClasses, 'method-get', isActive && 'active'),
    POST: cn(baseClasses, 'method-post', isActive && 'active'),
    PUT: cn(baseClasses, 'method-put', isActive && 'active'),
    DELETE: cn(baseClasses, 'method-delete', isActive && 'active'),
  };

  return (
    <span className={cn(methodClasses[method], className)}>
      {method}
    </span>
  );
}
