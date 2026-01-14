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

export function CreateImagePage() {
  const location = useLocation();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const fullPath = `${BASE_URL}/v1/images/generations`;

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
          <h1 className="doc-heading-h1 !border-b-0 !pb-0 !mb-0">创建图像</h1>
          <CopyPageDropdown pageTitle="创建图像" />
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
            给定提示和/或输入图像，模型将生成新图像。
          </p>
          <Blockquote variant="info" className="mt-4">
            相关指南：<a href="https://platform.openai.com/docs/guides/images" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">图像生成</a>
          </Blockquote>
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
                  <td className="py-3 px-4 font-medium text-foreground"><InlineCode>prompt</InlineCode></td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">是</td>
                  <td className="py-3 px-4">所需图像的文本描述。最大长度为 1000 个字符</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium text-foreground"><InlineCode>model</InlineCode></td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">用于图像生成的模型</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium text-foreground"><InlineCode>n</InlineCode></td>
                  <td className="py-3 px-4">integer</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">要生成的图像数。必须介于 1 和 10 之间</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium text-foreground"><InlineCode>size</InlineCode></td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">生成图像的大小。必须是 <InlineCode>256x256</InlineCode>、<InlineCode>512x512</InlineCode> 或 <InlineCode>1024x1024</InlineCode> 之一</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium text-foreground"><InlineCode>quality</InlineCode></td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">生成图像的质量。<InlineCode>hd</InlineCode> 创建更精细细节的图像（仅 dall-e-3）</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium text-foreground"><InlineCode>response_format</InlineCode></td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">返回格式。必须是 <InlineCode>url</InlineCode> 或 <InlineCode>b64_json</InlineCode></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-foreground"><InlineCode>style</InlineCode></td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">生成图像的风格。<InlineCode>vivid</InlineCode> 超真实，<InlineCode>natural</InlineCode> 自然（仅 dall-e-3）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm font-semibold text-foreground mb-2 mt-6">请求示例：</p>
          <CodeBlock
            language="json"
            title="Request Body"
            code={`{
  "model": "gpt-4o-image-vip",
  "prompt": "画一副清明上河图",
  "n": 1,
  "size": "1024x1024"
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
  "created": 1589478378,
  "data": [
    {
      "url": "https://..."
    },
    {
      "url": "https://..."
    }
  ]
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
            code={`curl -X POST "${BASE_URL}/v1/images/generations" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "gpt-4o-image-vip",
    "prompt": "画一副清明上河图",
    "n": 1,
    "size": "1024x1024"
  }'`}
          />

          <h3 className="doc-heading-h3">JavaScript</h3>
          <CodeBlock
            language="javascript"
            title="JavaScript"
            code={`const response = await fetch("${BASE_URL}/v1/images/generations", {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    model: "gpt-4o-image-vip",
    prompt: "画一副清明上河图",
    n: 1,
    size: "1024x1024"
  })
});

const data = await response.json();
console.log(data.data[0].url);`}
          />
        </section>

        <PageNavigation />
      </article>

      <TableOfContents items={tocItems} />
    </div>
  );
}
