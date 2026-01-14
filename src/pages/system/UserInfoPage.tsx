import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CodeBlock, InlineCode } from '@/components/docs/CodeBlock';
import { Blockquote } from '@/components/docs/Blockquote';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { PageNavigation } from '@/components/docs/PageNavigation';
import CopyPageDropdown from '@/components/docs/CopyPageDropdown';
import { BASE_URL, SYSTEM_NAME } from '@/config/constants';

const tocItems = [
  { id: 'overview', title: '接口概述', level: 2 },
  { id: 'request', title: '请求参数', level: 2 },
  { id: 'response', title: '响应说明', level: 2 },
  { id: 'example', title: '调用示例', level: 2 },
  { id: 'notes', title: '注意事项', level: 2 },
];

export function UserInfoPage() {
  const location = useLocation();

  // Scroll to top when navigating to this page
  useEffect(() => {
    if (location.pathname === '/system/user-info') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <div className="flex gap-10">
      {/* Main Content */}
      <article className="docs-content flex-1 min-w-0 max-w-[1000px]">
        {/* Header with Title and Actions */}
        <div className="flex items-start justify-between gap-4 mb-1">
          <h1 className="doc-heading-h1 !border-b-0 !pb-0 !mb-0">用户查询账户信息</h1>
          <CopyPageDropdown pageTitle="用户查询账户信息" />
        </div>
        <div className="border-b border-border/40 mb-6 pb-4" />

        {/* API Endpoint Header */}
        <div className="flex items-center gap-3 mb-6 p-4 bg-muted/30 rounded-lg border border-border">
          <span className="px-2.5 py-1 text-xs font-bold rounded bg-method-get-bg text-method-get">GET</span>
          <code className="text-sm font-mono text-foreground flex-1">{BASE_URL}/api/user/self</code>
        </div>
        
        <Blockquote variant="info">
          系统访问令牌在：个人中心 → 更多选项。<br />
          <code className="inline-code">quota</code> 是余额额度，实际余额 = quota / 500000
        </Blockquote>

        {/* Overview Section */}
        <section id="overview" className="mt-10">
          <h2 className="doc-heading-h2">接口概述</h2>
          <p className="text-muted-foreground leading-relaxed text-[15px]">
            此接口用于查询当前用户的账户信息，包括用户 ID、余额额度等基本资料。调用前请确保已在「个人中心」创建并获取系统访问令牌。
          </p>
        </section>

        {/* Request Parameters Section */}
        <section id="request" className="mt-10">
          <h2 className="doc-heading-h2">请求参数</h2>
          
          <h3 className="doc-heading-h3">Headers</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-foreground bg-muted/30">参数名</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground bg-muted/30">位置</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground bg-muted/30">必填</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground bg-muted/30">说明</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4"><InlineCode>Authorization</InlineCode></td>
                  <td className="py-3 px-4 text-muted-foreground">Header</td>
                  <td className="py-3 px-4"><span className="text-amber-600 font-medium">可选</span></td>
                  <td className="py-3 px-4 text-muted-foreground">系统访问令牌（在个人中心创建）</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4"><InlineCode>Rix-Api-User</InlineCode></td>
                  <td className="py-3 px-4 text-muted-foreground">Header</td>
                  <td className="py-3 px-4"><span className="text-amber-600 font-medium">可选</span></td>
                  <td className="py-3 px-4 text-muted-foreground">用户 ID，示例：<InlineCode>1001</InlineCode></td>
                </tr>
              </tbody>
            </table>
          </div>

          <Blockquote variant="warning" className="mt-4">
            <strong>认证说明</strong>：请使用 Bearer Token 方式传递令牌，格式为 <InlineCode>Authorization: Bearer &lt;token&gt;</InlineCode>
          </Blockquote>
        </section>

        {/* Response Section */}
        <section id="response" className="mt-10">
          <h2 className="doc-heading-h2">响应说明</h2>
          
          <h3 className="doc-heading-h3">HTTP 状态码</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-foreground bg-muted/30">状态码</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground bg-muted/30">说明</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4"><span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs font-medium">200</span></td>
                  <td className="py-3 px-4 text-muted-foreground">请求成功，返回用户账户信息</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4"><span className="px-2 py-0.5 bg-red-100 text-red-700 rounded text-xs font-medium">401</span></td>
                  <td className="py-3 px-4 text-muted-foreground">认证失败，请检查 Authorization 令牌</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="doc-heading-h3 mt-6">响应体结构</h3>
          <CodeBlock
            language="json"
            code={`{
  "code": 0,
  "message": "ok",
  "data": {
    "user_id": "1001",
    "username": "example_user",
    "quota": 50000000,
    "used_quota": 10000000,
    "balance": 100.00,
    "created_at": "2024-01-01T00:00:00Z"
  }
}`}
          />
          
          <h3 className="doc-heading-h3 mt-6">字段说明</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold text-foreground bg-muted/30">字段</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground bg-muted/30">类型</th>
                  <th className="text-left py-3 px-4 font-semibold text-foreground bg-muted/30">说明</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4"><InlineCode>user_id</InlineCode></td>
                  <td className="py-3 px-4 text-muted-foreground">string</td>
                  <td className="py-3 px-4 text-muted-foreground">用户唯一标识</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4"><InlineCode>username</InlineCode></td>
                  <td className="py-3 px-4 text-muted-foreground">string</td>
                  <td className="py-3 px-4 text-muted-foreground">用户名</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4"><InlineCode>quota</InlineCode></td>
                  <td className="py-3 px-4 text-muted-foreground">integer</td>
                  <td className="py-3 px-4 text-muted-foreground">余额额度（实际余额 = quota / 500000）</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4"><InlineCode>used_quota</InlineCode></td>
                  <td className="py-3 px-4 text-muted-foreground">integer</td>
                  <td className="py-3 px-4 text-muted-foreground">已使用额度</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4"><InlineCode>balance</InlineCode></td>
                  <td className="py-3 px-4 text-muted-foreground">number</td>
                  <td className="py-3 px-4 text-muted-foreground">账户余额（单位：元）</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4"><InlineCode>created_at</InlineCode></td>
                  <td className="py-3 px-4 text-muted-foreground">string</td>
                  <td className="py-3 px-4 text-muted-foreground">账户创建时间（ISO 8601 格式）</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Example Section */}
        <section id="example" className="mt-10">
          <h2 className="doc-heading-h2">调用示例</h2>

          <h3 className="doc-heading-h3">cURL</h3>
          <CodeBlock
            language="bash"
            title="cURL"
            code={`curl -X GET "${BASE_URL}/api/user/self" \\
  -H "Authorization: Bearer <Your_Token>" \\
  -H "Rix-Api-User: 1001"`}
          />

          <h3 className="doc-heading-h3">JavaScript (fetch)</h3>
          <CodeBlock
            language="javascript"
            title="JavaScript"
            code={`const response = await fetch("${BASE_URL}/api/user/self", {
  method: "GET",
  headers: {
    "Authorization": "Bearer YOUR_TOKEN",
    "Rix-Api-User": "1001"
  }
});

const data = await response.json();
console.log("用户余额:", data.data.quota / 500000);`}
          />

          <h3 className="doc-heading-h3">Python (requests)</h3>
          <CodeBlock
            language="python"
            title="Python"
            code={`import requests

response = requests.get(
    "${BASE_URL}/api/user/self",
    headers={
        "Authorization": "Bearer YOUR_TOKEN",
        "Rix-Api-User": "1001"
    }
)

data = response.json()
print(f"用户余额: {data['data']['quota'] / 500000}")`}
          />
        </section>

        {/* Notes Section */}
        <section id="notes" className="mt-10">
          <h2 className="doc-heading-h2">注意事项</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground text-[15px]">
            <li>系统访问令牌请在「个人中心 → 更多选项」中创建和管理。</li>
            <li><InlineCode>quota</InlineCode> 字段为原始额度值，需除以 <strong className="text-foreground">500000</strong> 才能得到实际余额（单位：元）。</li>
            <li>请妥善保管您的访问令牌，避免泄露。</li>
            <li>如遇到认证失败，请检查令牌是否过期或被禁用。</li>
          </ul>

          <Blockquote variant="info" className="mt-4">
            <strong>计算公式</strong>：实际余额（元）= quota ÷ 500000
          </Blockquote>
        </section>

        {/* OpenAPI Specification */}
        <section id="openapi" className="mt-10">
          <h2 className="doc-heading-h2">OpenAPI Specification</h2>
          <CodeBlock
            language="yaml"
            title="OpenAPI 3.0"
            code={`openapi: 3.0.1
info:
  title: '${SYSTEM_NAME}'
  description: '用户查询账户信息接口'
  version: 1.0.0
paths:
  /api/user/self:
    get:
      summary: 用户查询账户信息
      deprecated: false
      description: |-
        系统访问令牌在：个人中心-更多选项
        quota是余额额度，实际余额=quota/500000
      tags:
        - 系统接口
      parameters:
        - name: Rix-Api-User
          in: header
          description: 用户ID
          required: false
          example: '1001'
          schema:
            type: string
        - name: Authorization
          in: header
          description: 系统访问令牌（在个人中心创建）
          required: false
          schema:
            type: string
      responses:
        '200':
          description: '成功'
          content:
            application/json:
              schema:
                type: object
                properties: {}
      security:
        - bearer: []
components:
  securitySchemes:
    bearer:
      type: http
      scheme: bearer
servers:
  - url: ${BASE_URL}
    description: ${SYSTEM_NAME}
security:
  - bearer: []`}
          />
        </section>

        {/* Page Navigation */}
        <PageNavigation />
      </article>

      {/* Table of Contents */}
      <TableOfContents items={tocItems} />
    </div>
  );
}
