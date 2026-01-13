import { useState, useEffect, useCallback, useRef } from 'react';
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
  
  // Track manually collapsed items to prevent auto-expansion
  const manuallyCollapsedRef = useRef<Set<string>>(new Set());
  // Track previous path to detect navigation changes
  const prevPathRef = useRef<string>(location.pathname);

  // Expand parents when navigating (only on actual navigation, respecting manual collapse)
  const expandToPath = useCallback((path: string, force: boolean = false) => {
    const parentIds = getParentIds(path);
    if (parentIds.length > 0) {
      setExpandedIds(prev => {
        const newSet = new Set(prev);
        parentIds.forEach(id => {
          // Only expand if not manually collapsed, or if forced (e.g., from search)
          if (force || !manuallyCollapsedRef.current.has(id)) {
            newSet.add(id);
          }
        });
        return newSet;
      });
      
      // If forced, clear the manually collapsed state for these parents
      if (force) {
        parentIds.forEach(id => manuallyCollapsedRef.current.delete(id));
      }
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

  // Expand to current path on mount and when navigating to a NEW path
  useEffect(() => {
    const isNewPath = prevPathRef.current !== location.pathname;
    prevPathRef.current = location.pathname;
    
    if (isNewPath) {
      // Clear manually collapsed state when navigating to a new page
      // so parents of the new active item get expanded
      const parentIds = getParentIds(location.pathname);
      parentIds.forEach(id => manuallyCollapsedRef.current.delete(id));
    }
    
    expandToPath(location.pathname);
  }, [location.pathname, expandToPath, getParentIds]);

  // Toggle expand/collapse - tracks manual collapse state
  const toggleExpand = useCallback((id: string) => {
    setExpandedIds(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        // User is collapsing - track this as manual collapse
        manuallyCollapsedRef.current.add(id);
        newSet.delete(id);
      } else {
        // User is expanding - remove from manually collapsed
        manuallyCollapsedRef.current.delete(id);
        newSet.add(id);
      }
      return newSet;
    });
  }, []);

  const handleSearchNavigate = useCallback((path: string) => {
    // Force expand when navigating from search
    expandToPath(path, true);
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
