import { CodeBlock } from '@/components/docs/CodeBlock';
import { Blockquote } from '@/components/docs/Blockquote';
import { PageNavigation } from '@/components/docs/PageNavigation';
import CopyPageDropdown from '@/components/docs/CopyPageDropdown';
import { MethodBadge } from '@/components/MethodBadge';
import { Copy } from 'lucide-react';
import { useState } from 'react';

export default function GenerateVideoPage() {
  const [copied, setCopied] = useState(false);
  const endpoint = 'https://models.photog.art/v1/videos';

  const handleCopyEndpoint = async () => {
    await navigator.clipboard.writeText(endpoint);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const curlExample = `curl -X POST "https://models.photog.art/v1/videos" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -F "model=kling-video-o1" \\
  -F "prompt=图中形象在喝牛奶" \\
  -F "seconds=5" \\
  -F "size=1280x720" \\
  -F "input_reference=@/path/to/image.png"`;

  const pythonExample = `import requests

url = "https://models.photog.art/v1/videos"
headers = {
    "Authorization": "Bearer YOUR_API_KEY"
}

# 使用图片文件
files = {
    "input_reference": open("/path/to/image.png", "rb")
}
data = {
    "model": "kling-video-o1",
    "prompt": "图中形象在喝牛奶",
    "seconds": 5,
    "size": "1280x720"
}

response = requests.post(url, headers=headers, files=files, data=data)
print(response.json())

# 使用图片 URL
data_url = {
    "model": "kling-video-o1",
    "prompt": "图中形象在喝牛奶",
    "seconds": 5,
    "size": "1280x720",
    "first_frame_image": "https://example.com/image.png"
}

response = requests.post(url, headers=headers, data=data_url)
print(response.json())`;

  const responseExample = `{
  "id": "ad4c19e6-d5da-41ed-845c-0b4db3fb2068:klingai@video-o1-reference-to-video",
  "object": "video",
  "status": "queued",
  "created_at": 1766058441
}`;

  return (
    <>
      <article className="prose prose-slate dark:prose-invert max-w-none">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-0">生成视频</h1>
          <CopyPageDropdown pageTitle="生成视频" />
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
          使用 OpenAI 兼容格式调用可灵（Kling）O1 视频生成模型。支持文生视频、图生视频和视频编辑等多种模式。
        </Blockquote>

        <Blockquote variant="warning">
          此接口使用 multipart/form-data 格式，而非 JSON 格式。
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
                  <td className="py-3 px-4">模型名称：kling-video-o1 或 kling-video-o1-edit</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">prompt</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">是</td>
                  <td className="py-3 px-4">视频生成提示词</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">seconds</td>
                  <td className="py-3 px-4">integer</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">视频时长（秒）：5 或 10</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">size</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">视频尺寸：720x1280、1280x720、1024x1792、1792x1024</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">input_reference</td>
                  <td className="py-3 px-4">file</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">参考图片文件或 URL，支持最多 10 张图片</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">first_frame_image</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">首帧图 URL</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">last_frame_image</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">尾帧图 URL</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">video</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">参考视频 URL（用于视频编辑）</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Request Example */}
        <section id="request-example" className="mt-8">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">请求示例</h2>
          <CodeBlock code={curlExample} language="bash" title="cURL 示例" />
          <CodeBlock code={pythonExample} language="python" title="Python 示例" />
        </section>

        {/* Response Example */}
        <section id="response-example" className="mt-8">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">响应示例</h2>
          <CodeBlock code={responseExample} language="json" title="成功响应" />
        </section>

        <Blockquote variant="tip">
          返回的 id 用于查询视频生成状态。状态为 queued 表示任务已加入队列，使用查询视频接口获取最终结果。
        </Blockquote>

        <PageNavigation />
      </article>
    </>
  );
}
