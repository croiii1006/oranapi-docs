import { useEffect } from 'react';
import { Copy, Check, Volume2 } from 'lucide-react';
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

export default function SpeechPage() {
  const [copied, setCopied] = useState(false);
  const endpoint = `${BASE_URL}/v1/audio/speech`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCopyEndpoint = async () => {
    await navigator.clipboard.writeText(endpoint);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const curlExample = `curl -X POST "${endpoint}" \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "model": "tts-1",
    "input": "The quick brown fox jumped over the lazy dog.",
    "voice": "alloy"
  }' \\
  --output speech.mp3`;

  const jsExample = `const response = await fetch("${endpoint}", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_API_KEY"
  },
  body: JSON.stringify({
    model: "tts-1",
    input: "The quick brown fox jumped over the lazy dog.",
    voice: "alloy"
  })
});

const audioBlob = await response.blob();
const audioUrl = URL.createObjectURL(audioBlob);
const audio = new Audio(audioUrl);
audio.play();`;

  const pythonExample = `import requests

url = "${endpoint}"
headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_API_KEY"
}
data = {
    "model": "tts-1",
    "input": "The quick brown fox jumped over the lazy dog.",
    "voice": "alloy"
}

response = requests.post(url, headers=headers, json=data)

with open("speech.mp3", "wb") as f:
    f.write(response.content)`;

  return (
    <div className="flex gap-10">
      {/* Main Content */}
      <article className="docs-content flex-1 min-w-0 max-w-[1000px]">
        {/* Header with Title and Actions */}
        <div className="flex items-start justify-between gap-4 mb-1">
          <div className="flex items-center gap-3">
            <Volume2 className="h-8 w-8 text-primary" />
            <h1 className="doc-heading-h1 !border-b-0 !pb-0 !mb-0">创建语音</h1>
          </div>
          <CopyPageDropdown pageTitle="创建语音" />
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
            此接口用于将文本转换为语音音频。支持多种语音风格和音频格式，适用于语音合成、有声读物、语音助手等场景。
          </p>
          <Blockquote variant="info">
            可用的 TTS 模型：<code className="px-1.5 py-0.5 bg-slate-800 rounded text-sm">tts-1</code> 或 <code className="px-1.5 py-0.5 bg-slate-800 rounded text-sm">tts-1-hd</code>（高清版本）。tts-1-hd 提供更高质量的音频输出。
          </Blockquote>
        </section>

        {/* Request Parameters */}
        <section id="request" className="mt-10">
          <h2 className="doc-heading-h2">请求参数</h2>
          
          <h3 className="doc-heading-h3">请求体 (Body)</h3>
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
                  <td className="py-3 px-4"><code className="text-primary">model</code></td>
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-300">string</td>
                  <td className="py-3 px-4"><span className="text-red-500 font-medium">是</span></td>
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-300">可用的 TTS 模型：tts-1 或 tts-1-hd</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4"><code className="text-primary">input</code></td>
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-300">string</td>
                  <td className="py-3 px-4"><span className="text-red-500 font-medium">是</span></td>
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-300">要生成音频的文本，最大长度为 4096 个字符</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4"><code className="text-primary">voice</code></td>
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-300">string</td>
                  <td className="py-3 px-4"><span className="text-red-500 font-medium">是</span></td>
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-300">语音风格：alloy、echo、fable、onyx、nova、shimmer</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4"><code className="text-primary">response_format</code></td>
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-300">string</td>
                  <td className="py-3 px-4"><span className="text-slate-500">否</span></td>
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-300">音频格式，默认 mp3。支持：mp3、opus、aac、flac</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4"><code className="text-primary">speed</code></td>
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-300">number</td>
                  <td className="py-3 px-4"><span className="text-slate-500">否</span></td>
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-300">语速，范围 0.25 到 4.0，默认 1.0</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="doc-heading-h3 mt-6">支持的语音风格</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {['alloy', 'echo', 'fable', 'onyx', 'nova', 'shimmer'].map((voice) => (
              <div key={voice} className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                <code className="text-primary">{voice}</code>
              </div>
            ))}
          </div>
        </section>

        {/* Response */}
        <section id="response" className="mt-10">
          <h2 className="doc-heading-h2">响应说明</h2>
          <p className="text-slate-900 dark:text-slate-100 text-[15px] mb-4">
            成功响应将返回音频文件的二进制数据，Content-Type 根据请求的 response_format 参数而定。
          </p>
          
          <h3 className="doc-heading-h3">状态码</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-slate-900 dark:text-slate-100">状态码</th>
                  <th className="text-left py-3 px-4 font-medium text-slate-900 dark:text-slate-100">描述</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-3 px-4"><code className="text-green-500 font-medium">200</code></td>
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-300">成功，返回音频文件</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4"><code className="text-red-500 font-medium">400</code></td>
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-300">请求参数错误</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 px-4"><code className="text-red-500 font-medium">401</code></td>
                  <td className="py-3 px-4 text-slate-700 dark:text-slate-300">认证失败</td>
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
          <strong>提示：</strong>不同的语音风格适合不同的应用场景。建议在正式使用前，先测试各种语音风格，选择最适合您需求的声音。
        </Blockquote>

        {/* Page Navigation */}
        <PageNavigation />
      </article>

      {/* Table of Contents */}
      <TableOfContents items={tocItems} />
    </div>
  );
}
