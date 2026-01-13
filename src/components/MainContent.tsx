import { useLocation } from 'react-router-dom';
import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BASE_URL } from '@/config/constants';
import { useNavigation } from '@/hooks/useNavigation';

export function MainContent() {
  const location = useLocation();
  const { flatItems } = useNavigation();

  // Find current item
  const currentItem = flatItems.find(item => item.path === location.pathname);
  const breadcrumb = currentItem?.breadcrumb || [];
  const title = currentItem?.title || '欢迎使用 OranAI API';

  return (
    <main className="flex-1 min-w-0 h-screen overflow-auto bg-background">
      <div className="max-w-4xl mx-auto px-8 py-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            {breadcrumb.length > 1 && (
              <div className="text-sm text-muted-foreground mb-2">
                {breadcrumb.slice(0, -1).join(' / ')}
              </div>
            )}
            <h1 className="text-3xl font-bold text-foreground">{title}</h1>
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <Copy className="h-4 w-4" />
            复制页面
          </Button>
        </div>

        {/* Content */}
        {location.pathname === '/openai/introduction' || location.pathname === '/' ? (
          <IntroductionContent />
        ) : (
          <PlaceholderContent title={title} />
        )}
      </div>
    </main>
  );
}

function IntroductionContent() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold mb-4">OranAI API 接口文档总览</h2>
        <p className="text-muted-foreground leading-relaxed">
          本文是 OranAI 项目文档的「总介绍」。涵盖聊天、图像生成、视频生成、音乐生成等能力的统一说明、调用规范与示例。请先阅读「接口状态说明」，再开始调试。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">接口状态说明 （必读）</h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-method-get mt-2 shrink-0" />
            <div>
              <span className="font-medium">已发布：</span>
              <span className="text-muted-foreground">接口功能稳定，可正常调用，计费与限流规则生效。</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-status-dev mt-2 shrink-0" />
            <div>
              <span className="font-medium">待开发：</span>
              <span className="text-muted-foreground">接口设计稿或联调中，<strong className="text-destructive">不可正常使用</strong>，仅供预览字段与约定。</span>
            </div>
          </li>
        </ul>

        <div className="mt-6 p-4 bg-muted rounded-lg border border-border">
          <p className="text-sm text-muted-foreground">
            在文档中，请以右上角「发布状态」为准；仅当接口处于 <span className="font-medium text-foreground">已发布</span> 状态时再进行调用与接入。
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">1. 关于 OranAI API</h2>
        <p className="text-muted-foreground leading-relaxed">
          OranAI API 是一家专注 <span className="font-medium text-foreground">多模型</span>、<span className="font-medium text-foreground">多媒体 AI 能力聚合</span> 的服务平台，统一封装聊天理解、图像生成、视频生成、音乐生成等主流能力，帮助研发团队 <span className="font-medium text-foreground">更快上线</span>、<span className="font-medium text-foreground">低成本运维</span>。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">2. 基础配置</h2>
        <div className="p-4 bg-muted rounded-lg font-mono text-sm">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">BASE_URL:</span>
            <code className="text-foreground">{BASE_URL}</code>
          </div>
        </div>
      </section>
    </div>
  );
}

function PlaceholderContent({ title }: { title: string }) {
  return (
    <div className="space-y-6">
      <div className="p-6 bg-muted/50 rounded-lg border border-border">
        <p className="text-muted-foreground">
          此页面将展示 <span className="font-medium text-foreground">{title}</span> 的详细文档内容。
        </p>
      </div>
      
      <div className="p-4 bg-muted rounded-lg font-mono text-sm">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">BASE_URL:</span>
          <code className="text-foreground">{BASE_URL}</code>
        </div>
      </div>
    </div>
  );
}
