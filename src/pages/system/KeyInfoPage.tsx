import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Copy, Check } from 'lucide-react';
import { CodeBlock, InlineCode } from '@/components/docs/CodeBlock';
import { Blockquote } from '@/components/docs/Blockquote';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { PageNavigation } from '@/components/docs/PageNavigation';
import CopyPageDropdown from '@/components/docs/CopyPageDropdown';
import { MethodBadge } from '@/components/MethodBadge';
import { BASE_URL } from '@/config/constants';
import { toast } from 'sonner';

const tocItems = [
  { id: 'overview', title: '接口概述', level: 2 },
  { id: 'request', title: '请求参数', level: 2 },
  { id: 'response', title: '响应说明', level: 2 },
  { id: 'examples', title: '代码示例', level: 2 },
  { id: 'notes', title: '注意事项', level: 2 },
];

export function KeyInfoPage() {
  const location = useLocation();
  const [copied, setCopied] = useState(false);
  
  const endpoint = '/api/token/key/{key}';
  const fullUrl = `${BASE_URL}${endpoint}`;

  useEffect(() => {
    if (location.pathname === '/system/key-info') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  const handleCopyUrl = async () => {
    await navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    toast.success('已复制接口地址');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex gap-10">
      {/* Main Content */}
      <article className="docs-content flex-1 min-w-0 max-w-[1000px]">
        {/* Header with Title and Actions */}
        <div className="flex items-start justify-between gap-4 mb-1">
          <h1 className="doc-heading-h1 !border-b-0 !pb-0 !mb-0">查询key信息</h1>
          <CopyPageDropdown pageTitle="查询key信息" />
        </div>
        <div className="border-b border-border/40 mb-6 pb-4" />

        {/* API Endpoint Header */}
        <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg border border-border mb-6">
          <MethodBadge method="GET" />
          <code className="flex-1 text-sm font-mono text-foreground">{fullUrl}</code>
          <button
            onClick={handleCopyUrl}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs bg-background hover:bg-muted border border-border transition-colors"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-green-500" />
                <span className="text-green-500">已复制</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>复制</span>
              </>
            )}
          </button>
        </div>

        {/* Overview Section */}
        <section id="overview" className="mt-8">
          <h2 className="doc-heading-h2">接口概述</h2>
          <p className="text-muted-foreground leading-relaxed text-[15px] mb-4">
            通过此接口查询指定 API Key 的详细信息，包括余额、状态、限额等。适用于监控 API Key 使用情况或在应用中展示账户信息。
          </p>
          <Blockquote variant="info">
            <strong>余额计算说明：</strong>quota 是余额额度，实际余额 = quota / 500000
          </Blockquote>
        </section>

        {/* Request Section */}
        <section id="request" className="mt-10">
          <h2 className="doc-heading-h2">请求参数</h2>
          
          <h3 className="doc-heading-h3">路径参数（Path Parameters）</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-3 font-semibold border-b border-border">参数名</th>
                  <th className="text-left p-3 font-semibold border-b border-border">类型</th>
                  <th className="text-left p-3 font-semibold border-b border-border">必填</th>
                  <th className="text-left p-3 font-semibold border-b border-border">示例</th>
                  <th className="text-left p-3 font-semibold border-b border-border">说明</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border-b border-border font-mono text-primary">key</td>
                  <td className="p-3 border-b border-border">string</td>
                  <td className="p-3 border-b border-border"><span className="text-red-500">是</span></td>
                  <td className="p-3 border-b border-border font-mono text-xs">sk-6iLhR*****</td>
                  <td className="p-3 border-b border-border text-muted-foreground">API Key（可使用完整或部分脱敏形式）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="doc-heading-h3">请求头（Headers）</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-3 font-semibold border-b border-border">参数名</th>
                  <th className="text-left p-3 font-semibold border-b border-border">类型</th>
                  <th className="text-left p-3 font-semibold border-b border-border">必填</th>
                  <th className="text-left p-3 font-semibold border-b border-border">示例</th>
                  <th className="text-left p-3 font-semibold border-b border-border">说明</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border-b border-border font-mono text-primary">Rix-Api-User</td>
                  <td className="p-3 border-b border-border">string</td>
                  <td className="p-3 border-b border-border"><span className="text-muted-foreground">否</span></td>
                  <td className="p-3 border-b border-border font-mono text-xs">1001</td>
                  <td className="p-3 border-b border-border text-muted-foreground">用户 ID（可选，用于追踪请求来源）</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Response Section */}
        <section id="response" className="mt-10">
          <h2 className="doc-heading-h2">响应说明</h2>
          
          <h3 className="doc-heading-h3">HTTP 状态码</h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground text-[15px] mb-6">
            <li><InlineCode>200</InlineCode> - 请求成功</li>
            <li><InlineCode>400</InlineCode> - 请求参数错误（key 格式不正确）</li>
            <li><InlineCode>404</InlineCode> - Key 不存在</li>
            <li><InlineCode>500</InlineCode> - 服务器内部错误</li>
          </ul>

          <h3 className="doc-heading-h3">成功响应示例</h3>
          <CodeBlock
            language="json"
            code={`{
  "code": 0,
  "message": "ok",
  "data": {
    "key": "sk-6iLhR*****",
    "status": "active",
    "quota": 5000000,
    "used_quota": 1234567,
    "remain_quota": 3765433,
    "created_at": "2024-01-15T10:30:00Z",
    "expired_at": null,
    "models": ["gpt-4", "gpt-3.5-turbo", "claude-3"]
  }
}`}
          />

          <h3 className="doc-heading-h3 mt-6">响应字段说明</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-3 font-semibold border-b border-border">字段</th>
                  <th className="text-left p-3 font-semibold border-b border-border">类型</th>
                  <th className="text-left p-3 font-semibold border-b border-border">说明</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border-b border-border font-mono text-primary">key</td>
                  <td className="p-3 border-b border-border">string</td>
                  <td className="p-3 border-b border-border text-muted-foreground">API Key（脱敏显示）</td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-border font-mono text-primary">status</td>
                  <td className="p-3 border-b border-border">string</td>
                  <td className="p-3 border-b border-border text-muted-foreground">状态：active / disabled / expired</td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-border font-mono text-primary">quota</td>
                  <td className="p-3 border-b border-border">number</td>
                  <td className="p-3 border-b border-border text-muted-foreground">总额度（实际余额 = quota / 500000）</td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-border font-mono text-primary">used_quota</td>
                  <td className="p-3 border-b border-border">number</td>
                  <td className="p-3 border-b border-border text-muted-foreground">已使用额度</td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-border font-mono text-primary">remain_quota</td>
                  <td className="p-3 border-b border-border">number</td>
                  <td className="p-3 border-b border-border text-muted-foreground">剩余额度</td>
                </tr>
                <tr>
                  <td className="p-3 border-b border-border font-mono text-primary">models</td>
                  <td className="p-3 border-b border-border">array</td>
                  <td className="p-3 border-b border-border text-muted-foreground">该 Key 可访问的模型列表</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Examples Section */}
        <section id="examples" className="mt-10">
          <h2 className="doc-heading-h2">代码示例</h2>
          
          <h3 className="doc-heading-h3">cURL</h3>
          <CodeBlock
            language="bash"
            title="cURL"
            code={`curl -X GET "${BASE_URL}/api/token/key/sk-6iLhRxxxxx" \\
  -H "Rix-Api-User: 1001"`}
          />

          <h3 className="doc-heading-h3">JavaScript</h3>
          <CodeBlock
            language="javascript"
            title="JavaScript"
            code={`const apiKey = "sk-6iLhRxxxxx";

const response = await fetch(\`${BASE_URL}/api/token/key/\${apiKey}\`, {
  method: "GET",
  headers: {
    "Rix-Api-User": "1001"
  }
});

const data = await response.json();
console.log("Key 信息:", data.data);
console.log("实际余额:", data.data.quota / 500000);`}
          />

          <h3 className="doc-heading-h3">Python</h3>
          <CodeBlock
            language="python"
            title="Python"
            code={`import requests

api_key = "sk-6iLhRxxxxx"
url = f"${BASE_URL}/api/token/key/{api_key}"

response = requests.get(
    url,
    headers={
        "Rix-Api-User": "1001"
    }
)

data = response.json()
print("Key 信息:", data["data"])
print("实际余额:", data["data"]["quota"] / 500000)`}
          />
        </section>

        {/* Notes Section */}
        <section id="notes" className="mt-10">
          <h2 className="doc-heading-h2">注意事项</h2>
          <Blockquote variant="warning">
            <ul className="list-disc list-inside space-y-2">
              <li>此接口不需要 Bearer Token 认证，使用 Key 本身作为查询标识</li>
              <li>为保护隐私，响应中的 Key 字段会进行脱敏处理</li>
              <li>建议定期调用此接口监控余额，避免额度用尽影响服务</li>
              <li>如果 Key 已过期或被禁用，<InlineCode>status</InlineCode> 字段会反映相应状态</li>
            </ul>
          </Blockquote>
        </section>

        {/* Page Navigation */}
        <PageNavigation />
      </article>

      {/* Table of Contents */}
      <TableOfContents items={tocItems} />
    </div>
  );
}
