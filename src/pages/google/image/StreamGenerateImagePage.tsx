import { CodeBlock } from '@/components/docs/CodeBlock';
import { Blockquote } from '@/components/docs/Blockquote';
import { PageNavigation } from '@/components/docs/PageNavigation';
import CopyPageDropdown from '@/components/docs/CopyPageDropdown';
import { MethodBadge } from '@/components/MethodBadge';
import { Copy } from 'lucide-react';
import { useState } from 'react';

export default function StreamGenerateImagePage() {
  const [copied, setCopied] = useState(false);
  const endpoint = 'https://models.photog.art/v1beta/models/{model_name}:streamGenerateContent';

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
          "text": "将图片里的动物换成兔子呈现"
        },
        {
          "inline_data": {
            "mime_type": "image/jpeg",
            "data": "BASE64_ENCODED_IMAGE_DATA"
          }
        }
      ],
      "generationConfig": {
        "responseModalities": ["IMAGE", "TEXT"],
        "imageConfig": {
          "aspectRatio": "16:9"
        }
      }
    }
  ]
}`;

  const curlExample = `curl -X POST "https://models.photog.art/v1beta/models/gemini-2.5-flash-image:streamGenerateContent" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "contents": [
      {
        "parts": [
          { "text": "将图片里的动物换成兔子呈现" },
          {
            "inline_data": {
              "mime_type": "image/jpeg",
              "data": "BASE64_ENCODED_IMAGE_DATA"
            }
          }
        ],
        "generationConfig": {
          "responseModalities": ["IMAGE", "TEXT"]
        }
      }
    ]
  }'`;

  return (
    <>
      <article className="prose prose-slate dark:prose-invert max-w-none">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-0">生成图像（流式）</h1>
          <CopyPageDropdown pageTitle="生成图像（流式）" />
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
          流式生成图像接口，支持实时返回生成进度。适用于需要即时反馈的图像生成场景，如图像编辑、风格转换等。
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
                  <td className="py-3 px-4">模型名称，例如：gemini-2.5-flash-image</td>
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
                  <td className="py-3 px-4 font-mono text-purple-600 pl-12">text</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">纯文本内容/提示词</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600 pl-12">inline_data</td>
                  <td className="py-3 px-4">object</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">内联媒体数据</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600 pl-8">generationConfig</td>
                  <td className="py-3 px-4">object</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">生成配置</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600 pl-12">responseModalities</td>
                  <td className="py-3 px-4">array</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">输出类型：IMAGE、TEXT</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600 pl-12">imageConfig</td>
                  <td className="py-3 px-4">object</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">图像配置（aspectRatio）</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Examples */}
        <section id="examples" className="mt-8">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">请求示例</h2>
          <CodeBlock code={requestExample} language="json" title="请求体" />
          <CodeBlock code={curlExample} language="bash" title="cURL 示例" />
        </section>

        <Blockquote variant="tip">
          流式图像生成特别适合图生图场景，如图像编辑、风格迁移、元素替换等操作。可通过 inline_data 上传原始图片。
        </Blockquote>

        <PageNavigation />
      </article>
    </>
  );
}
