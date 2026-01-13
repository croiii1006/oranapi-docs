import { useLocation } from 'react-router-dom';
import { useNavigation } from '@/hooks/useNavigation';
import { IntroductionPage } from '@/pages/IntroductionPage';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { BASE_URL } from '@/config/constants';

export function MainContent() {
  const location = useLocation();
  const { flatItems } = useNavigation();

  // Find current item
  const currentItem = flatItems.find(item => item.path === location.pathname);
  const breadcrumb = currentItem?.breadcrumb || [];
  const title = currentItem?.title || '欢迎使用 OranAI API';

  const isIntroduction = location.pathname === '/introduction' || location.pathname === '/';

  return (
    <main className="flex-1 min-w-0 h-screen overflow-auto bg-background">
      <div className="max-w-[1200px] mx-auto px-10 py-10">
        {/* Header - only show for non-introduction pages */}
        {!isIntroduction && (
          <div className="mb-8">
            {breadcrumb.length > 1 && (
              <div className="text-sm text-muted-foreground mb-2">
                {breadcrumb.slice(0, -1).join(' / ')}
              </div>
            )}
            <h1 className="doc-heading-h1">{title}</h1>
          </div>
        )}

        {/* Content */}
        {isIntroduction ? (
          <IntroductionPage />
        ) : (
          <PlaceholderContent title={title} />
        )}
      </div>
    </main>
  );
}

function PlaceholderContent({ title }: { title: string }) {
  return (
    <div className="space-y-6">
      <div className="p-6 bg-muted/30 rounded-xl border border-border">
        <p className="text-muted-foreground">
          此页面将展示 <span className="font-medium text-foreground">{title}</span> 的详细文档内容。
        </p>
      </div>
      
      <div className="p-4 bg-muted/50 rounded-lg font-mono text-sm">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">BASE_URL:</span>
          <code className="text-foreground">{BASE_URL}</code>
        </div>
      </div>

      {/* Page Navigation for placeholder pages too */}
      <PageNavigation />
    </div>
  );
}
