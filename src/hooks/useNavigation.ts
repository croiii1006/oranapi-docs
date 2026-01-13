import { useMemo } from 'react';
import { NavItem, FlatNavItem } from '@/types/navigation';
import { navigationData } from '@/data/navigationData';

// Flatten navigation tree for search - includes ALL levels
export function flattenNavigation(
  items: NavItem[],
  parentPath: string[] = []
): FlatNavItem[] {
  const result: FlatNavItem[] = [];

  for (const item of items) {
    const currentPath = [...parentPath, item.title];
    
    // Add item if it has a path (is a navigable endpoint)
    if (item.path) {
      result.push({
        ...item,
        breadcrumb: currentPath,
      });
    }

    // Always recurse into children to flatten ALL levels
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

// Chinese-friendly fuzzy search - normalizes and matches Chinese characters
function normalizeString(str: string): string {
  return str.toLowerCase().trim();
}

function fuzzyMatch(text: string, query: string): boolean {
  const normalizedText = normalizeString(text);
  const normalizedQuery = normalizeString(query);
  
  // Direct includes match (works for Chinese)
  if (normalizedText.includes(normalizedQuery)) {
    return true;
  }
  
  // Match each character in order (fuzzy)
  let queryIndex = 0;
  for (let i = 0; i < normalizedText.length && queryIndex < normalizedQuery.length; i++) {
    if (normalizedText[i] === normalizedQuery[queryIndex]) {
      queryIndex++;
    }
  }
  
  return queryIndex === normalizedQuery.length;
}

export function useNavigation() {
  const flatItems = useMemo(() => flattenNavigation(navigationData), []);

  const searchItems = (query: string): FlatNavItem[] => {
    if (!query.trim()) return [];
    
    const normalizedQuery = normalizeString(query);
    
    return flatItems.filter(item => {
      // Match title (Chinese + English)
      const titleMatch = fuzzyMatch(item.title, normalizedQuery);
      
      // Match HTTP method
      const methodMatch = item.method ? normalizeString(item.method).includes(normalizedQuery) : false;
      
      // Match breadcrumb path
      const breadcrumbMatch = item.breadcrumb?.some(b => fuzzyMatch(b, normalizedQuery)) ?? false;
      
      // Match path
      const pathMatch = item.path ? normalizeString(item.path).includes(normalizedQuery) : false;
      
      return titleMatch || methodMatch || breadcrumbMatch || pathMatch;
    }).slice(0, 30); // Limit results for performance
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
