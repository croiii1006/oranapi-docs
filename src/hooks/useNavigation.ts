import { useMemo } from 'react';
import { NavItem, FlatNavItem } from '@/types/navigation';
import { navigationData } from '@/data/navigationData';

// Flatten navigation tree for search
export function flattenNavigation(
  items: NavItem[],
  parentPath: string[] = []
): FlatNavItem[] {
  const result: FlatNavItem[] = [];

  for (const item of items) {
    const currentPath = [...parentPath, item.title];
    
    if (item.path) {
      result.push({
        ...item,
        breadcrumb: currentPath,
      });
    }

    if (item.children) {
      result.push(...flattenNavigation(item.children, currentPath));
    }
  }

  return result;
}

// Find parent ids for a given path
export function findParentIds(
  items: NavItem[],
  targetPath: string,
  currentPath: string[] = []
): string[] | null {
  for (const item of items) {
    if (item.path === targetPath) {
      return currentPath;
    }

    if (item.children) {
      const found = findParentIds(item.children, targetPath, [...currentPath, item.id]);
      if (found) return found;
    }
  }

  return null;
}

export function useNavigation() {
  const flatItems = useMemo(() => flattenNavigation(navigationData), []);

  const searchItems = (query: string): FlatNavItem[] => {
    if (!query.trim()) return [];
    
    const lowerQuery = query.toLowerCase();
    return flatItems.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(lowerQuery);
      const methodMatch = item.method?.toLowerCase().includes(lowerQuery);
      const breadcrumbMatch = item.breadcrumb?.some(b => 
        b.toLowerCase().includes(lowerQuery)
      );
      return titleMatch || methodMatch || breadcrumbMatch;
    }).slice(0, 20); // Limit results
  };

  const getParentIds = (path: string): string[] => {
    return findParentIds(navigationData, path) || [];
  };

  return {
    navigationData,
    flatItems,
    searchItems,
    getParentIds,
  };
}
