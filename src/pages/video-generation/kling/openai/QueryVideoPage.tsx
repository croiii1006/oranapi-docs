import { CodeBlock } from '@/components/docs/CodeBlock';
import { Blockquote } from '@/components/docs/Blockquote';
import { PageNavigation } from '@/components/docs/PageNavigation';
import CopyPageDropdown from '@/components/docs/CopyPageDropdown';
import { MethodBadge } from '@/components/MethodBadge';
import { Copy } from 'lucide-react';
import { useState } from 'react';

export default function QueryVideoPage() {
  const [copied, setCopied] = useState(false);
  const endpoint = 'https://models.photog.art/v1/videos/{id}';

  const handleCopyEndpoint = async () => {
    await navigator.clipboard.writeText(endpoint);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const curlExample = `curl -X GET "https://models.photog.art/v1/videos/ad4c19e6-d5da-41ed-845c-0b4db3fb2068:klingai@video-o1-reference-to-video" \\
  -H "Authorization: Bearer YOUR_API_KEY"`;

  const pythonExample = `import requests

video_id = "ad4c19e6-d5da-41ed-845c-0b4db3fb2068:klingai@video-o1-reference-to-video"
url = f"https://models.photog.art/v1/videos/{video_id}"
headers = {
    "Authorization": "Bearer YOUR_API_KEY"
}

response = requests.get(url, headers=headers)
result = response.json()

if result["status"] == "completed":
    print("视频生成完成！")
    print(f"视频地址: {result['video_url']}")
else:
    print(f"当前状态: {result['status']}")`;

  const responseExample = `{
  "id": "ad4c19e6-d5da-41ed-845c-0b4db3fb2068:klingai/video-o1-reference-to-video",
  "object": "video",
  "status": "completed",
  "video_url": "https://cdn.aimlapi.com/flamingo/files/b/0a86caa4/_Xo1zr2ovmhIjsKc0rYMW_output.mp4",
  "created_at": 1766058603
}`;

  const statusPendingExample = `{
  "id": "ad4c19e6-d5da-41ed-845c-0b4db3fb2068:klingai/video-o1-reference-to-video",
  "object": "video",
  "status": "processing",
  "created_at": 1766058441
}`;

  return (
    <>
      <article className="prose prose-slate dark:prose-invert max-w-none">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-0">查询视频</h1>
          <CopyPageDropdown pageTitle="查询视频" />
        </div>

        {/* Endpoint */}
        <div className="flex items-center gap-3 mb-6 p-4 bg-slate-100 dark:bg-slate-800 rounded-lg">
          <MethodBadge method="GET" />
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
          查询使用 OpenAI 兼容格式创建的可灵（Kling）视频任务状态和结果。任务完成后可获取视频下载地址。
        </Blockquote>

        {/* Path Parameters */}
        <section id="path-params" className="mt-8">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">路径参数</h2>
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
                  <td className="py-3 px-4 font-mono text-purple-600">id</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">是</td>
                  <td className="py-3 px-4">视频任务 ID，创建视频时返回的 id</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Response Fields */}
        <section id="response-fields" className="mt-8">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">响应字段</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-slate-700 dark:text-slate-300">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="text-left py-3 px-4 font-semibold">字段</th>
                  <th className="text-left py-3 px-4 font-semibold">类型</th>
                  <th className="text-left py-3 px-4 font-semibold">描述</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">id</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">视频任务 ID</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">object</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">对象类型，固定为 "video"</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">status</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">任务状态：queued、processing、completed、failed</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">video_url</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">视频下载地址（状态为 completed 时返回）</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">created_at</td>
                  <td className="py-3 px-4">integer</td>
                  <td className="py-3 px-4">任务创建时间，Unix 时间戳</td>
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
          <CodeBlock code={responseExample} language="json" title="成功响应（已完成）" />
          <CodeBlock code={statusPendingExample} language="json" title="处理中响应" />
        </section>

        <Blockquote variant="tip">
          任务状态说明：queued（排队中）- 等待处理；processing（处理中）- 正在生成视频；completed（已完成）- 可下载视频；failed（失败）- 生成失败。
        </Blockquote>

        <PageNavigation />
      </article>
    </>
  );
}
