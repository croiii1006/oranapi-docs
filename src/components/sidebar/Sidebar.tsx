import { useState, useEffect, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollArea } from '@/components/ui/scroll-area';
import { SidebarNavItem } from './SidebarNavItem';
import { SearchCommand, SearchTrigger } from './SearchCommand';
import { useNavigation } from '@/hooks/useNavigation';

export function Sidebar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const location = useLocation();
  const { navigationData, getParentIds } = useNavigation();
  
  // Track if initial expansion has been done
  const hasInitializedRef = useRef(false);

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

  // Only auto-expand on initial mount
  useEffect(() => {
    if (!hasInitializedRef.current) {
      hasInitializedRef.current = true;
      const parentIds = getParentIds(location.pathname);
      if (parentIds.length > 0) {
        setExpandedIds(new Set(parentIds));
      } else {
        // Default expand openai section
        setExpandedIds(new Set(['openai']));
      }
    }
  }, [location.pathname, getParentIds]);

  // Simple toggle - just flip the state, no complex tracking
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

  // Force expand when navigating from search
  const handleSearchNavigate = useCallback((path: string) => {
    const parentIds = getParentIds(path);
    if (parentIds.length > 0) {
      setExpandedIds(prev => {
        const newSet = new Set(prev);
        parentIds.forEach(id => newSet.add(id));
        return newSet;
      });
    }
  }, [getParentIds]);

  return (
    <>
      <aside className="w-[300px] min-w-[300px] h-screen flex flex-col bg-sidebar border-r border-sidebar-border shrink-0">
        {/* Logo */}
        <div className="px-4 py-3.5 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#E67E22] to-[#D35400] flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-lg">O</span>
            </div>
            <span className="font-bold text-lg text-slate-900 dark:text-foreground tracking-tight">OranAI API</span>
          </div>
        </div>

        {/* Search */}
        <div className="px-3 py-2.5 border-b border-sidebar-border">
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
