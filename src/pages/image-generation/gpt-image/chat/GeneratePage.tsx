import { CodeBlock } from '@/components/docs/CodeBlock';
import { Blockquote } from '@/components/docs/Blockquote';
import { PageNavigation } from '@/components/docs/PageNavigation';
import CopyPageDropdown from '@/components/docs/CopyPageDropdown';
import { MethodBadge } from '@/components/MethodBadge';
import { Copy } from 'lucide-react';
import { useState } from 'react';

export default function GeneratePage() {
  const [copied, setCopied] = useState(false);
  const endpoint = 'https://models.photog.art/v1/chat/completions';

  const handleCopyEndpoint = async () => {
    await navigator.clipboard.writeText(endpoint);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const requestExample = `{
  "stream": true,
  "model": "gpt-4o-image-vip",
  "messages": [
    {
      "content": "画个千里江山，水墨风格",
      "role": "user"
    }
  ]
}`;

  const curlExample = `curl -X POST "https://models.photog.art/v1/chat/completions" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "stream": true,
    "model": "gpt-4o-image-vip",
    "messages": [
      {
        "content": "画个千里江山，水墨风格",
        "role": "user"
      }
    ]
  }'`;

  const pythonExample = `import requests

url = "https://models.photog.art/v1/chat/completions"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "stream": True,
    "model": "gpt-4o-image-vip",
    "messages": [
        {"content": "画个千里江山，水墨风格", "role": "user"}
    ]
}

response = requests.post(url, headers=headers, json=data, stream=True)
for line in response.iter_lines():
    if line:
        print(line.decode('utf-8'))`;

  const jsExample = `const response = await fetch("https://models.photog.art/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    stream: true,
    model: "gpt-4o-image-vip",
    messages: [
      { content: "画个千里江山，水墨风格", role: "user" }
    ]
  })
});

const reader = response.body.getReader();
const decoder = new TextDecoder();

while (true) {
  const { done, value } = await reader.read();
  if (done) break;
  console.log(decoder.decode(value));
}`;

  return (
    <>
      <article className="prose prose-slate dark:prose-invert max-w-none">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-0">生成图片</h1>
          <CopyPageDropdown pageTitle="生成图片" />
        </div>

        {/* Endpoint */}
        <div className="flex items-center gap-3 mb-6 p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
          <MethodBadge method="POST" />
          <code className="flex-1 text-sm text-slate-700 dark:text-slate-300 font-mono">{endpoint}</code>
          <button
            onClick={handleCopyEndpoint}
            className="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded transition-colors"
            title="复制接口地址"
          >
            <Copy className={`h-4 w-4 ${copied ? 'text-green-500' : 'text-slate-500'}`} />
          </button>
        </div>

        <Blockquote variant="info">
          使用 chat 格式生成图片，通过文本提示词描述生成高质量图像。支持流式输出，实时获取生成进度。
        </Blockquote>

        {/* Request Body Parameters */}
        <section id="request-body" className="mt-8">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">请求体参数</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-slate-700 dark:text-slate-300">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="text-left py-3 px-4 font-semibold">参数</th>
                  <th className="text-left py-3 px-4 font-semibold">类型</th>
                  <th className="text-left py-3 px-4 font-semibold">必填</th>
                  <th className="text-left py-3 px-4 font-semibold">描述</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">model</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">是</td>
                  <td className="py-3 px-4">模型名称，如 gpt-4o-image-vip</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">stream</td>
                  <td className="py-3 px-4">boolean</td>
                  <td className="py-3 px-4">是</td>
                  <td className="py-3 px-4">是否启用流式输出</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">messages</td>
                  <td className="py-3 px-4">array</td>
                  <td className="py-3 px-4">是</td>
                  <td className="py-3 px-4">消息数组</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600 pl-8">role</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">是</td>
                  <td className="py-3 px-4">消息角色，通常为 "user"</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600 pl-8">content</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">是</td>
                  <td className="py-3 px-4">图片生成提示词</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Request Example */}
        <section id="request-example" className="mt-8">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">请求示例</h2>
          <CodeBlock code={requestExample} language="json" title="请求体" />
          <CodeBlock code={curlExample} language="bash" title="cURL 示例" />
          <CodeBlock code={pythonExample} language="python" title="Python 示例" />
          <CodeBlock code={jsExample} language="javascript" title="JavaScript 示例" />
        </section>

        <Blockquote variant="tip">
          支持的模型包括：gpt-4o-image-vip、gpt-image-1.5 等。建议使用流式输出（stream: true）以获取实时生成进度。
        </Blockquote>

        <PageNavigation />
      </article>
    </>
  );
}
