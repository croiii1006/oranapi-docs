import { useEffect } from 'react';
import { FileText } from 'lucide-react';
import { CodeBlock } from '@/components/docs/CodeBlock';
import { Blockquote } from '@/components/docs/Blockquote';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { PageNavigation } from '@/components/docs/PageNavigation';

const tocItems = [
  { id: 'overview', title: '对象概述', level: 2 },
  { id: 'fields', title: '字段说明', level: 2 },
  { id: 'example', title: '示例', level: 2 },
];

export default function CompletionObjectPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const objectExample = `{
  "id": "cmpl-uqkvlQyYK7bGYrRHQ0eXlWi7",
  "object": "text_completion",
  "created": 1589478378,
  "model": "gpt-3.5-turbo",
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

  return (
    <div className="flex gap-8">
      {/* Main Content */}
      <div className="flex-1 min-w-0">
        <div className="space-y-8">
          {/* Page Header */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold text-foreground">完成对象</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              表示来自 API 的完成响应对象。注意：流式响应和非流式响应对象具有相同的结构（与 chat 端点不同）。
            </p>
          </div>

          {/* Overview */}
          <section id="overview">
            <h2 className="text-2xl font-semibold text-foreground mb-4 scroll-mt-16">对象概述</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              完成对象（Completion Object）是调用自动补全 API 后返回的标准响应格式。它包含了模型生成的文本补全、
              使用统计信息以及其他元数据。
            </p>
            <Blockquote>
              与聊天补全不同，自动补全的流式和非流式响应结构完全相同，便于统一处理。
            </Blockquote>
          </section>

          {/* Fields */}
          <section id="fields">
            <h2 className="text-2xl font-semibold text-foreground mb-4 scroll-mt-16">字段说明</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-medium text-foreground">参数</th>
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
                    <td className="py-3 px-4 text-muted-foreground">对象类型，总是 "text_completion"</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4"><code className="text-primary">created</code></td>
                    <td className="py-3 px-4 text-muted-foreground">integer</td>
                    <td className="py-3 px-4 text-muted-foreground">创建完成的 Unix 时间戳（秒）</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4"><code className="text-primary">model</code></td>
                    <td className="py-3 px-4 text-muted-foreground">string</td>
                    <td className="py-3 px-4 text-muted-foreground">用于完成的模型</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4"><code className="text-primary">system_fingerprint</code></td>
                    <td className="py-3 px-4 text-muted-foreground">string</td>
                    <td className="py-3 px-4 text-muted-foreground">该指纹表示模型运行的后端配置</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4"><code className="text-primary">choices</code></td>
                    <td className="py-3 px-4 text-muted-foreground">array</td>
                    <td className="py-3 px-4 text-muted-foreground">模型为输入提示生成的完成选项列表</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4"><code className="text-primary">usage</code></td>
                    <td className="py-3 px-4 text-muted-foreground">object</td>
                    <td className="py-3 px-4 text-muted-foreground">完成请求的使用统计信息</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-medium text-foreground mb-3 mt-6">usage 对象字段</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-medium text-foreground">参数</th>
                    <th className="text-left py-3 px-4 font-medium text-foreground">类型</th>
                    <th className="text-left py-3 px-4 font-medium text-foreground">描述</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4"><code className="text-primary">prompt_tokens</code></td>
                    <td className="py-3 px-4 text-muted-foreground">integer</td>
                    <td className="py-3 px-4 text-muted-foreground">提示中的标记数</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4"><code className="text-primary">completion_tokens</code></td>
                    <td className="py-3 px-4 text-muted-foreground">integer</td>
                    <td className="py-3 px-4 text-muted-foreground">生成的完成中的标记数</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4"><code className="text-primary">total_tokens</code></td>
                    <td className="py-3 px-4 text-muted-foreground">integer</td>
                    <td className="py-3 px-4 text-muted-foreground">请求中使用的标记总数（提示 + 完成）</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-medium text-foreground mb-3 mt-6">choices 数组元素字段</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-medium text-foreground">参数</th>
                    <th className="text-left py-3 px-4 font-medium text-foreground">类型</th>
                    <th className="text-left py-3 px-4 font-medium text-foreground">描述</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4"><code className="text-primary">text</code></td>
                    <td className="py-3 px-4 text-muted-foreground">string</td>
                    <td className="py-3 px-4 text-muted-foreground">生成的文本内容</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4"><code className="text-primary">index</code></td>
                    <td className="py-3 px-4 text-muted-foreground">integer</td>
                    <td className="py-3 px-4 text-muted-foreground">选项的索引位置</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4"><code className="text-primary">logprobs</code></td>
                    <td className="py-3 px-4 text-muted-foreground">object | null</td>
                    <td className="py-3 px-4 text-muted-foreground">令牌的对数概率（如果请求时启用）</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4"><code className="text-primary">finish_reason</code></td>
                    <td className="py-3 px-4 text-muted-foreground">string</td>
                    <td className="py-3 px-4 text-muted-foreground">完成原因：stop、length、content_filter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Example */}
          <section id="example">
            <h2 className="text-2xl font-semibold text-foreground mb-4 scroll-mt-16">示例</h2>
            <CodeBlock code={objectExample} language="json" />
          </section>

          <Blockquote>
            提示：finish_reason 字段可以帮助您判断生成是否完整。如果值为 "length"，说明生成因达到 max_tokens 限制而停止，您可能需要增加该值。
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
