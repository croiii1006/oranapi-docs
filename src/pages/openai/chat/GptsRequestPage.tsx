import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CodeBlock, InlineCode } from '@/components/docs/CodeBlock';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { PageNavigation } from '@/components/docs/PageNavigation';
import CopyPageDropdown from '@/components/docs/CopyPageDropdown';

const tocItems = [
  { id: 'response-params', title: '响应参数', level: 2 },
  { id: 'example', title: '响应示例', level: 2 },
];

export function GptsRequestPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="flex gap-10">
      <article className="docs-content flex-1 min-w-0 max-w-[1000px]">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-1">
          <h1 className="doc-heading-h1 !border-b-0 !pb-0 !mb-0">gpts 请求</h1>
          <CopyPageDropdown pageTitle="gpts 请求" />
        </div>
        <div className="border-b border-border/40 mb-6 pb-4" />

        {/* Response Parameters */}
        <section id="response-params" className="mt-6">
          <h2 className="doc-heading-h2">响应参数</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold">参数</th>
                  <th className="text-left py-3 px-4 font-semibold">类型</th>
                  <th className="text-left py-3 px-4 font-semibold">描述</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium text-foreground"><InlineCode>id</InlineCode></td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">聊天完成的唯一标识符</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium text-foreground"><InlineCode>choices</InlineCode></td>
                  <td className="py-3 px-4">array</td>
                  <td className="py-3 px-4">聊天完成选项列表。如果n大于1,可以有多个选项</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium text-foreground"><InlineCode>created</InlineCode></td>
                  <td className="py-3 px-4">integer</td>
                  <td className="py-3 px-4">创建聊天完成的Unix时间戳(秒)</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium text-foreground"><InlineCode>model</InlineCode></td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">用于聊天完成的模型</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium text-foreground"><InlineCode>system_fingerprint</InlineCode></td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">该指纹表示模型运行的后端配置</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium text-foreground"><InlineCode>object</InlineCode></td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">对象类型,总是 <InlineCode>chat.completion</InlineCode></td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium text-foreground"><InlineCode>usage</InlineCode></td>
                  <td className="py-3 px-4">object</td>
                  <td className="py-3 px-4">完成请求的使用统计信息</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium text-foreground"><InlineCode>completion_tokens</InlineCode></td>
                  <td className="py-3 px-4">integer</td>
                  <td className="py-3 px-4">生成的完成中的标记数</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium text-foreground"><InlineCode>prompt_tokens</InlineCode></td>
                  <td className="py-3 px-4">integer</td>
                  <td className="py-3 px-4">提示中的标记数</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-foreground"><InlineCode>total_tokens</InlineCode></td>
                  <td className="py-3 px-4">integer</td>
                  <td className="py-3 px-4">请求中使用的标记总数(提示 + 完成)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Example */}
        <section id="example" className="mt-10">
          <h2 className="doc-heading-h2">响应示例</h2>
          <CodeBlock
            language="json"
            title="响应示例"
            code={`{
  "id": "chatcmpl-123",
  "object": "chat.completion",
  "created": 1677652288,
  "model": "gpt-3.5-turbo-0613",
  "system_fingerprint": "fp_44709d6fcb",
  "choices": [{
    "index": 0,
    "message": {
      "role": "assistant",
      "content": "\\n\\nHello there, how may I assist you today?"
    },
    "finish_reason": "stop"
  }],
  "usage": {
    "prompt_tokens": 9,
    "completion_tokens": 12,
    "total_tokens": 21
  }
}`}
          />
        </section>

        <PageNavigation />
      </article>

      <TableOfContents items={tocItems} />
    </div>
  );
}
