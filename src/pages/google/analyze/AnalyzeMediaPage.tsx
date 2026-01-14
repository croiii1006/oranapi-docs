import { CodeBlock } from '@/components/docs/CodeBlock';
import { Blockquote } from '@/components/docs/Blockquote';
import { PageNavigation } from '@/components/docs/PageNavigation';
import CopyPageDropdown from '@/components/docs/CopyPageDropdown';
import { MethodBadge } from '@/components/MethodBadge';
import { Copy } from 'lucide-react';
import { useState } from 'react';

export default function AnalyzeMediaPage() {
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
          "text": "分析视频中的具体应用场景."
        },
        {
          "inline_data": {
            "mime_type": "video/mp4",
            "data": "$VIDEO_B64"
          }
        }
      ]
    }
  ]
}`;

  const audioExample = `{
  "contents": [
    {
      "parts": [
        {
          "text": "请转录这段音频内容"
        },
        {
          "inline_data": {
            "mime_type": "audio/m4a",
            "data": "$AUDIO_B64"
          }
        }
      ]
    }
  ]
}`;

  const pdfExample = `{
  "contents": [
    {
      "parts": [
        {
          "text": "总结这份PDF文档的主要内容"
        },
        {
          "inline_data": {
            "mime_type": "application/pdf",
            "data": "$PDF_B64"
          }
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
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-0">分析 视频/音频/PDF</h1>
          <CopyPageDropdown pageTitle="分析 视频/音频/PDF" />
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
          多媒体分析接口，支持分析视频、音频、PDF等多种格式的文件。目前只支持小于 20MB 的多媒体文件，使用 inline_data 上传。
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

        {/* Supported Formats */}
        <section id="formats" className="mt-8">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">支持的媒体格式</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-slate-700 dark:text-slate-300">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="text-left py-3 px-4 font-semibold">类型</th>
                  <th className="text-left py-3 px-4 font-semibold">MIME Type</th>
                  <th className="text-left py-3 px-4 font-semibold">说明</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4">视频</td>
                  <td className="py-3 px-4 font-mono">video/mp4</td>
                  <td className="py-3 px-4">MP4 视频文件</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4">音频</td>
                  <td className="py-3 px-4 font-mono">audio/m4a</td>
                  <td className="py-3 px-4">M4A 音频文件</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4">文档</td>
                  <td className="py-3 px-4 font-mono">application/pdf</td>
                  <td className="py-3 px-4">PDF 文档</td>
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
                  <td className="py-3 px-4 font-mono text-purple-600 pl-8">parts.text</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">是</td>
                  <td className="py-3 px-4">提示词/分析指令</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600 pl-8">parts.inline_data</td>
                  <td className="py-3 px-4">object</td>
                  <td className="py-3 px-4">是</td>
                  <td className="py-3 px-4">内联媒体数据</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600 pl-12">mime_type</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">是</td>
                  <td className="py-3 px-4">媒体的MIME类型</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600 pl-12">data</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">是</td>
                  <td className="py-3 px-4">Base64 编码的媒体数据</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Examples */}
        <section id="examples" className="mt-8">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">请求示例</h2>
          
          <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mt-6">视频分析</h3>
          <CodeBlock code={requestExample} language="json" title="视频分析请求" />
          
          <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mt-6">音频分析</h3>
          <CodeBlock code={audioExample} language="json" title="音频分析请求" />
          
          <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200 mt-6">PDF分析</h3>
          <CodeBlock code={pdfExample} language="json" title="PDF分析请求" />
        </section>

        <Blockquote variant="warning">
          文件大小限制为 20MB 以内。对于更大的文件，建议使用文件上传接口或分割处理。
        </Blockquote>

        <PageNavigation />
      </article>
    </>
  );
}
