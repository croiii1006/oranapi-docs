import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { useNavigation } from '@/hooks/useNavigation';
import { MethodBadge } from '@/components/MethodBadge';
import { DevIndicator } from '@/components/DevIndicator';

interface SearchCommandProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onNavigate?: (path: string) => void;
}

export function SearchCommand({ open, onOpenChange, onNavigate }: SearchCommandProps) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { searchItems } = useNavigation();

  const results = searchItems(query);

  const handleSelect = useCallback((path: string) => {
    onOpenChange(false);
    setQuery('');
    navigate(path);
    onNavigate?.(path);
  }, [navigate, onNavigate, onOpenChange]);

  // Reset query when dialog closes
  useEffect(() => {
    if (!open) {
      setQuery('');
    }
  }, [open]);

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput 
        placeholder="搜索文档或接口..." 
        value={query}
        onValueChange={setQuery}
      />
      <CommandList>
        <CommandEmpty>没有找到相关结果</CommandEmpty>
        {results.length > 0 && (
          <CommandGroup heading="搜索结果">
            {results.map((item) => (
              <CommandItem
                key={item.id}
                value={item.path || item.id}
                onSelect={() => item.path && handleSelect(item.path)}
                className="flex items-center justify-between py-3 cursor-pointer"
              >
                <div className="flex flex-col gap-1">
                  <span className="font-medium">{item.title}</span>
                  {item.breadcrumb && (
                    <span className="text-xs text-muted-foreground">
                      {item.breadcrumb.slice(0, -1).join(' > ')}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {item.isNew && <DevIndicator />}
                  <MethodBadge method={item.method || null} />
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        )}
      </CommandList>
    </CommandDialog>
  );
}

interface SearchTriggerProps {
  onClick: () => void;
}

export function SearchTrigger({ onClick }: SearchTriggerProps) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between px-3 py-2 text-sm text-muted-foreground bg-background border border-border rounded-md hover:border-primary/50 transition-colors"
    >
      <div className="flex items-center gap-2">
        <Search className="h-4 w-4" />
        <span>搜索</span>
      </div>
      <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
        <span className="text-xs">⌘</span>K
      </kbd>
    </button>
  );
}
