import { cn } from '@/lib/utils';

interface StatusItem {
  status: 'published' | 'development';
  label: string;
  description: string;
}

interface StatusCardProps {
  items: StatusItem[];
}

export function StatusCard({ items }: StatusCardProps) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            'flex items-start gap-3 p-4 rounded-lg border',
            item.status === 'published' 
              ? 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800'
              : 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700'
          )}
        >
          <span
            className={cn(
              'w-2.5 h-2.5 rounded-full mt-1.5 shrink-0',
              item.status === 'published' 
                ? 'bg-emerald-500'
                : 'bg-slate-400'
            )}
          />
          <div>
            <span className={cn(
              'font-medium',
              item.status === 'published' 
                ? 'text-emerald-800 dark:text-emerald-300'
                : 'text-slate-700 dark:text-slate-300'
            )}>
              {item.label}：
            </span>
            <span className={cn(
              item.status === 'published' 
                ? 'text-emerald-700 dark:text-emerald-400'
                : 'text-slate-600 dark:text-slate-400'
            )}>
              {item.description}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
