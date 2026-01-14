import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Blockquote } from '@/components/docs/Blockquote';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { PageNavigation } from '@/components/docs/PageNavigation';
import CopyPageDropdown from '@/components/docs/CopyPageDropdown';
import { SYSTEM_NAME } from '@/config/constants';

const tocItems = [
  { id: 'online-debug', title: '在线调试', level: 2 },
  { id: 'faq', title: 'FAQ', level: 2 },
];

export function OpenAIIntroductionPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/openai/introduction') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <div className="flex gap-10">
      {/* Main Content */}
      <article className="docs-content flex-1 min-w-0 max-w-[1000px]">
        {/* Header with Title and Actions */}
        <div className="flex items-start justify-between gap-4 mb-1">
          <h1 className="doc-heading-h1 !border-b-0 !pb-0 !mb-0">项目说明</h1>
          <CopyPageDropdown pageTitle="项目说明" />
        </div>
        <div className="border-b border-border/40 mb-6 pb-4" />

        <Blockquote variant="info">
          本文档介绍如何在 Apifox 中调试 {SYSTEM_NAME} 的 OpenAI 兼容接口。请按照以下步骤进行配置和调试。
        </Blockquote>

        {/* Online Debug Section */}
        <section id="online-debug" className="mt-10">
          <h2 className="doc-heading-h2">在线调试</h2>

          {/* Step 1 */}
          <h3 className="doc-heading-h3">1. 点击 "调试" 按钮</h3>
          <p className="text-muted-foreground leading-relaxed text-[15px] mb-4">
            在 Apifox 的接口详情页面，点击右上角的 <strong className="text-foreground">"调试"</strong> 按钮进入调试模式。
          </p>
          <div className="my-6 rounded-lg overflow-hidden border border-border">
            <img 
              src="https://api.apifox.cn/api/v1/projects/2100343/resources/388494/image-preview" 
              alt="点击调试按钮" 
              className="w-full"
              loading="lazy"
            />
          </div>

          {/* Step 2 */}
          <h3 className="doc-heading-h3">2. 设置 OpenAI 的 api_key</h3>
          <p className="text-muted-foreground leading-relaxed text-[15px] mb-4">
            在环境变量中配置您的 API Key。点击环境设置，添加 <strong className="text-foreground">api_key</strong> 变量。
          </p>
          <div className="my-6 rounded-lg overflow-hidden border border-border">
            <img 
              src="https://api.apifox.cn/api/v1/projects/2100343/resources/388496/image-preview" 
              alt="设置 api_key" 
              className="w-full"
              loading="lazy"
            />
          </div>
          
          <Blockquote variant="warning">
            <strong>安全提示：</strong>该环境变量的 api_key 只保存在本地，不会同步到服务器，团队成员之间也不会相互同步。请妥善保管您的 API Key。
          </Blockquote>

          <div className="my-6 rounded-lg overflow-hidden border border-border">
            <img 
              src="https://api.apifox.cn/api/v1/projects/2100343/resources/388499/image-preview" 
              alt="api_key 本地保存说明" 
              className="w-full"
              loading="lazy"
            />
          </div>

          {/* Step 3 */}
          <h3 className="doc-heading-h3">3. 点击 "发送" 按钮，即可发起请求</h3>
          <p className="text-muted-foreground leading-relaxed text-[15px] mb-4">
            配置完成后，填写必要的请求参数，点击 <strong className="text-foreground">"发送"</strong> 按钮即可测试接口。
          </p>
          <div className="my-6 rounded-lg overflow-hidden border border-border">
            <img 
              src="https://api.apifox.cn/api/v1/projects/2100343/resources/388502/image-preview" 
              alt="发送请求" 
              className="w-full"
              loading="lazy"
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mt-10">
          <h2 className="doc-heading-h2">FAQ</h2>

          {/* FAQ 1 */}
          <h3 className="doc-heading-h3">1. 云端 Agent 错误</h3>
          <div className="my-4 rounded-lg overflow-hidden border border-border">
            <img 
              src="https://api.apifox.cn/api/v1/projects/2100343/resources/388579/image-preview" 
              alt="云端 Agent 错误" 
              className="w-full"
              loading="lazy"
            />
          </div>
          <Blockquote variant="info">
            <strong>解决方案：</strong>需要安装 Apifox 的浏览器插件。
            <a 
              href="https://apifox.com/help/applications-and-plugins/browser-extensions/microsoft-edge" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-2 text-primary hover:underline font-medium"
            >
              Apifox Browser Extension →
            </a>
          </Blockquote>

          {/* FAQ 2 */}
          <h3 className="doc-heading-h3 mt-8">2. Invalid authorization header</h3>
          <div className="my-4 rounded-lg overflow-hidden border border-border">
            <img 
              src="https://api.apifox.cn/api/v1/projects/2100343/resources/388580/image-preview" 
              alt="Invalid authorization header" 
              className="w-full"
              loading="lazy"
            />
          </div>
          <Blockquote variant="info">
            <strong>解决方案：</strong>需要在环境变量中设置 OpenAI 的 api_key。请参考上方「设置 OpenAI 的 api_key」步骤进行配置。
          </Blockquote>

          {/* FAQ 3 */}
          <h3 className="doc-heading-h3 mt-8">3. 无法请求地址 api.openai.com</h3>
          <div className="my-4 rounded-lg overflow-hidden border border-border">
            <img 
              src="https://api.apifox.cn/api/v1/projects/2100343/resources/388584/image-preview" 
              alt="无法请求地址" 
              className="w-full"
              loading="lazy"
            />
          </div>
          <Blockquote variant="warning">
            <strong>解决方案：</strong>需要使用代理工具（科学上网），且需要开启 <strong>全局代理</strong> 模式才能正常访问 OpenAI 的 API 地址。
          </Blockquote>
        </section>

        {/* Tips Section */}
        <section className="mt-10">
          <div className="p-6 bg-muted/30 rounded-xl border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-3">💡 调试小技巧</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground text-[15px]">
              <li>使用 Apifox 的「环境切换」功能，可以快速在开发/测试/生产环境之间切换</li>
              <li>善用「前置脚本」和「后置脚本」，可以自动化处理认证 Token 的刷新</li>
              <li>将常用的测试用例保存为「用例」，方便后续快速测试</li>
              <li>使用「Mock」功能，可以在接口开发完成前进行前端联调</li>
            </ul>
          </div>
        </section>

        {/* Page Navigation */}
        <PageNavigation />
      </article>

      {/* Table of Contents */}
      <TableOfContents items={tocItems} />
    </div>
  );
}
