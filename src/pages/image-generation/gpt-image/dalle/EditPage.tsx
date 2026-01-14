import { CodeBlock } from '@/components/docs/CodeBlock';
import { Blockquote } from '@/components/docs/Blockquote';
import { PageNavigation } from '@/components/docs/PageNavigation';
import CopyPageDropdown from '@/components/docs/CopyPageDropdown';
import { MethodBadge } from '@/components/MethodBadge';
import { Copy } from 'lucide-react';
import { useState } from 'react';

export default function DalleEditPage() {
  const [copied, setCopied] = useState(false);
  const endpoint = 'https://models.photog.art/v1/images/edits';

  const handleCopyEndpoint = async () => {
    await navigator.clipboard.writeText(endpoint);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const curlExample = `curl -X POST "https://models.photog.art/v1/images/edits" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -F "model=gpt-image-1.5" \\
  -F "prompt=合并两张图" \\
  -F "image=@/path/to/image1.png" \\
  -F "image=@/path/to/image2.png" \\
  -F "n=1" \\
  -F "size=3:2" \\
  -F "response_format=url"`;

  const pythonExample = `import requests

url = "https://models.photog.art/v1/images/edits"
headers = {
    "Authorization": "Bearer YOUR_API_KEY"
}

files = [
    ("image", ("image1.png", open("/path/to/image1.png", "rb"), "image/png")),
    ("image", ("image2.png", open("/path/to/image2.png", "rb"), "image/png"))
]

data = {
    "model": "gpt-image-1.5",
    "prompt": "合并两张图",
    "n": 1,
    "size": "3:2",
    "response_format": "url"
}

response = requests.post(url, headers=headers, files=files, data=data)
print(response.json())`;

  const responseExample = `{
  "created": 1589478378,
  "data": [
    {
      "url": "https://..."
    }
  ]
}`;

  return (
    <>
      <article className="prose prose-slate dark:prose-invert max-w-none">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-0">创建图像编辑</h1>
          <CopyPageDropdown pageTitle="创建图像编辑" />
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
          在给定原始图像和提示的情况下创建编辑或扩展图像。支持多图合并、图像编辑等功能。
        </Blockquote>

        <Blockquote variant="warning">
          此接口使用 multipart/form-data 格式上传文件，而非 JSON 格式。
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
                  <td className="py-3 px-4">模型名称，如 gpt-image-1.5</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">prompt</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">是</td>
                  <td className="py-3 px-4">所需图像的文本描述。最大长度为 1000 个字符</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">image</td>
                  <td className="py-3 px-4">file</td>
                  <td className="py-3 px-4">是</td>
                  <td className="py-3 px-4">要编辑的图像。必须是有效的 PNG 文件，小于 4MB。支持多图上传</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">mask</td>
                  <td className="py-3 px-4">file</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">遮罩图像，透明区域指示需要编辑的位置</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">n</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">要生成的图像数。必须介于 1 和 10 之间</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">size</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">生成图像的大小。支持 2:3、3:2、1:1</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">response_format</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">返回格式。必须是 url 或 b64_json</td>
                </tr>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 px-4 font-mono text-purple-600">user</td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">否</td>
                  <td className="py-3 px-4">代表您的最终用户的唯一标识符</td>
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
          支持多图合并功能，可以同时上传多个图像文件进行编辑或合成。图像文件必须小于 4MB。
        </Blockquote>

        <PageNavigation />
      </article>
    </>
  );
}
