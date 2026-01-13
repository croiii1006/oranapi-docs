import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { List } from 'lucide-react';

interface TocItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -70% 0px' }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="sticky top-8 w-56 shrink-0 hidden xl:block">
      <div className="p-4 bg-muted/50 rounded-lg border border-border">
        <div className="flex items-center gap-2 mb-3 text-sm font-medium text-foreground">
          <List className="h-4 w-4" />
          目录
        </div>
        <nav className="space-y-1">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={cn(
                'block w-full text-left text-sm py-1 px-2 rounded transition-colors',
                'hover:bg-muted',
                item.level === 2 ? 'pl-2' : 'pl-5',
                activeId === item.id
                  ? 'text-primary font-medium bg-primary/5'
                  : 'text-muted-foreground'
              )}
            >
              {item.title}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
