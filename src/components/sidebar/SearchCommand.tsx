import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ChevronRight } from 'lucide-react';
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

  // Format breadcrumb path for display
  const formatBreadcrumb = (breadcrumb: string[] | undefined, title: string): string => {
    if (!breadcrumb || breadcrumb.length <= 1) return '';
    // Remove the last item (current title) from breadcrumb
    const parentPath = breadcrumb.slice(0, -1);
    return parentPath.join(' > ');
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput 
        placeholder="搜索文档或接口..." 
        value={query}
        onValueChange={setQuery}
      />
      <CommandList className="max-h-[400px]">
        <CommandEmpty>没有找到相关结果</CommandEmpty>
        {results.length > 0 && (
          <CommandGroup heading={`搜索结果 (${results.length})`}>
            {results.map((item) => {
              const parentPath = formatBreadcrumb(item.breadcrumb, item.title);
              
              return (
                <CommandItem
                  key={item.id}
                  value={`${item.path} ${item.title} ${parentPath}`}
                  onSelect={() => item.path && handleSelect(item.path)}
                  className="flex items-center gap-3 py-3 px-3 cursor-pointer group"
                >
                  {/* Left: Method Badge */}
                  <div className="shrink-0 w-14">
                    <MethodBadge method={item.method || null} />
                  </div>
                  
                  {/* Middle: Title and Path */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`font-medium truncate ${item.isDeprecated ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                        {item.title}
                      </span>
                      {item.isNew && <DevIndicator />}
                    </div>
                    {parentPath && (
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5 truncate">
                        {item.breadcrumb?.slice(0, -1).map((segment, index, arr) => (
                          <span key={index} className="flex items-center gap-1">
                            <span className="truncate max-w-[120px]">{segment}</span>
                            {index < arr.length - 1 && (
                              <ChevronRight className="w-3 h-3 shrink-0 text-muted-foreground/60" />
                            )}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </CommandItem>
              );
            })}
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
