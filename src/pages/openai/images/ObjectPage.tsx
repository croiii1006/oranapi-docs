import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CodeBlock, InlineCode } from '@/components/docs/CodeBlock';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { PageNavigation } from '@/components/docs/PageNavigation';
import CopyPageDropdown from '@/components/docs/CopyPageDropdown';

const tocItems = [
  { id: 'params', title: '参数说明', level: 2 },
  { id: 'example', title: '响应示例', level: 2 },
];

export function ImageObjectPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="flex gap-10">
      <article className="docs-content flex-1 min-w-0 max-w-[1000px]">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-1">
          <h1 className="doc-heading-h1 !border-b-0 !pb-0 !mb-0">图像对象</h1>
          <CopyPageDropdown pageTitle="图像对象" />
        </div>
        <div className="border-b border-border/40 mb-6 pb-4" />

        <p className="text-muted-foreground text-[15px] mb-6">
          表示 OpenAI API 生成的图像的 url 或内容。
        </p>

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
                  <td className="py-3 px-4 font-medium text-foreground"><InlineCode>b64_json</InlineCode></td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">如果 <InlineCode>response_format</InlineCode> 为 <InlineCode>b64_json</InlineCode>，则生成图像的 base64 编码 JSON</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium text-foreground"><InlineCode>url</InlineCode></td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">如果 <InlineCode>response_format</InlineCode> 为 <InlineCode>url</InlineCode>（默认），则生成图像的 URL</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-foreground"><InlineCode>revised_prompt</InlineCode></td>
                  <td className="py-3 px-4">string</td>
                  <td className="py-3 px-4">如果提示有任何修订，则用于生成图像的提示</td>
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
            title="图像对象"
            code={`{
  "url": "...",
  "revised_prompt": "..."
}`}
          />
        </section>

        <PageNavigation />
      </article>

      <TableOfContents items={tocItems} />
    </div>
  );
}
