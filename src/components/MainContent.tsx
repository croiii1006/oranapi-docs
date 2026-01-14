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
import GoogleGenerateContentPage from '@/pages/google/chat/GenerateContentPage';
import GoogleStreamGenerateContentPage from '@/pages/google/chat/StreamGenerateContentPage';
import GoogleGenerateImagePage from '@/pages/google/image/GenerateImagePage';
import GoogleStreamGenerateImagePage from '@/pages/google/image/StreamGenerateImagePage';
import GoogleAnalyzeMediaPage from '@/pages/google/analyze/AnalyzeMediaPage';
import GoogleAnalyzeYouTubePage from '@/pages/google/analyze/AnalyzeYouTubePage';
import ClaudeMessagesPage from '@/pages/anthropic/chat/ClaudeMessagesPage';
import GptImageChatGeneratePage from '@/pages/image-generation/gpt-image/chat/GeneratePage';
import GptImageChatGenerateWithImagePage from '@/pages/image-generation/gpt-image/chat/GenerateWithImagePage';
import GptImageDalleCreatePage from '@/pages/image-generation/gpt-image/dalle/CreatePage';
import GptImageDalleEditPage from '@/pages/image-generation/gpt-image/dalle/EditPage';
import KlingTextToVideoPage from '@/pages/video-generation/kling/official/TextToVideoPage';
import KlingImageToVideoPage from '@/pages/video-generation/kling/official/ImageToVideoPage';
import KlingVideoEffectsPage from '@/pages/video-generation/kling/official/VideoEffectsPage';
import KlingQueryTaskPage from '@/pages/video-generation/kling/official/QueryTaskPage';
import KlingQueryEffectsPage from '@/pages/video-generation/kling/official/QueryEffectsPage';
import KlingGenerateVideoPage from '@/pages/video-generation/kling/openai/GenerateVideoPage';
import KlingQueryVideoPage from '@/pages/video-generation/kling/openai/QueryVideoPage';
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
    '/google/chat/generate': <GoogleGenerateContentPage />,
    '/google/chat/stream': <GoogleStreamGenerateContentPage />,
    '/google/image/generate': <GoogleGenerateImagePage />,
    '/google/image/stream': <GoogleStreamGenerateImagePage />,
    '/google/analyze/media': <GoogleAnalyzeMediaPage />,
    '/google/analyze/youtube': <GoogleAnalyzeYouTubePage />,
    '/anthropic/chat/messages': <ClaudeMessagesPage />,
    '/image-generation/gpt-image/chat/generate': <GptImageChatGeneratePage />,
    '/image-generation/gpt-image/chat/with-image': <GptImageChatGenerateWithImagePage />,
    '/image-generation/gpt-image/dalle/create': <GptImageDalleCreatePage />,
    '/image-generation/gpt-image/dalle/edit': <GptImageDalleEditPage />,
    '/video-generation/kling/official/text-to-video': <KlingTextToVideoPage />,
    '/video-generation/kling/official/image-to-video': <KlingImageToVideoPage />,
    '/video-generation/kling/official/video-effects': <KlingVideoEffectsPage />,
    '/video-generation/kling/official/query-task': <KlingQueryTaskPage />,
    '/video-generation/kling/official/query-effects': <KlingQueryEffectsPage />,
    '/video-generation/kling/openai/generate': <KlingGenerateVideoPage />,
    '/video-generation/kling/openai/query': <KlingQueryVideoPage />,
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
