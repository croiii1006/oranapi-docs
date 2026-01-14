import { CodeBlock } from '@/components/docs/CodeBlock';
import { Blockquote } from '@/components/docs/Blockquote';
import { PageNavigation } from '@/components/docs/PageNavigation';
import CopyPageDropdown from '@/components/docs/CopyPageDropdown';
import { MethodBadge } from '@/components/MethodBadge';
import { Copy } from 'lucide-react';
import { useState } from 'react';

export default function TextToVideoPage() {
  const [copied, setCopied] = useState(false);
  const endpoint = 'https://models.photog.art/kling/v1/videos/text2video';

  const handleCopyEndpoint = async () => {
    await navigator.clipboard.writeText(endpoint);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const requestExample = `{
  "model_name": "kling-v1-5",
  "prompt": "鲨鱼捕抓猎物",
  "negative_prompt": "",
  "cfg_scale": 0.87,
  "mode": "std",
  "camera_control": {
    "type": "simple",
    "config": {
      "horizontal": -2,
      "vertical": 1,
      "pan": 4,
      "tilt": 1,
      "roll": 1,
      "zoom": 6
    }
  },
  "aspect_ratio": "9:16",
  "duration": "5",
  "callback_url": ""
}`;

  const responseExample = `{
  "code": 0,
  "message": "success",
  "request_id": "req_xxxxx",
  "data": {
    "task_id": "task_xxxxx",
    "task_status": "submitted",
    "created_at": 1722769557708,
    "updated_at": 1722769557708
  }
}`;

  const curlExample = `curl -X POST "https://models.photog.art/kling/v1/videos/text2video" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model_name": "kling-v1-5",
    "prompt": "鲨鱼捕抓猎物",
    "cfg_scale": 0.87,
    "mode": "std",
    "aspect_ratio": "9:16",
    "duration": "5"
  }'`;

  const pythonExample = `import requests

url = "https://models.photog.art/kling/v1/videos/text2video"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "model_name": "kling-v1-5",
    "prompt": "鲨鱼捕抓猎物",
    "cfg_scale": 0.87,
    "mode": "std",
    "aspect_ratio": "9:16",
    "duration": "5"
}

response = requests.post(url, headers=headers, json=data)
print(response.json())`;

  return (
    <>
      <article className="prose prose-slate dark:prose-invert max-w-none">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-0">文生视频</h1>
          <CopyPageDropdown pageTitle="文生视频" />
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
          使用可灵（Kling）模型根据文本提示生成视频。支持多种画面比例、视频时长和摄像机运动控制。
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
                  <td className="py-3 px-4 font-mono text-purple-600">prompt</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">是</td>
                  <td className="py-3 px-4">正向文本提示，不能超过500个字符</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">model_name</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">模型名称，如 kling-v1-5</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">negative_prompt</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">负向文本提示，不能超过200个字符</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">cfg_scale</td>
                  <td className="py-3 px-4">number</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">生成视频的自由度，值越大相关性越强，取值范围：[0, 1]</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">mode</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">生成模式：std（高性能）或 pro（高表现）</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">aspect_ratio</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">画面纵横比：16:9、9:16、1:1</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">duration</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">视频时长（秒）：5 或 10</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">camera_control</td>
                  <td className="py-3 px-4">object</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">摄像机运动控制</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">callback_url</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">任务结果回调通知地址</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Camera Control */}
        <section id="camera-control" className="mt-8">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">摄像机控制参数</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-slate-700 dark:text-slate-300">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="text-left py-3 px-4 font-semibold">参数</th>
                  <th className="text-left py-3 px-4 font-semibold">类型</th>
                  <th className="text-left py-3 px-4 font-semibold">描述</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">horizontal</td>
                  <td className="py-3 px-4">integer</td>
                  <td className="py-3 px-4">水平运镜，取值范围：[-10, 10]</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">vertical</td>
                  <td className="py-3 px-4">integer</td>
                  <td className="py-3 px-4">垂直运镜，取值范围：[-10, 10]</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">pan</td>
                  <td className="py-3 px-4">integer</td>
                  <td className="py-3 px-4">水平摇镜，取值范围：[-10, 10]</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">tilt</td>
                  <td className="py-3 px-4">integer</td>
                  <td className="py-3 px-4">垂直摇镜，取值范围：[-10, 10]</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">roll</td>
                  <td className="py-3 px-4">integer</td>
                  <td className="py-3 px-4">旋转运镜，取值范围：[-10, 10]</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">zoom</td>
                  <td className="py-3 px-4">integer</td>
                  <td className="py-3 px-4">变焦，取值范围：[-10, 10]</td>
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

        {/* Response Example */}
        <section id="response-example" className="mt-8">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">响应示例</h2>
          <CodeBlock code={responseExample} language="json" title="成功响应" />
        </section>

        <Blockquote variant="tip">
          任务提交后会返回 task_id，使用查询任务接口获取生成结果。任务状态包括：submitted（已提交）、processing（处理中）、succeed（成功）、failed（失败）。
        </Blockquote>

        <PageNavigation />
      </article>
    </>
  );
}
