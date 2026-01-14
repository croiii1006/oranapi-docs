import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Blockquote } from '@/components/docs/Blockquote';
import { PageNavigation } from '@/components/docs/PageNavigation';
import CopyPageDropdown from '@/components/docs/CopyPageDropdown';

export function ImagesReadmePage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="flex gap-10">
      <article className="docs-content flex-1 min-w-0 max-w-[1000px]">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-1">
          <h1 className="doc-heading-h1 !border-b-0 !pb-0 !mb-0">README</h1>
          <CopyPageDropdown pageTitle="图像 README" />
        </div>
        <div className="border-b border-border/40 mb-6 pb-4" />

        <Blockquote variant="tip">
          创建图像时，如果需要上传图片文件，你必须从本地上传一个<strong>小于 4MB</strong> 的 <code>.png</code> 文件
        </Blockquote>

        <div className="mt-8">
          <img 
            src="https://api.apifox.cn/api/v1/projects/2100343/resources/388747/image-preview" 
            alt="上传图片示例"
            className="rounded-lg border border-border max-w-full"
          />
        </div>

        <PageNavigation />
      </article>
    </div>
  );
}
