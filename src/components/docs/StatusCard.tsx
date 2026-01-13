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
    <div className="space-y-3 my-4">
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            'flex items-start gap-4 p-4 rounded-xl border',
            item.status === 'published' 
              ? 'bg-[hsl(142,76%,97%)] dark:bg-[hsl(142,40%,10%)] border-[hsl(142,50%,85%)] dark:border-[hsl(142,40%,20%)]'
              : 'bg-muted/50 border-border'
          )}
        >
          <span
            className={cn(
              'w-3 h-3 rounded-full mt-0.5 shrink-0 ring-4',
              item.status === 'published' 
                ? 'bg-[hsl(142,71%,45%)] ring-[hsl(142,71%,45%,0.2)]'
                : 'bg-muted-foreground/50 ring-muted-foreground/10'
            )}
          />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className={cn(
                'font-semibold text-sm',
                item.status === 'published' 
                  ? 'text-[hsl(142,50%,30%)] dark:text-[hsl(142,60%,60%)]'
                  : 'text-muted-foreground'
              )}>
                {item.label}
              </span>
              {item.status === 'published' && (
                <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-[hsl(142,71%,45%)] text-white">
                  可用
                </span>
              )}
              {item.status === 'development' && (
                <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-muted-foreground/20 text-muted-foreground">
                  开发中
                </span>
              )}
            </div>
            <p className={cn(
              'text-sm',
              item.status === 'published' 
                ? 'text-[hsl(142,30%,40%)] dark:text-[hsl(142,40%,70%)]'
                : 'text-muted-foreground'
            )}>
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
