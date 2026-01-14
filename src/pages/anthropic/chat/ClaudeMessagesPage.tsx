import { CodeBlock } from '@/components/docs/CodeBlock';
import { Blockquote } from '@/components/docs/Blockquote';
import { PageNavigation } from '@/components/docs/PageNavigation';
import CopyPageDropdown from '@/components/docs/CopyPageDropdown';
import { MethodBadge } from '@/components/MethodBadge';
import { Copy } from 'lucide-react';
import { useState } from 'react';

export default function ClaudeMessagesPage() {
  const [copied, setCopied] = useState(false);
  const endpoint = 'https://models.photog.art/v1/messages';

  const handleCopyEndpoint = async () => {
    await navigator.clipboard.writeText(endpoint);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const requestExample = `{
  "model": "claude-opus-4-1-thinking",
  "max_tokens": 1024,
  "messages": [
    {
      "role": "user",
      "content": "分析文件代码的架构体系"
    }
  ],
  "stream": false
}`;

  const curlExample = `curl -X POST "https://models.photog.art/v1/messages" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "claude-opus-4-1-thinking",
    "max_tokens": 1024,
    "messages": [
      {
        "role": "user",
        "content": "分析文件代码的架构体系"
      }
    ],
    "stream": false
  }'`;

  const pythonExample = `import requests

url = "https://models.photog.art/v1/messages"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "model": "claude-opus-4-1-thinking",
    "max_tokens": 1024,
    "messages": [
        {"role": "user", "content": "分析文件代码的架构体系"}
    ],
    "stream": False
}

response = requests.post(url, headers=headers, json=data)
print(response.json())`;

  return (
    <>
      <article className="prose prose-slate dark:prose-invert max-w-none">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-0">Claude（Messages API）</h1>
          <CopyPageDropdown pageTitle="Claude（Messages API）" />
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
          Anthropic Claude Messages API，支持与 Claude 模型进行对话交互。兼容多种 Claude 模型，包括 claude-opus-4-1-thinking、claude-sonnet 等。
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
                  <td className="py-3 px-4">要使用的模型的 ID</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">messages</td>
                  <td className="py-3 px-4">array</td>
                  <td className="py-3 px-4">是</td>
                  <td className="py-3 px-4">以聊天格式生成聊天完成的消息</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">max_tokens</td>
                  <td className="py-3 px-4">integer</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">聊天完成时生成的最大令牌数</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">temperature</td>
                  <td className="py-3 px-4">number</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">采样温度，介于 0 和 2 之间。较高的值使输出更随机，较低的值使输出更确定</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">top_p</td>
                  <td className="py-3 px-4">number</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">核采样参数，0.1 意味着只考虑构成前 10% 概率质量的标记</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">stream</td>
                  <td className="py-3 px-4">boolean</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">是否启用流式输出</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">stop</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">API 将停止生成更多令牌的最多 4 个序列</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">presence_penalty</td>
                  <td className="py-3 px-4">number</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">-2.0 到 2.0 之间，正值会增加模型谈论新主题的可能性</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">frequency_penalty</td>
                  <td className="py-3 px-4">number</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">-2.0 到 2.0 之间，正值会降低模型重复同一行的可能性</td>
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
        </section>

        <Blockquote variant="tip">
          可用模型包括：claude-opus-4-1-thinking、claude-sonnet-4、claude-3-5-sonnet 等。请根据实际需求选择合适的模型。
        </Blockquote>

        <PageNavigation />
      </article>
    </>
  );
}
