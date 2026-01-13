import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NavItem } from '@/types/navigation';
import { MethodBadge } from '@/components/MethodBadge';
import { DevIndicator } from '@/components/DevIndicator';

interface SidebarNavItemProps {
  item: NavItem;
  level?: number;
  expandedIds: Set<string>;
  toggleExpand: (id: string) => void;
}

export function SidebarNavItem({ 
  item, 
  level = 0, 
  expandedIds, 
  toggleExpand 
}: SidebarNavItemProps) {
  const location = useLocation();
  const hasChildren = item.children && item.children.length > 0;
  const isExpanded = expandedIds.has(item.id);
  const isActive = item.path === location.pathname;

  const paddingLeft = 12 + level * 12;

  if (hasChildren) {
    return (
      <div>
        <button
          onClick={() => toggleExpand(item.id)}
          className={cn(
            'w-full flex items-start justify-between py-2 pr-3 text-sm rounded-md transition-all duration-150',
            'hover:bg-sidebar-hover group',
            isExpanded && 'text-foreground font-medium',
            !isExpanded && 'text-muted-foreground'
          )}
          style={{ paddingLeft }}
        >
          <span className={cn(
            'flex-1 text-left mr-2 leading-relaxed break-words',
            item.isDeprecated && 'deprecated-text'
          )}>
            {item.title}
          </span>
          <div className="flex items-center gap-1.5 shrink-0 mt-0.5">
            {item.isNew && <DevIndicator />}
            <ChevronRight 
              className={cn(
                'h-4 w-4 transition-transform duration-200 text-muted-foreground',
                isExpanded && 'rotate-90'
              )} 
            />
          </div>
        </button>
        {isExpanded && (
          <div className="animate-accordion-down">
            {item.children?.map((child) => (
              <SidebarNavItem
                key={child.id}
                item={child}
                level={level + 1}
                expandedIds={expandedIds}
                toggleExpand={toggleExpand}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  if (item.path) {
    return (
      <NavLink
        to={item.path}
        className={({ isActive: active }) =>
          cn(
            'sidebar-item',
            active && 'active'
          )
        }
        style={{ paddingLeft }}
      >
        <span className={cn(
          'flex-1 min-w-0 mr-2 leading-relaxed break-words',
          item.isDeprecated && 'deprecated-text'
        )}>
          {item.title}
        </span>
        <div className="flex items-center gap-1.5 shrink-0 ml-auto self-start mt-0.5">
          {item.isNew && <DevIndicator />}
          <MethodBadge method={item.method || null} isActive={isActive} />
        </div>
      </NavLink>
    );
  }

  return (
    <div
      className="sidebar-item cursor-default"
      style={{ paddingLeft }}
    >
      <span className={cn(
        'flex-1 leading-relaxed break-words',
        item.isDeprecated && 'deprecated-text'
      )}>
        {item.title}
      </span>
      {item.isNew && <DevIndicator />}
    </div>
  );
}
