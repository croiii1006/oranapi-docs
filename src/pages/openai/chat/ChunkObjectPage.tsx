import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CodeBlock, InlineCode } from '@/components/docs/CodeBlock';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { PageNavigation } from '@/components/docs/PageNavigation';
import CopyPageDropdown from '@/components/docs/CopyPageDropdown';

const tocItems = [
  { id: 'params', title: '参数说明', level: 2 },
  { id: 'example', title: '流式响应示例', level: 2 },
];

export function ChunkObjectPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="flex gap-10">
      <article className="docs-content flex-1 min-w-0 max-w-[1000px]">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-1">
          <h1 className="doc-heading-h1 !border-b-0 !pb-0 !mb-0">聊天完成块对象</h1>
          <CopyPageDropdown pageTitle="聊天完成块对象" />
        </div>
        <div className="border-b border-border/40 mb-6 pb-4" />

        {/* Parameters */}
        <section id="params" className="mt-6">
          <h2 className="doc-heading-h2">参数说明</h2>
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
                  <td className="py-3 px-4">聊天完成的唯一标识符。每个块具有相同的ID</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium text-foreground"><InlineCode>choices</InlineCode></td>
                  <td className="py-3 px-4">array</td>
                  <td className="py-3 px-4">聊天完成选项列表。如果n大于1,可以有多个选项</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium text-foreground"><InlineCode>created</InlineCode></td>
                  <td className="py-3 px-4">integer</td>
                  <td className="py-3 px-4">创建聊天完成的Unix时间戳(秒)。每个块具有相同的时间戳</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium text-foreground"><InlineCode>model</InlineCode></td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">生成完成的模型</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium text-foreground"><InlineCode>system_fingerprint</InlineCode></td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">该指纹表示模型运行的后端配置</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-foreground"><InlineCode>object</InlineCode></td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">对象类型,总是 <InlineCode>chat.completion.chunk</InlineCode></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Example */}
        <section id="example" className="mt-10">
          <h2 className="doc-heading-h2">流式响应示例</h2>
          <p className="text-muted-foreground text-[15px] mb-4">
            当使用流式传输时，响应会以多个块的形式返回，每个块包含部分内容：
          </p>
          <CodeBlock
            language="json"
            title="流式响应块"
            code={`{"id":"chatcmpl-123","object":"chat.completion.chunk","created":1694268190,"model":"gpt-3.5-turbo-0613", "system_fingerprint": "fp_44709d6fcb", "choices":[{"index":0,"delta":{"role":"assistant","content":""},"finish_reason":null}]}

{"id":"chatcmpl-123","object":"chat.completion.chunk","created":1694268190,"model":"gpt-3.5-turbo-0613", "system_fingerprint": "fp_44709d6fcb", "choices":[{"index":0,"delta":{"content":"Hello"},"finish_reason":null}]}

{"id":"chatcmpl-123","object":"chat.completion.chunk","created":1694268190,"model":"gpt-3.5-turbo-0613", "system_fingerprint": "fp_44709d6fcb", "choices":[{"index":0,"delta":{"content":"!"},"finish_reason":null}]}

....

{"id":"chatcmpl-123","object":"chat.completion.chunk","created":1694268190,"model":"gpt-3.5-turbo-0613", "system_fingerprint": "fp_44709d6fcb", "choices":[{"index":0,"delta":{"content":" today"},"finish_reason":null}]}

{"id":"chatcmpl-123","object":"chat.completion.chunk","created":1694268190,"model":"gpt-3.5-turbo-0613", "system_fingerprint": "fp_44709d6fcb", "choices":[{"index":0,"delta":{"content":"?"},"finish_reason":null}]}

{"id":"chatcmpl-123","object":"chat.completion.chunk","created":1694268190,"model":"gpt-3.5-turbo-0613", "system_fingerprint": "fp_44709d6fcb", "choices":[{"index":0,"delta":{},"finish_reason":"stop"}]}`}
          />
        </section>

        <PageNavigation />
      </article>

      <TableOfContents items={tocItems} />
    </div>
  );
}
