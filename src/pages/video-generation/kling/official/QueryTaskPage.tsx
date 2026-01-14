import { CodeBlock } from '@/components/docs/CodeBlock';
import { Blockquote } from '@/components/docs/Blockquote';
import { PageNavigation } from '@/components/docs/PageNavigation';
import CopyPageDropdown from '@/components/docs/CopyPageDropdown';
import { MethodBadge } from '@/components/MethodBadge';
import { Copy } from 'lucide-react';
import { useState } from 'react';

export default function QueryTaskPage() {
  const [copied, setCopied] = useState(false);
  const endpoint = 'https://models.photog.art/kling/v1/{action}/{action2}/{task_id}';

  const handleCopyEndpoint = async () => {
    await navigator.clipboard.writeText(endpoint);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const responseExample = `{
  "code": 0,
  "message": "success",
  "request_id": "req_xxxxx",
  "data": {
    "task_id": "791860364845252641",
    "task_status": "succeed",
    "task_status_msg": "",
    "created_at": "1722769557708",
    "updated_at": "1722769600000",
    "task_result": {
      "videos": [
        {
          "id": "video_xxxxx",
          "url": "https://example.com/video.mp4",
          "duration": "5"
        }
      ]
    }
  }
}`;

  const curlExample = `curl -X GET "https://models.photog.art/kling/v1/videos/text2video/791860364845252641" \\
  -H "Authorization: Bearer YOUR_API_KEY"`;

  const pythonExample = `import requests

# 文生视频任务查询
url = "https://models.photog.art/kling/v1/videos/text2video/791860364845252641"

# 图生视频任务查询
# url = "https://models.photog.art/kling/v1/videos/image2video/791860364845252641"

# 图片生成任务查询
# url = "https://models.photog.art/kling/v1/images/generations/791860364845252641"

headers = {
    "Authorization": "Bearer YOUR_API_KEY"
}

response = requests.get(url, headers=headers)
print(response.json())`;

  return (
    <>
      <article className="prose prose-slate dark:prose-invert max-w-none">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-0">查询任务</h1>
          <CopyPageDropdown pageTitle="查询任务" />
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
          查询可灵（Kling）视频或图像生成任务的状态和结果。任务完成后可获取生成的视频或图像 URL。
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
                  <td className="py-3 px-4 font-mono text-purple-600">action</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">是</td>
                  <td className="py-3 px-4">资源类型：images 或 videos</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">action2</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">是</td>
                  <td className="py-3 px-4">任务类型：generations（文生图）、text2video、image2video</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">task_id</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">是</td>
                  <td className="py-3 px-4">任务 ID，创建任务时返回的 task_id</td>
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
                  <td className="py-3 px-4 font-mono text-purple-600">task_id</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">任务 ID</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">task_status</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">任务状态：submitted、processing、succeed、failed</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">task_status_msg</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">任务状态消息</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">created_at</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">任务创建时间，Unix 时间戳（毫秒）</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">updated_at</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">任务更新时间，Unix 时间戳（毫秒）</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">task_result</td>
                  <td className="py-3 px-4">object</td>
                  <td className="py-3 px-4">任务结果，包含生成的视频或图像列表</td>
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
          任务状态说明：submitted（已提交）- 任务已创建；processing（处理中）- 正在生成；succeed（成功）- 生成完成可获取结果；failed（失败）- 生成失败。
        </Blockquote>

        <PageNavigation />
      </article>
    </>
  );
}
