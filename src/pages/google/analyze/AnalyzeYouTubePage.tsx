import { CodeBlock } from '@/components/docs/CodeBlock';
import { Blockquote } from '@/components/docs/Blockquote';
import { PageNavigation } from '@/components/docs/PageNavigation';
import CopyPageDropdown from '@/components/docs/CopyPageDropdown';
import { MethodBadge } from '@/components/MethodBadge';
import { Copy } from 'lucide-react';
import { useState } from 'react';

export default function AnalyzeYouTubePage() {
  const [copied, setCopied] = useState(false);
  const endpoint = 'https://models.photog.art/v1beta/models/{model_name}:generateContent';

  const handleCopyEndpoint = async () => {
    await navigator.clipboard.writeText(endpoint);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const requestExample = `{
  "contents": [
    {
      "parts": [
        {
          "fileData": {
            "fileUri": "https://www.youtube.com/watch?v=OoU7PwNyYUw"
          }
        },
        {
          "text": "Analyze the content of the video"
        }
      ]
    }
  ]
}`;

  const curlExample = `curl -X POST "https://models.photog.art/v1beta/models/gemini-2.5-flash:generateContent" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "contents": [
      {
        "parts": [
          {
            "fileData": {
              "fileUri": "https://www.youtube.com/watch?v=VIDEO_ID"
            }
          },
          {
            "text": "分析这个视频的主要内容和关键信息"
          }
        ]
      }
    ]
  }'`;

  const chineseExample = `{
  "contents": [
    {
      "parts": [
        {
          "fileData": {
            "fileUri": "https://www.youtube.com/watch?v=VIDEO_ID"
          }
        },
        {
          "text": "请用中文总结这个视频的主要内容，包括：1. 视频主题 2. 关键观点 3. 结论建议"
        }
      ]
    }
  ]
}`;

  return (
    <>
      <article className="prose prose-slate dark:prose-invert max-w-none">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-0">分析 视频（YouTube）</h1>
          <CopyPageDropdown pageTitle="分析 视频（YouTube）" />
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
          YouTube 视频分析接口，可直接通过 YouTube 链接分析视频内容，无需下载视频。支持视频内容总结、关键信息提取、字幕分析等功能。
        </Blockquote>

        {/* Parameters */}
        <section id="parameters" className="mt-8">
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
                  <td className="py-3 px-4 font-mono text-purple-600">model_name</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">是</td>
                  <td className="py-3 px-4">模型名称，例如：gemini-2.5-flash</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Request Body */}
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
                  <td className="py-3 px-4 font-mono text-purple-600">contents</td>
                  <td className="py-3 px-4">array</td>
                  <td className="py-3 px-4">是</td>
                  <td className="py-3 px-4">内容数组</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600 pl-8">parts</td>
                  <td className="py-3 px-4">array</td>
                  <td className="py-3 px-4">是</td>
                  <td className="py-3 px-4">有序的内容部分</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600 pl-12">fileData</td>
                  <td className="py-3 px-4">object</td>
                  <td className="py-3 px-4">是</td>
                  <td className="py-3 px-4">文件数据对象</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600 pl-16">fileUri</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">是</td>
                  <td className="py-3 px-4">YouTube 视频链接</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600 pl-12">text</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">是</td>
                  <td className="py-3 px-4">提示词/分析指令</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Examples */}
        <section id="examples" className="mt-8">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">请求示例</h2>
          
          <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mt-6">基础分析</h3>
          <CodeBlock code={requestExample} language="json" title="请求体" />
          
          <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mt-6">中文分析</h3>
          <CodeBlock code={chineseExample} language="json" title="中文分析请求" />
          
          <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mt-6">cURL 示例</h3>
          <CodeBlock code={curlExample} language="bash" title="cURL" />
        </section>

        <Blockquote variant="tip">
          YouTube 视频分析功能可以帮助您快速获取视频内容摘要、提取关键信息、生成字幕转录等。建议在提示词中明确指定您需要的分析类型和输出格式。
        </Blockquote>

        <Blockquote variant="warning">
          请确保 YouTube 视频链接有效且可访问。部分地区限制或私密视频可能无法分析。
        </Blockquote>

        <PageNavigation />
      </article>
    </>
  );
}
