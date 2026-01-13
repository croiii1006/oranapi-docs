import { Sidebar } from '@/components/sidebar/Sidebar';
import { MainContent } from '@/components/MainContent';

export function DocsLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <MainContent />
    </div>
  );
}
