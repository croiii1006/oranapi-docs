import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CodeBlock, InlineCode } from '@/components/docs/CodeBlock';
import { Blockquote } from '@/components/docs/Blockquote';
import { StatusCard } from '@/components/docs/StatusCard';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { PageNavigation } from '@/components/docs/PageNavigation';
import CopyPageDropdown from '@/components/docs/CopyPageDropdown';
import { BASE_URL, CONTACT_EMAIL, SYSTEM_NAME } from '@/config/constants';

const tocItems = [
  { id: 'status', title: '接口状态说明', level: 2 },
  { id: 'about', title: '关于 OranAI API', level: 2 },
  { id: 'quickstart', title: '快速开始', level: 2 },
  { id: 'services', title: '服务目录', level: 2 },
  { id: 'webhook', title: 'Webhook 回调', level: 2 },
  { id: 'idempotency', title: '幂等性与重复提交', level: 2 },
  { id: 'sdk', title: 'SDK 与示例', level: 2 },
  { id: 'security', title: '安全与合规', level: 2 },
  { id: 'support', title: '支持与反馈', level: 2 },
];

export function IntroductionPage() {
  const location = useLocation();

  // Scroll to top when navigating to introduction page
  useEffect(() => {
    if (location.pathname === '/introduction' || location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <div className="flex gap-10">
      {/* Main Content */}
      <article className="docs-content flex-1 min-w-0 max-w-[1000px]">
        {/* Header with Title and Actions */}
        <div className="flex items-start justify-between gap-4 mb-1">
          <h1 className="doc-heading-h1 !border-b-0 !pb-0 !mb-0">{SYSTEM_NAME} 接口文档总览</h1>
          <CopyPageDropdown pageTitle="介绍" />
        </div>
        <div className="border-b border-border/40 mb-6 pb-4" />
        
        <Blockquote variant="info">
          本文是 {SYSTEM_NAME} 项目文档的「总介绍」。涵盖聊天、图像生成、视频生成、音乐生成等能力的统一说明、调用规范与示例。请先阅读「接口状态说明」，再开始调试。
        </Blockquote>

        {/* Status Section */}
        <section id="status" className="mt-10">
          <h2 className="doc-heading-h2">接口状态说明（必读）</h2>
          <StatusCard
            items={[
              { status: 'published', label: '已发布', description: '接口功能稳定、可正常调用，计费与限流规则生效。' },
              { status: 'development', label: '待开发', description: '接口设计稿或联调中，不可正常使用，仅供预览字段与约定。' },
            ]}
          />
          <Blockquote variant="warning" className="mt-4">
            在文档中，请以右上角「发布状态」为准；仅当接口处于 <strong>已发布</strong> 状态时再进行调用与接入。
          </Blockquote>
        </section>

        {/* About Section */}
        <section id="about" className="mt-10">
          <h2 className="doc-heading-h2">1. 关于 {SYSTEM_NAME}</h2>
          <p className="text-muted-foreground leading-relaxed text-[15px]">
            {SYSTEM_NAME} 是一家专注 <strong className="text-foreground">多模型、多媒体 AI 能力聚合</strong> 的服务平台，统一封装聊天理解、图像生成、视频生成、音乐生成等主流能力，帮助研发团队 <strong className="text-foreground">更快上线、低成本运维</strong>。
          </p>
        </section>

        {/* Quick Start Section */}
        <section id="quickstart" className="mt-10">
          <h2 className="doc-heading-h2">2. 快速开始</h2>
          
          <h3 className="doc-heading-h3">2.1 认证方式</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground text-[15px] mb-4">
            <li><strong className="text-foreground">Authorization</strong>：<InlineCode>Bearer &lt;Your_API_Key&gt;</InlineCode></li>
            <li><strong className="text-foreground">Header</strong>：<InlineCode>Content-Type: application/json</InlineCode></li>
            <li><strong className="text-foreground">示例</strong>：<InlineCode>Authorization: Bearer sk-xxxxx</InlineCode></li>
          </ul>

          <h3 className="doc-heading-h3">2.2 网关与版本</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground text-[15px] mb-4">
            <li><strong className="text-foreground">Base URL</strong>：<InlineCode>{BASE_URL}</InlineCode></li>
            <li><strong className="text-foreground">版本</strong>：<InlineCode>v1</InlineCode>，通过路径标识（例如 <InlineCode>/v1/...</InlineCode>）</li>
          </ul>

          <h3 className="doc-heading-h3">2.3 通用响应结构</h3>
          <CodeBlock
            language="json"
            code={`{
  "code": 0,
  "message": "ok",
  "request_id": "req_1234567890",
  "data": { }
}`}
          />
          <ul className="list-disc list-inside space-y-2 text-muted-foreground text-[15px] mt-4">
            <li><InlineCode>code = 0</InlineCode> 表示成功；非 0 为失败。</li>
            <li><InlineCode>request_id</InlineCode> 便于问题追踪，请在工单中携带。</li>
          </ul>
        </section>

        {/* Services Section */}
        <section id="services" className="mt-10">
          <h2 className="doc-heading-h2">3. 服务目录</h2>
          
          <h3 className="doc-heading-h3">3.1 聊天（Chat / Completions）</h3>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-2.5 py-1 text-xs font-bold rounded bg-method-post-bg text-method-post">POST</span>
            <InlineCode>/v1/chat/completions</InlineCode>
          </div>
          <p className="text-muted-foreground text-[15px] mb-4">
            <strong className="text-foreground">用途</strong>：对话问答、指令执行、结构化信息抽取
          </p>
          
          <p className="text-sm font-semibold text-foreground mb-2">请求体：</p>
          <CodeBlock
            language="json"
            code={`{
  "model": "gpt-5",
  "messages": [
    {"role": "user", "content": "用一句话介绍 ${SYSTEM_NAME}"}
  ],
  "temperature": 0.7,
  "stream": false
}`}
          />

          <p className="text-sm font-semibold text-foreground mb-2 mt-6">成功响应（非流式）：</p>
          <CodeBlock
            language="json"
            code={`{
  "code": 0,
  "message": "ok",
  "data": {
    "id": "chatcmpl_abc",
    "model": "gpt-5",
    "choices": [
      {"index": 0, "message": {"role": "assistant", "content": "${SYSTEM_NAME} 聚合多模态AI能力，助你快速上线智能产品。"}}
    ],
    "usage": {"prompt_tokens": 12, "completion_tokens": 24, "total_tokens": 36}
  }
}`}
          />

          <p className="text-muted-foreground text-[15px] mt-4">
            <strong className="text-foreground">流式说明</strong>：当 <InlineCode>stream=true</InlineCode> 时返回 <InlineCode>text/event-stream</InlineCode>，按行推送 <InlineCode>data:</InlineCode> 事件。
          </p>

          <p className="text-sm font-semibold text-foreground mb-2 mt-6">cURL 示例：</p>
          <CodeBlock
            language="bash"
            title="cURL"
            code={`curl -X POST ${BASE_URL}/v1/chat/completions \\
  -H "Authorization: Bearer <Your_API_Key>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model":"gpt-5",
    "messages":[{"role":"user","content":"你好！"}],
    "temperature":0.7,
    "stream":false
  }'`}
          />

          <h3 className="doc-heading-h3 mt-10">3.2 图像生成（Image Generation）</h3>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-2.5 py-1 text-xs font-bold rounded bg-method-post-bg text-method-post">POST</span>
            <InlineCode>/v1/images/generations</InlineCode>
          </div>
          <p className="text-muted-foreground text-[15px] mb-4">
            <strong className="text-foreground">用途</strong>：根据文本生成图片；可选高清、尺寸、数量
          </p>

          <p className="text-sm font-semibold text-foreground mb-2">请求体：</p>
          <CodeBlock
            language="json"
            code={`{
  "model": "gpt-4o-image",
  "prompt": "一只戴着蓝色围巾的兔子，卡通，高清",
  "size": "1024x1024",
  "n": 1
}`}
          />

          <p className="text-sm font-semibold text-foreground mb-2 mt-6">成功响应：</p>
          <CodeBlock
            language="json"
            code={`{
  "data": {
    "created": 1736160000,
    "images": [
      {"url": "https://cdn.example.com/i/abc.png"}
    ]
  }
}`}
          />

          <p className="text-sm font-semibold text-foreground mb-2 mt-6">cURL 示例：</p>
          <CodeBlock
            language="bash"
            title="cURL"
            code={`curl -X POST ${BASE_URL}/v1/images/generations \\
  -H "Authorization: Bearer <Your_API_Key>" \\
  -H "Content-Type: application/json" \\
  -d '{"model":"gpt-4o-image","prompt":"戴蓝围巾的可爱兔子","size":"1024x1024","n":1}'`}
          />
        </section>

        {/* Webhook Section */}
        <section id="webhook" className="mt-10">
          <h2 className="doc-heading-h2">4. Webhook 回调（可选）</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground text-[15px]">
            <li>推荐对 <strong className="text-foreground">异步任务</strong>（如视频）配置 <InlineCode>webhook_url</InlineCode>。</li>
            <li>回调将以 <InlineCode>POST</InlineCode> 方式发送 JSON，包含 <InlineCode>job_id</InlineCode>、<InlineCode>status</InlineCode>、资源地址与签名头 <InlineCode>X-OranAI-Signature</InlineCode>。</li>
            <li>验签：使用服务端保存的 <InlineCode>Webhook Secret</InlineCode> 与请求体进行 HMAC-SHA256 校验。</li>
          </ul>
        </section>

        {/* Idempotency Section */}
        <section id="idempotency" className="mt-10">
          <h2 className="doc-heading-h2">5. 幂等性与重复提交</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground text-[15px]">
            <li>对可产生侧效应的接口（如下单、任务提交），支持 <strong className="text-foreground">Idempotency-Key</strong>：<InlineCode>Idempotency-Key: &lt;uuid&gt;</InlineCode></li>
            <li>服务器将对同一 Key 的请求返回相同结果，避免重复扣费或重复生成。</li>
          </ul>
        </section>

        {/* SDK Section */}
        <section id="sdk" className="mt-10">
          <h2 className="doc-heading-h2">6. SDK 与示例</h2>
          
          <h3 className="doc-heading-h3">JavaScript（fetch）</h3>
          <CodeBlock
            language="javascript"
            title="JavaScript"
            code={`const r = await fetch("${BASE_URL}/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    model: "gpt-5",
    messages: [{ role: "user", content: "给 ${SYSTEM_NAME} 写一句宣传语" }]
  })
});
const data = await r.json();
console.log(data.data.choices[0].message.content);`}
          />

          <h3 className="doc-heading-h3">Python（requests）</h3>
          <CodeBlock
            language="python"
            title="Python"
            code={`import requests, json

resp = requests.post(
  "${BASE_URL}/v1/chat/completions",
  headers={
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
  },
  json={
    "model": "gpt-5",
    "messages": [{"role":"user","content":"介绍一下 ${SYSTEM_NAME}"}]
  }
)
print(resp.json())`}
          />
        </section>

        {/* Security Section */}
        <section id="security" className="mt-10">
          <h2 className="doc-heading-h2">7. 安全与合规</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground text-[15px]">
            <li>请妥善保管 API Key，避免在前端明文暴露。</li>
            <li>遵循使用政策与内容合规要求；对可能含敏感内容的场景，建议启用 <strong className="text-foreground">审计/安全策略</strong>。</li>
            <li>对生产环境启用 <strong className="text-foreground">IP 白名单</strong> 与 <strong className="text-foreground">请求签名</strong>。</li>
          </ul>
        </section>

        {/* Support Section */}
        <section id="support" className="mt-10">
          <h2 className="doc-heading-h2">8. 支持与反馈</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground text-[15px]">
            <li>工单/邮箱：<a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline font-medium">{CONTACT_EMAIL}</a></li>
            <li>请在反馈中提供：调用时间、<InlineCode>request_id</InlineCode>、接口名、示例请求体/响应体（脱敏）。</li>
          </ul>
        </section>

        {/* Reminder Section */}
        <section id="reminder" className="mt-10">
          <h2 className="doc-heading-h2">9. 再次提醒</h2>
          <Blockquote variant="warning">
            <strong>只有当接口在文档中显示为「已发布」状态时才可正常使用；若为「待开发」，将无法保证可用性与返回结果。</strong>
          </Blockquote>
        </section>

        {/* Footer */}
        <div className="mt-10 p-6 bg-muted/30 rounded-xl border border-border">
          <p className="text-muted-foreground text-[15px]">
            感谢使用 <strong className="text-foreground">{SYSTEM_NAME}</strong>！如果需要更多行业方案与稳定性保障，欢迎联系我们获取企业版支持。
          </p>
        </div>

        {/* Page Navigation */}
        <PageNavigation />
      </article>

      {/* Table of Contents */}
      <TableOfContents items={tocItems} />
    </div>
  );
}
