import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Copy, Check } from 'lucide-react';
import { CodeBlock, InlineCode } from '@/components/docs/CodeBlock';
import { Blockquote } from '@/components/docs/Blockquote';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { PageNavigation } from '@/components/docs/PageNavigation';
import CopyPageDropdown from '@/components/docs/CopyPageDropdown';
import { BASE_URL } from '@/config/constants';
import { toast } from 'sonner';

const tocItems = [
  { id: 'endpoint', title: '接口信息', level: 2 },
  { id: 'request', title: '请求参数', level: 2 },
  { id: 'response', title: '响应结构', level: 2 },
  { id: 'examples', title: '代码示例', level: 2 },
];

export function ChatCompletionsPage() {
  const location = useLocation();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const fullPath = `${BASE_URL}/v1/chat/completions`;

  const handleCopyPath = async () => {
    await navigator.clipboard.writeText(fullPath);
    setCopied(true);
    toast.success('已复制接口路径');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex gap-10">
      <article className="docs-content flex-1 min-w-0 max-w-[1000px]">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-1">
          <h1 className="doc-heading-h1 !border-b-0 !pb-0 !mb-0">创建聊天补全</h1>
          <CopyPageDropdown pageTitle="创建聊天补全" />
        </div>
        <div className="border-b border-border/40 mb-6 pb-4" />

        {/* Endpoint */}
        <section id="endpoint" className="mt-6">
          <h2 className="doc-heading-h2">接口信息</h2>
          <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg border border-border">
            <span className="px-2.5 py-1 text-xs font-bold rounded bg-method-post-bg text-method-post">POST</span>
            <code className="flex-1 text-sm font-mono text-foreground">{fullPath}</code>
            <button
              onClick={handleCopyPath}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded text-xs bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? '已复制' : '复制'}
            </button>
          </div>
          <p className="text-muted-foreground text-[15px] mt-4">
            给定一个提示，该模型将返回一个或多个预测的完成，并且还可以返回每个位置的替代标记的概率。
          </p>
        </section>

        {/* Request Parameters */}
        <section id="request" className="mt-10">
          <h2 className="doc-heading-h2">请求参数</h2>
          
          <h3 className="doc-heading-h3">Headers</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold">参数</th>
                  <th className="text-left py-3 px-4 font-semibold">必填</th>
                  <th className="text-left py-3 px-4 font-semibold">示例</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium text-foreground"><InlineCode>Content-Type</InlineCode></td>
                  <td className="py-3 px-4">是</td>
                  <td className="py-3 px-4"><InlineCode>application/json</InlineCode></td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium text-foreground"><InlineCode>Accept</InlineCode></td>
                  <td className="py-3 px-4">是</td>
                  <td className="py-3 px-4"><InlineCode>application/json</InlineCode></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-foreground"><InlineCode>Authorization</InlineCode></td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4"><InlineCode>Bearer {'{{YOUR_API_KEY}}'}</InlineCode></td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="doc-heading-h3 mt-6">Body 参数</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold">参数</th>
                  <th className="text-left py-3 px-4 font-semibold">类型</th>
                  <th className="text-left py-3 px-4 font-semibold">必填</th>
                  <th className="text-left py-3 px-4 font-semibold">描述</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium text-foreground"><InlineCode>model</InlineCode></td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">是</td>
                  <td className="py-3 px-4">要使用的模型的 ID</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium text-foreground"><InlineCode>messages</InlineCode></td>
                  <td className="py-3 px-4">array</td>
                  <td className="py-3 px-4">是</td>
                  <td className="py-3 px-4">至今为止对话所包含的消息列表</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium text-foreground"><InlineCode>temperature</InlineCode></td>
                  <td className="py-3 px-4">number</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">采样温度，介于 0 和 2 之间。较高值使输出更随机</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium text-foreground"><InlineCode>top_p</InlineCode></td>
                  <td className="py-3 px-4">number</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">核采样，0.1 意味着只考虑前 10% 概率质量的标记</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium text-foreground"><InlineCode>n</InlineCode></td>
                  <td className="py-3 px-4">integer</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">为每个输入消息生成多少个聊天补全选择（默认1）</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium text-foreground"><InlineCode>stream</InlineCode></td>
                  <td className="py-3 px-4">boolean</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">是否流式返回（默认false）</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium text-foreground"><InlineCode>max_tokens</InlineCode></td>
                  <td className="py-3 px-4">integer</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">生成的最大标记数</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-foreground"><InlineCode>stop</InlineCode></td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">最多 4 个序列,API 将停止进一步生成</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm font-semibold text-foreground mb-2 mt-6">请求示例：</p>
          <CodeBlock
            language="json"
            title="Request Body"
            code={`{
  "model": "chatgpt-4o-latest",
  "messages": [
    {
      "role": "user",
      "content": "你好啊"
    }
  ],
  "temperature": 0.7,
  "stream": false
}`}
          />
        </section>

        {/* Response */}
        <section id="response" className="mt-10">
          <h2 className="doc-heading-h2">响应结构</h2>
          <CodeBlock
            language="json"
            title="成功响应 (200)"
            code={`{
  "id": "chatcmpl-123",
  "object": "chat.completion",
  "created": 1677652288,
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "\\n\\nHello there, how may I assist you today?"
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 9,
    "completion_tokens": 12,
    "total_tokens": 21
  }
}`}
          />
        </section>

        {/* Examples */}
        <section id="examples" className="mt-10">
          <h2 className="doc-heading-h2">代码示例</h2>

          <h3 className="doc-heading-h3">cURL</h3>
          <CodeBlock
            language="bash"
            title="cURL"
            code={`curl -X POST "${BASE_URL}/v1/chat/completions" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "chatgpt-4o-latest",
    "messages": [{"role": "user", "content": "你好"}],
    "temperature": 0.7,
    "stream": false
  }'`}
          />

          <h3 className="doc-heading-h3">JavaScript</h3>
          <CodeBlock
            language="javascript"
            title="JavaScript"
            code={`const response = await fetch("${BASE_URL}/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    model: "chatgpt-4o-latest",
    messages: [{ role: "user", content: "你好" }],
    temperature: 0.7,
    stream: false
  })
});

const data = await response.json();
console.log(data.choices[0].message.content);`}
          />

          <h3 className="doc-heading-h3">Python</h3>
          <CodeBlock
            language="python"
            title="Python"
            code={`import requests

response = requests.post(
    "${BASE_URL}/v1/chat/completions",
    headers={
        "Authorization": "Bearer YOUR_API_KEY",
        "Content-Type": "application/json"
    },
    json={
        "model": "chatgpt-4o-latest",
        "messages": [{"role": "user", "content": "你好"}],
        "temperature": 0.7,
        "stream": False
    }
)

print(response.json())`}
          />
        </section>

        <Blockquote variant="info" className="mt-8">
          <strong>流式说明：</strong>当 <InlineCode>stream=true</InlineCode> 时返回 <InlineCode>text/event-stream</InlineCode>，按行推送 <InlineCode>data:</InlineCode> 事件。
        </Blockquote>

        <PageNavigation />
      </article>

      <TableOfContents items={tocItems} />
    </div>
  );
}
