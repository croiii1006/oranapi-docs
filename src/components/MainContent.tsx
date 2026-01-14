import { useLocation } from 'react-router-dom';
import { useNavigation } from '@/hooks/useNavigation';
import { IntroductionPage } from '@/pages/IntroductionPage';
import { UserInfoPage } from '@/pages/system/UserInfoPage';
import { KeyInfoPage } from '@/pages/system/KeyInfoPage';
import { OpenAIIntroductionPage } from '@/pages/openai/IntroductionPage';
import { CodexTutorialPage } from '@/pages/openai/codex/TutorialPage';
import { GptsRequestPage } from '@/pages/openai/chat/GptsRequestPage';
import { ChunkObjectPage } from '@/pages/openai/chat/ChunkObjectPage';
import { ChatCompletionsPage } from '@/pages/openai/chat/CompletionsPage';
import { ImagesReadmePage } from '@/pages/openai/images/ReadmePage';
import { ImageObjectPage } from '@/pages/openai/images/ObjectPage';
import { CreateImagePage } from '@/pages/openai/images/CreatePage';
import { EditImagePage } from '@/pages/openai/images/EditPage';
import { VariationImagePage } from '@/pages/openai/images/VariationPage';
import SpeechPage from '@/pages/openai/audio/SpeechPage';
import TranscriptionPage from '@/pages/openai/audio/TranscriptionPage';
import TranslationPage from '@/pages/openai/audio/TranslationPage';
import CompletionObjectPage from '@/pages/openai/completions/ObjectPage';
import CreateCompletionPage from '@/pages/openai/completions/CreatePage';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { BASE_URL } from '@/config/constants';

export function MainContent() {
  const location = useLocation();
  const { flatItems } = useNavigation();

  const currentItem = flatItems.find(item => item.path === location.pathname);
  const breadcrumb = currentItem?.breadcrumb || [];
  const title = currentItem?.title || '欢迎使用 OranAI API';

  const path = location.pathname;

  // Map paths to components
  const pageComponents: Record<string, JSX.Element> = {
    '/': <IntroductionPage />,
    '/introduction': <IntroductionPage />,
    '/system/user-info': <UserInfoPage />,
    '/system/key-info': <KeyInfoPage />,
    '/openai/introduction': <OpenAIIntroductionPage />,
    '/openai/codex/tutorial': <CodexTutorialPage />,
    '/openai/chat/gpts': <GptsRequestPage />,
    '/openai/chat/chunk': <ChunkObjectPage />,
    '/openai/chat/completions': <ChatCompletionsPage />,
    '/openai/images/readme': <ImagesReadmePage />,
    '/openai/images/object': <ImageObjectPage />,
    '/openai/images/create': <CreateImagePage />,
    '/openai/images/edit': <EditImagePage />,
    '/openai/images/variation': <VariationImagePage />,
    '/openai/audio/speech': <SpeechPage />,
    '/openai/audio/transcription': <TranscriptionPage />,
    '/openai/audio/translation': <TranslationPage />,
    '/openai/completions/object': <CompletionObjectPage />,
    '/openai/completions/create': <CreateCompletionPage />,
  };

  const hasCustomPage = path in pageComponents;

  const renderContent = () => {
    if (pageComponents[path]) return pageComponents[path];
    return <PlaceholderContent title={title} />;
  };

  return (
    <main className="flex-1 min-w-0 h-screen overflow-auto bg-background">
      <div className="max-w-[1200px] mx-auto px-10 py-10">
        {!hasCustomPage && (
          <div className="mb-8">
            {breadcrumb.length > 1 && (
              <div className="text-sm text-muted-foreground mb-2">
                {breadcrumb.slice(0, -1).join(' / ')}
              </div>
            )}
            <h1 className="doc-heading-h1">{title}</h1>
          </div>
        )}
        {renderContent()}
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

      <PageNavigation />
    </div>
  );
}
