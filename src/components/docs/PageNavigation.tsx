import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useNavigation } from '@/hooks/useNavigation';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

export function PageNavigation() {
  const location = useLocation();
  const { flatItems } = useNavigation();
  
  // Find current index in flat items
  const currentIndex = flatItems.findIndex(item => item.path === location.pathname);
  
  if (currentIndex === -1) return null;
  
  const prevItem = currentIndex > 0 ? flatItems[currentIndex - 1] : null;
  const nextItem = currentIndex < flatItems.length - 1 ? flatItems[currentIndex + 1] : null;

  return (
    <nav className="flex gap-4 mt-12 pt-8 border-t border-border">
      {/* Previous */}
      <div className="flex-1">
        {prevItem && (
          <Link
            to={prevItem.path!}
            className={cn(
              "block p-4 rounded-xl border-2 border-border transition-all duration-200",
              "hover:border-primary/50 hover:bg-primary/5 group"
            )}
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
              <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span>上一页</span>
            </div>
            <div className="font-medium text-foreground group-hover:text-primary transition-colors">
              {prevItem.title}
            </div>
            {prevItem.breadcrumb && prevItem.breadcrumb.length > 1 && (
              <div className="text-xs text-muted-foreground mt-1">
                {prevItem.breadcrumb.slice(0, -1).join(' / ')}
              </div>
            )}
          </Link>
        )}
      </div>

      {/* Next */}
      <div className="flex-1">
        {nextItem && (
          <Link
            to={nextItem.path!}
            className={cn(
              "block p-4 rounded-xl border-2 border-border transition-all duration-200 text-right",
              "hover:border-primary/50 hover:bg-primary/5 group"
            )}
          >
            <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground mb-1">
              <span>下一页</span>
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
            <div className="font-medium text-foreground group-hover:text-primary transition-colors">
              {nextItem.title}
            </div>
            {nextItem.breadcrumb && nextItem.breadcrumb.length > 1 && (
              <div className="text-xs text-muted-foreground mt-1">
                {nextItem.breadcrumb.slice(0, -1).join(' / ')}
              </div>
            )}
          </Link>
        )}
      </div>
    </nav>
  );
}
