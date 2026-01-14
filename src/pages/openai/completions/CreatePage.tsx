import { useEffect } from 'react';
import { Copy, Check, Wand2 } from 'lucide-react';
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

export default function CreateCompletionPage() {
  const [copied, setCopied] = useState(false);
  const endpoint = `${BASE_URL}/v1/completions`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCopyEndpoint = async () => {
    await navigator.clipboard.writeText(endpoint);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const responseExample = `{
  "id": "cmpl-uqkvlQyYK7bGYrRHQ0eXlWi7",
  "object": "text_completion",
  "created": 1589478378,
  "model": "gpt-3.5-turbo-instruct",
  "system_fingerprint": "fp_44709d6fcb",
  "choices": [
    {
      "text": "\\n\\nThis is indeed a test",
      "index": 0,
      "logprobs": null,
      "finish_reason": "length"
    }
  ],
  "usage": {
    "prompt_tokens": 5,
    "completion_tokens": 7,
    "total_tokens": 12
  }
}`;

  const curlExample = `curl -X POST "${endpoint}" \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "model": "gpt-3.5-turbo-instruct",
    "prompt": "Say this is a test",
    "max_tokens": 7,
    "temperature": 0
  }'`;

  const jsExample = `const response = await fetch("${endpoint}", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_API_KEY"
  },
  body: JSON.stringify({
    model: "gpt-3.5-turbo-instruct",
    prompt: "Say this is a test",
    max_tokens: 7,
    temperature: 0
  })
});

const data = await response.json();
console.log(data.choices[0].text);`;

  const pythonExample = `import requests

url = "${endpoint}"
headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer YOUR_API_KEY"
}
data = {
    "model": "gpt-3.5-turbo-instruct",
    "prompt": "Say this is a test",
    "max_tokens": 7,
    "temperature": 0
}

response = requests.post(url, headers=headers, json=data)
print(response.json()["choices"][0]["text"])`;

  return (
    <div className="flex gap-8">
      {/* Main Content */}
      <div className="flex-1 min-w-0">
        <div className="space-y-8">
          {/* Page Header */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Wand2 className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold text-foreground">创建完成</h1>
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
              给定一个提示，该模型将返回一个或多个预测的完成，并且还可以返回每个位置的替代标记的概率。
              为提供的提示和参数创建完成。
            </p>
            <Blockquote>
              此接口适用于文本补全场景。对于对话场景，建议使用聊天补全接口（/v1/chat/completions）。
            </Blockquote>
          </section>

          {/* Request Parameters */}
          <section id="request">
            <h2 className="text-2xl font-semibold text-foreground mb-4 scroll-mt-16">请求参数</h2>
            
            <h3 className="text-lg font-medium text-foreground mb-3">请求头 (Headers)</h3>
            <div className="overflow-x-auto mb-6">
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
                    <td className="py-3 px-4"><code className="text-primary">Authorization</code></td>
                    <td className="py-3 px-4 text-muted-foreground">string</td>
                    <td className="py-3 px-4"><span className="text-red-400">是</span></td>
                    <td className="py-3 px-4 text-muted-foreground">Bearer YOUR_API_KEY</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4"><code className="text-primary">Content-Type</code></td>
                    <td className="py-3 px-4 text-muted-foreground">string</td>
                    <td className="py-3 px-4"><span className="text-red-400">是</span></td>
                    <td className="py-3 px-4 text-muted-foreground">application/json</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-lg font-medium text-foreground mb-3">请求体 (Body)</h3>
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
                    <td className="py-3 px-4"><code className="text-primary">model</code></td>
                    <td className="py-3 px-4 text-muted-foreground">string</td>
                    <td className="py-3 px-4"><span className="text-red-400">是</span></td>
                    <td className="py-3 px-4 text-muted-foreground">模型 ID，如 gpt-3.5-turbo-instruct</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4"><code className="text-primary">prompt</code></td>
                    <td className="py-3 px-4 text-muted-foreground">string | array</td>
                    <td className="py-3 px-4"><span className="text-red-400">是</span></td>
                    <td className="py-3 px-4 text-muted-foreground">生成完成的提示，可以是字符串或数组</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4"><code className="text-primary">max_tokens</code></td>
                    <td className="py-3 px-4 text-muted-foreground">integer</td>
                    <td className="py-3 px-4"><span className="text-muted-foreground">否</span></td>
                    <td className="py-3 px-4 text-muted-foreground">生成的最大标记数，默认 16</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4"><code className="text-primary">temperature</code></td>
                    <td className="py-3 px-4 text-muted-foreground">number</td>
                    <td className="py-3 px-4"><span className="text-muted-foreground">否</span></td>
                    <td className="py-3 px-4 text-muted-foreground">采样温度，0-2，默认 1。更高更随机</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4"><code className="text-primary">top_p</code></td>
                    <td className="py-3 px-4 text-muted-foreground">number</td>
                    <td className="py-3 px-4"><span className="text-muted-foreground">否</span></td>
                    <td className="py-3 px-4 text-muted-foreground">核采样，与 temperature 二选一使用</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4"><code className="text-primary">n</code></td>
                    <td className="py-3 px-4 text-muted-foreground">integer</td>
                    <td className="py-3 px-4"><span className="text-muted-foreground">否</span></td>
                    <td className="py-3 px-4 text-muted-foreground">生成的补全数量，默认 1</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4"><code className="text-primary">stream</code></td>
                    <td className="py-3 px-4 text-muted-foreground">boolean</td>
                    <td className="py-3 px-4"><span className="text-muted-foreground">否</span></td>
                    <td className="py-3 px-4 text-muted-foreground">是否流式返回，默认 false</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4"><code className="text-primary">stop</code></td>
                    <td className="py-3 px-4 text-muted-foreground">string | array</td>
                    <td className="py-3 px-4"><span className="text-muted-foreground">否</span></td>
                    <td className="py-3 px-4 text-muted-foreground">停止序列，最多 4 个</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4"><code className="text-primary">presence_penalty</code></td>
                    <td className="py-3 px-4 text-muted-foreground">number</td>
                    <td className="py-3 px-4"><span className="text-muted-foreground">否</span></td>
                    <td className="py-3 px-4 text-muted-foreground">存在惩罚，-2.0 到 2.0，默认 0</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4"><code className="text-primary">frequency_penalty</code></td>
                    <td className="py-3 px-4 text-muted-foreground">number</td>
                    <td className="py-3 px-4"><span className="text-muted-foreground">否</span></td>
                    <td className="py-3 px-4 text-muted-foreground">频率惩罚，-2.0 到 2.0，默认 0</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4"><code className="text-primary">best_of</code></td>
                    <td className="py-3 px-4 text-muted-foreground">integer</td>
                    <td className="py-3 px-4"><span className="text-muted-foreground">否</span></td>
                    <td className="py-3 px-4 text-muted-foreground">服务器端生成数量，返回最佳，默认 1</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4"><code className="text-primary">echo</code></td>
                    <td className="py-3 px-4 text-muted-foreground">boolean</td>
                    <td className="py-3 px-4"><span className="text-muted-foreground">否</span></td>
                    <td className="py-3 px-4 text-muted-foreground">是否回显提示，默认 false</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4"><code className="text-primary">logprobs</code></td>
                    <td className="py-3 px-4 text-muted-foreground">integer</td>
                    <td className="py-3 px-4"><span className="text-muted-foreground">否</span></td>
                    <td className="py-3 px-4 text-muted-foreground">返回最可能标记的对数概率，最大 5</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4"><code className="text-primary">suffix</code></td>
                    <td className="py-3 px-4 text-muted-foreground">string</td>
                    <td className="py-3 px-4"><span className="text-muted-foreground">否</span></td>
                    <td className="py-3 px-4 text-muted-foreground">插入文本后的后缀</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4"><code className="text-primary">user</code></td>
                    <td className="py-3 px-4 text-muted-foreground">string</td>
                    <td className="py-3 px-4"><span className="text-muted-foreground">否</span></td>
                    <td className="py-3 px-4 text-muted-foreground">用户唯一标识符</td>
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
                    <td className="py-3 px-4"><code className="text-primary">id</code></td>
                    <td className="py-3 px-4 text-muted-foreground">string</td>
                    <td className="py-3 px-4 text-muted-foreground">完成的唯一标识符</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4"><code className="text-primary">object</code></td>
                    <td className="py-3 px-4 text-muted-foreground">string</td>
                    <td className="py-3 px-4 text-muted-foreground">对象类型，值为 "text_completion"</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4"><code className="text-primary">created</code></td>
                    <td className="py-3 px-4 text-muted-foreground">integer</td>
                    <td className="py-3 px-4 text-muted-foreground">创建时间戳</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4"><code className="text-primary">model</code></td>
                    <td className="py-3 px-4 text-muted-foreground">string</td>
                    <td className="py-3 px-4 text-muted-foreground">使用的模型</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4"><code className="text-primary">choices</code></td>
                    <td className="py-3 px-4 text-muted-foreground">array</td>
                    <td className="py-3 px-4 text-muted-foreground">生成的完成选项列表</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4"><code className="text-primary">usage</code></td>
                    <td className="py-3 px-4 text-muted-foreground">object</td>
                    <td className="py-3 px-4 text-muted-foreground">使用统计信息</td>
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
            提示：建议优先使用聊天补全接口（/v1/chat/completions），它提供更好的对话能力和更多功能。自动补全接口更适合简单的文本生成场景。
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
