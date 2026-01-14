import { useEffect } from 'react';
import { Copy, Check, Languages } from 'lucide-react';
import { useState } from 'react';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { Blockquote } from '@/components/docs/Blockquote';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { PageNavigation } from '@/components/docs/PageNavigation';
import CopyPageDropdown from '@/components/docs/CopyPageDropdown';
import { BASE_URL, SYSTEM_NAME } from '@/config/constants';

const tocItems = [
  { id: 'overview', title: '接口概述', level: 2 },
  { id: 'request', title: '请求参数', level: 2 },
  { id: 'response', title: '响应说明', level: 2 },
  { id: 'examples', title: '代码示例', level: 2 },
];

export default function TranslationPage() {
  const [copied, setCopied] = useState(false);
  const endpoint = `${BASE_URL}/v1/audio/translations`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCopyEndpoint = async () => {
    await navigator.clipboard.writeText(endpoint);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const responseExample = `{
  "text": "Hello, my name is Wolfgang and I come from Germany. Where are you heading today?"
}`;

  const curlExample = `curl -X POST "${endpoint}" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -F "file=@/path/to/german_audio.mp3" \\
  -F "model=whisper-1" \\
  -F "response_format=json"`;

  const jsExample = `const formData = new FormData();
formData.append("file", audioFile);
formData.append("model", "whisper-1");
formData.append("response_format", "json");

const response = await fetch("${endpoint}", {
  method: "POST",
  headers: {
    "Authorization": "Bearer YOUR_API_KEY"
  },
  body: formData
});

const data = await response.json();
console.log(data.text); // 英文翻译结果`;

  const pythonExample = `import requests

url = "${endpoint}"
headers = {
    "Authorization": "Bearer YOUR_API_KEY"
}
files = {
    "file": open("/path/to/german_audio.mp3", "rb")
}
data = {
    "model": "whisper-1",
    "response_format": "json"
}

response = requests.post(url, headers=headers, files=files, data=data)
print(response.json()["text"])  # 英文翻译结果`;

  return (
    <div className="flex gap-10">
      {/* Main Content */}
      <article className="docs-content flex-1 min-w-0 max-w-[1000px]">
        {/* Header with Title and Actions */}
        <div className="flex items-start justify-between gap-4 mb-1">
          <div className="flex items-center gap-3">
            <Languages className="h-8 w-8 text-primary" />
            <h1 className="doc-heading-h1 !border-b-0 !pb-0 !mb-0">创建翻译</h1>
          </div>
          <CopyPageDropdown pageTitle="创建翻译" />
        </div>
        <div className="border-b border-border/40 mb-6 pb-4" />
        
        {/* API Endpoint */}
        <div className="flex items-center gap-3 p-4 bg-slate-900 rounded-lg border border-slate-800 mb-8">
          <span className="px-2.5 py-1 text-xs font-bold text-white bg-green-600 rounded">
            POST
          </span>
          <code className="flex-1 text-sm text-slate-300 font-mono">
            {endpoint}
          </code>
          <button
            onClick={handleCopyEndpoint}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded text-xs bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition-colors"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-green-400" />
                <span className="text-green-400">已复制</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>复制</span>
              </>
            )}
          </button>
        </div>

        {/* Overview */}
        <section id="overview" className="mt-10">
          <h2 className="doc-heading-h2">接口概述</h2>
          <p className="text-slate-900 dark:text-slate-100 leading-relaxed text-[15px] mb-4">
            此接口用于将非英语音频翻译为英语文本。适用于多语言内容本地化、国际会议记录、跨语言沟通等场景。
          </p>
          <Blockquote variant="warning">
            注意：此接口会将任何语言的音频翻译成<strong>英语</strong>。如果您只需要转录音频（保持原语言），请使用「创建音频转文本」接口。
          </Blockquote>
        </section>

        {/* Request Parameters */}
        <section id="request" className="mt-10">
          <h2 className="doc-heading-h2">请求参数</h2>
          
          <h3 className="doc-heading-h3">请求体 (multipart/form-data)</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-slate-900 dark:text-slate-100">参数</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-900 dark:text-slate-100">类型</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-900 dark:text-slate-100">必填</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-900 dark:text-slate-100">描述</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-3 px-4"><code className="text-primary">file</code></td>
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-300">file</td>
                  <td className="py-3 px-4"><span className="text-red-500 font-medium">是</span></td>
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-300">音频文件，支持格式：flac、mp3、mp4、mpeg、mpga、m4a、ogg、wav、webm</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4"><code className="text-primary">model</code></td>
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-300">string</td>
                  <td className="py-3 px-4"><span className="text-red-500 font-medium">是</span></td>
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-300">模型 ID，目前仅支持 whisper-1</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4"><code className="text-primary">prompt</code></td>
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-300">string</td>
                  <td className="py-3 px-4"><span className="text-slate-500">否</span></td>
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-300">可选文本，用于指导模型的风格或继续之前的音频段落。提示文本应该是英文</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4"><code className="text-primary">response_format</code></td>
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-300">string</td>
                  <td className="py-3 px-4"><span className="text-slate-500">否</span></td>
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-300">输出格式，支持：json、text、srt、verbose_json、vtt</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4"><code className="text-primary">temperature</code></td>
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-300">number</td>
                  <td className="py-3 px-4"><span className="text-slate-500">否</span></td>
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-300">采样温度，范围 0-1，默认 0。更高的值使输出更随机</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Response */}
        <section id="response" className="mt-10">
          <h2 className="doc-heading-h2">响应说明</h2>
          
          <h3 className="doc-heading-h3">成功响应 (200)</h3>
          <CodeBlock code={responseExample} language="json" />
          
          <h3 className="doc-heading-h3 mt-6">响应字段</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-slate-900 dark:text-slate-100">字段</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-900 dark:text-slate-100">类型</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-900 dark:text-slate-100">描述</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-3 px-4"><code className="text-primary">text</code></td>
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-300">string</td>
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-300">翻译后的英文文本</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Code Examples */}
        <section id="examples" className="mt-10">
          <h2 className="doc-heading-h2">代码示例</h2>
          
          <h3 className="doc-heading-h3">cURL</h3>
          <CodeBlock code={curlExample} language="bash" />

          <h3 className="doc-heading-h3 mt-6">JavaScript</h3>
          <CodeBlock code={jsExample} language="javascript" />

          <h3 className="doc-heading-h3 mt-6">Python</h3>
          <CodeBlock code={pythonExample} language="python" />
        </section>

        <Blockquote variant="info" className="mt-8">
          <strong>提示：</strong>如果需要翻译成其他语言，可以先使用此接口翻译成英语，然后再使用文本翻译 API 进行二次翻译。
        </Blockquote>

        {/* Page Navigation */}
        <PageNavigation />
      </article>

      {/* Table of Contents */}
      <TableOfContents items={tocItems} />
    </div>
  );
}
