import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollArea } from '@/components/ui/scroll-area';
import { SidebarNavItem } from './SidebarNavItem';
import { SearchCommand, SearchTrigger } from './SearchCommand';
import { useNavigation } from '@/hooks/useNavigation';
import { Zap } from 'lucide-react';

export function Sidebar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set(['openai']));
  const location = useLocation();
  const { navigationData, getParentIds } = useNavigation();

  // Expand parents when navigating
  const expandToPath = useCallback((path: string) => {
    const parentIds = getParentIds(path);
    if (parentIds.length > 0) {
      setExpandedIds(prev => {
        const newSet = new Set(prev);
        parentIds.forEach(id => newSet.add(id));
        return newSet;
      });
    }
  }, [getParentIds]);

  // Handle keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Expand to current path on mount and path change
  useEffect(() => {
    expandToPath(location.pathname);
  }, [location.pathname, expandToPath]);

  const toggleExpand = useCallback((id: string) => {
    setExpandedIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  }, []);

  const handleSearchNavigate = useCallback((path: string) => {
    expandToPath(path);
  }, [expandToPath]);

  return (
    <>
      <aside className="w-[280px] lg:w-[300px] h-screen flex flex-col bg-sidebar border-r border-sidebar-border shrink-0">
        {/* Logo */}
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-lg text-foreground">OranAI API</span>
          </div>
        </div>

        {/* Search */}
        <div className="p-3 border-b border-sidebar-border">
          <SearchTrigger onClick={() => setSearchOpen(true)} />
        </div>

        {/* Navigation */}
        <ScrollArea className="flex-1 px-2 py-2">
          <nav className="space-y-0.5">
            {navigationData.map((item) => (
              <SidebarNavItem
                key={item.id}
                item={item}
                expandedIds={expandedIds}
                toggleExpand={toggleExpand}
              />
            ))}
          </nav>
        </ScrollArea>
      </aside>

      <SearchCommand 
        open={searchOpen} 
        onOpenChange={setSearchOpen}
        onNavigate={handleSearchNavigate}
      />
    </>
  );
}
