import { CodeBlock } from '@/components/docs/CodeBlock';
import { Blockquote } from '@/components/docs/Blockquote';
import { PageNavigation } from '@/components/docs/PageNavigation';
import CopyPageDropdown from '@/components/docs/CopyPageDropdown';
import { MethodBadge } from '@/components/MethodBadge';
import { Copy } from 'lucide-react';
import { useState } from 'react';

export default function VideoEffectsPage() {
  const [copied, setCopied] = useState(false);
  const endpoint = 'https://models.photog.art/kling/v1/videos/effects';

  const handleCopyEndpoint = async () => {
    await navigator.clipboard.writeText(endpoint);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const requestExample = `{
  "effect_scene": "squish",
  "input": {
    "model_name": "kling-v1-6",
    "image": "https://example.com/image.png",
    "duration": "5",
    "mode": "std"
  }
}`;

  const curlExample = `curl -X POST "https://models.photog.art/kling/v1/videos/effects" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "effect_scene": "squish",
    "input": {
      "model_name": "kling-v1-6",
      "image": "https://example.com/image.png",
      "duration": "5",
      "mode": "std"
    }
  }'`;

  const pythonExample = `import requests

url = "https://models.photog.art/kling/v1/videos/effects"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "effect_scene": "squish",
    "input": {
        "model_name": "kling-v1-6",
        "image": "https://example.com/image.png",
        "duration": "5",
        "mode": "std"
    }
}

response = requests.post(url, headers=headers, json=data)
print(response.json())`;

  return (
    <>
      <article className="prose prose-slate dark:prose-invert max-w-none">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-0">视频特效</h1>
          <CopyPageDropdown pageTitle="视频特效" />
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
          使用可灵（Kling）模型为图像生成视频特效。支持多种特效场景，如挤压（squish）等趣味效果。
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
                  <td className="py-3 px-4 font-mono text-purple-600">effect_scene</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">是</td>
                  <td className="py-3 px-4">场景名称，如 squish 等</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">input</td>
                  <td className="py-3 px-4">object</td>
                  <td className="py-3 px-4">是</td>
                  <td className="py-3 px-4">输入参数结构体</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600 pl-8">model_name</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">是</td>
                  <td className="py-3 px-4">模型名称，如 kling-v1-6</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600 pl-8">image</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">是</td>
                  <td className="py-3 px-4">参考图像，支持 Base64 编码或图片 URL</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600 pl-8">duration</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">是</td>
                  <td className="py-3 px-4">视频时长（秒），枚举值：5</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600 pl-8">mode</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">生成模式：std（标准）或 pro（高品质）</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600 pl-8">images</td>
                  <td className="py-3 px-4">array</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">参考图像组（用于合照等场景），数组长度必须为 2</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">callback_url</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">任务结果回调通知地址</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">external_task_id</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">自定义任务 ID，用于任务查询</td>
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

        <Blockquote variant="warning">
          使用 Base64 编码时，请勿添加 data:image/png;base64, 等前缀，直接传递编码后的字符串即可。
        </Blockquote>

        <Blockquote variant="tip">
          图片要求：格式支持 .jpg/.jpeg/.png，大小不超过 10MB，分辨率不小于 300px，宽高比介于 1:2.5 ~ 2.5:1 之间。
        </Blockquote>

        <PageNavigation />
      </article>
    </>
  );
}
