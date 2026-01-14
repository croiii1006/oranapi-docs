import { CodeBlock } from '@/components/docs/CodeBlock';
import { Blockquote } from '@/components/docs/Blockquote';
import { PageNavigation } from '@/components/docs/PageNavigation';
import CopyPageDropdown from '@/components/docs/CopyPageDropdown';
import { MethodBadge } from '@/components/MethodBadge';
import { Copy } from 'lucide-react';
import { useState } from 'react';

export default function GenerateWithImagePage() {
  const [copied, setCopied] = useState(false);
  const endpoint = 'https://models.photog.art/v1/chat/completions';

  const handleCopyEndpoint = async () => {
    await navigator.clipboard.writeText(endpoint);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const requestExample = `{
  "model": "gpt-4o-image-vip",
  "stream": false,
  "messages": [
    {
      "role": "user",
      "content": [
        {
          "text": "图中形象在喝牛奶",
          "type": "text"
        },
        {
          "image_url": {
            "url": "https://tuziai.oss-cn-shenzhen.aliyuncs.com/wiki/code/mdjourney/cat_3.png"
          },
          "type": "image_url"
        }
      ]
    }
  ]
}`;

  const curlExample = `curl -X POST "https://models.photog.art/v1/chat/completions" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "gpt-4o-image-vip",
    "stream": false,
    "messages": [
      {
        "role": "user",
        "content": [
          {
            "text": "图中形象在喝牛奶",
            "type": "text"
          },
          {
            "image_url": {
              "url": "https://example.com/image.png"
            },
            "type": "image_url"
          }
        ]
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
    "model": "gpt-4o-image-vip",
    "stream": False,
    "messages": [
        {
            "role": "user",
            "content": [
                {"text": "图中形象在喝牛奶", "type": "text"},
                {"image_url": {"url": "https://example.com/image.png"}, "type": "image_url"}
            ]
        }
    ]
}

response = requests.post(url, headers=headers, json=data)
print(response.json())`;

  return (
    <>
      <article className="prose prose-slate dark:prose-invert max-w-none">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-0">生成图片（传图）</h1>
          <CopyPageDropdown pageTitle="生成图片（传图）" />
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
          使用 chat 格式生成图片，支持传入参考图片进行图像编辑或风格迁移。适用于图生图、图像修改等场景。
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
                  <td className="py-3 px-4">消息数组，包含文本和图片内容</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600 pl-8">role</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">是</td>
                  <td className="py-3 px-4">消息角色，通常为 "user"</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600 pl-8">content</td>
                  <td className="py-3 px-4">array</td>
                  <td className="py-3 px-4">是</td>
                  <td className="py-3 px-4">内容数组，包含 text 和 image_url 类型</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600 pl-12">type</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">是</td>
                  <td className="py-3 px-4">内容类型：text 或 image_url</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600 pl-12">text</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">文本提示词（type 为 text 时）</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600 pl-12">image_url</td>
                  <td className="py-3 px-4">object</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">图片 URL 对象（type 为 image_url 时）</td>
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
          支持的模型包括：gpt-4o-image-vip、gpt-image-1.5 等。传入的图片 URL 必须是可公开访问的链接。
        </Blockquote>

        <PageNavigation />
      </article>
    </>
  );
}
