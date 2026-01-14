import { useEffect } from 'react';
import { Copy, Check, FileAudio } from 'lucide-react';
import { useState } from 'react';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { Blockquote } from '@/components/docs/Blockquote';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { PageNavigation } from '@/components/docs/PageNavigation';
import { BASE_URL } from '@/config/constants';

const tocItems = [
  { id: 'overview', title: '接口概述', level: 2 },
  { id: 'request', title: '请求参数', level: 2 },
  { id: 'response', title: '响应说明', level: 2 },
  { id: 'examples', title: '代码示例', level: 2 },
];

export default function TranscriptionPage() {
  const [copied, setCopied] = useState(false);
  const endpoint = `${BASE_URL}/v1/audio/transcriptions`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCopyEndpoint = async () => {
    await navigator.clipboard.writeText(endpoint);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const responseExample = `{
  "text": "Imagine the wildest idea that you've ever had, and you're curious about how it might scale to something that's a 100, a 1,000 times bigger. This is a place where you can get to do that."
}`;

  const curlExample = `curl -X POST "${endpoint}" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -F "file=@/path/to/audio.mp3" \\
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
console.log(data.text);`;

  const pythonExample = `import requests

url = "${endpoint}"
headers = {
    "Authorization": "Bearer YOUR_API_KEY"
}
files = {
    "file": open("/path/to/audio.mp3", "rb")
}
data = {
    "model": "whisper-1",
    "response_format": "json"
}

response = requests.post(url, headers=headers, files=files, data=data)
print(response.json()["text"])`;

  return (
    <div className="flex gap-8">
      {/* Main Content */}
      <div className="flex-1 min-w-0">
        <div className="space-y-8">
          {/* Page Header */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FileAudio className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold text-foreground">创建音频转文本</h1>
            </div>
            
            {/* API Endpoint */}
            <div className="flex items-center gap-3 p-4 bg-slate-900 rounded-lg border border-slate-800">
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
          </div>

          {/* Overview */}
          <section id="overview">
            <h2 className="text-2xl font-semibold text-foreground mb-4 scroll-mt-16">接口概述</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              此接口用于将音频文件转换为文本。支持多种音频格式，可用于语音识别、会议记录、字幕生成等场景。
            </p>
            <Blockquote>
              目前可用的模型为 <code className="px-1.5 py-0.5 bg-slate-800 rounded text-sm">whisper-1</code>。提供输入音频的语言代码（ISO-639-1 格式）可以提高识别的准确性和响应速度。
            </Blockquote>
          </section>

          {/* Request Parameters */}
          <section id="request">
            <h2 className="text-2xl font-semibold text-foreground mb-4 scroll-mt-16">请求参数</h2>
            
            <h3 className="text-lg font-medium text-foreground mb-3">请求体 (multipart/form-data)</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-medium text-foreground">参数</th>
                    <th className="text-left py-3 px-4 font-medium text-foreground">类型</th>
                    <th className="text-left py-3 px-4 font-medium text-foreground">必填</th>
                    <th className="text-left py-3 px-4 font-medium text-foreground">描述</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4"><code className="text-primary">file</code></td>
                    <td className="py-3 px-4 text-muted-foreground">file</td>
                    <td className="py-3 px-4"><span className="text-red-400">是</span></td>
                    <td className="py-3 px-4 text-muted-foreground">音频文件，支持格式：flac、mp3、mp4、mpeg、mpga、m4a、ogg、wav、webm</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4"><code className="text-primary">model</code></td>
                    <td className="py-3 px-4 text-muted-foreground">string</td>
                    <td className="py-3 px-4"><span className="text-red-400">是</span></td>
                    <td className="py-3 px-4 text-muted-foreground">模型 ID，目前仅支持 whisper-1</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4"><code className="text-primary">language</code></td>
                    <td className="py-3 px-4 text-muted-foreground">string</td>
                    <td className="py-3 px-4"><span className="text-muted-foreground">否</span></td>
                    <td className="py-3 px-4 text-muted-foreground">输入音频的语言，ISO-639-1 格式（如 zh、en）</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4"><code className="text-primary">prompt</code></td>
                    <td className="py-3 px-4 text-muted-foreground">string</td>
                    <td className="py-3 px-4"><span className="text-muted-foreground">否</span></td>
                    <td className="py-3 px-4 text-muted-foreground">可选文本，用于指导模型的风格或继续之前的音频段落</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4"><code className="text-primary">response_format</code></td>
                    <td className="py-3 px-4 text-muted-foreground">string</td>
                    <td className="py-3 px-4"><span className="text-muted-foreground">否</span></td>
                    <td className="py-3 px-4 text-muted-foreground">输出格式，默认 json。支持：json、text、srt、verbose_json、vtt</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4"><code className="text-primary">temperature</code></td>
                    <td className="py-3 px-4 text-muted-foreground">number</td>
                    <td className="py-3 px-4"><span className="text-muted-foreground">否</span></td>
                    <td className="py-3 px-4 text-muted-foreground">采样温度，范围 0-1，默认 0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Response */}
          <section id="response">
            <h2 className="text-2xl font-semibold text-foreground mb-4 scroll-mt-16">响应说明</h2>
            
            <h3 className="text-lg font-medium text-foreground mb-3">成功响应 (200)</h3>
            <CodeBlock code={responseExample} language="json" />
            
            <h3 className="text-lg font-medium text-foreground mb-3 mt-6">响应字段</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-medium text-foreground">字段</th>
                    <th className="text-left py-3 px-4 font-medium text-foreground">类型</th>
                    <th className="text-left py-3 px-4 font-medium text-foreground">描述</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4"><code className="text-primary">text</code></td>
                    <td className="py-3 px-4 text-muted-foreground">string</td>
                    <td className="py-3 px-4 text-muted-foreground">转录后的文本内容</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Code Examples */}
          <section id="examples">
            <h2 className="text-2xl font-semibold text-foreground mb-4 scroll-mt-16">代码示例</h2>
            
            <h3 className="text-lg font-medium text-foreground mb-3">cURL</h3>
            <CodeBlock code={curlExample} language="bash" />

            <h3 className="text-lg font-medium text-foreground mb-3 mt-6">JavaScript</h3>
            <CodeBlock code={jsExample} language="javascript" />

            <h3 className="text-lg font-medium text-foreground mb-3 mt-6">Python</h3>
            <CodeBlock code={pythonExample} language="python" />
          </section>

          <Blockquote>
            提示：使用 verbose_json 格式可以获取更详细的转录信息，包括时间戳和词级别的置信度。
          </Blockquote>

          {/* Page Navigation */}
          <PageNavigation />
        </div>
      </div>

      {/* Table of Contents */}
      <TableOfContents items={tocItems} />
    </div>
  );
}
