export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | null;

export interface NavItem {
  id: string;
  title: string;
  path?: string;
  method?: HttpMethod;
  isNew?: boolean;        // Blue dot - in development
  isDeprecated?: boolean; // Strikethrough - deprecated
  children?: NavItem[];
}

export interface FlatNavItem extends NavItem {
  parentPath?: string;
  breadcrumb?: string[];
}
