import React, { useState } from 'react';
import { Copy, FileText, Bot, ChevronDown, ExternalLink } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import MarkdownViewerModal from './MarkdownViewerModal';

interface CopyPageDropdownProps {
  pageContent?: string;
  pageTitle?: string;
}

// Helper function to extract markdown content from page
const extractMarkdownContent = (pageTitle: string, customContent?: string): string => {
  if (customContent) {
    return `# ${pageTitle}\n\n${customContent}`;
  }

  const docsContent = document.querySelector('.docs-content');
  if (!docsContent) return `# ${pageTitle}`;

  let markdown = `# ${pageTitle}\n\n`;
  
  // Extract headings, paragraphs, code blocks, lists, etc.
  const elements = docsContent.querySelectorAll('h1, h2, h3, h4, p, pre, ul, ol, blockquote');
  
  elements.forEach((el) => {
    const tagName = el.tagName.toLowerCase();
    const text = el.textContent?.trim() || '';
    
    switch (tagName) {
      case 'h1':
        markdown += `# ${text}\n\n`;
        break;
      case 'h2':
        markdown += `## ${text}\n\n`;
        break;
      case 'h3':
        markdown += `### ${text}\n\n`;
        break;
      case 'h4':
        markdown += `#### ${text}\n\n`;
        break;
      case 'p':
        markdown += `${text}\n\n`;
        break;
      case 'pre':
        const code = el.querySelector('code');
        const lang = code?.className?.match(/language-(\w+)/)?.[1] || '';
        markdown += `\`\`\`${lang}\n${text}\n\`\`\`\n\n`;
        break;
      case 'ul':
      case 'ol':
        el.querySelectorAll('li').forEach((li, idx) => {
          const prefix = tagName === 'ol' ? `${idx + 1}.` : '-';
          markdown += `${prefix} ${li.textContent?.trim()}\n`;
        });
        markdown += '\n';
        break;
      case 'blockquote':
        markdown += `> ${text}\n\n`;
        break;
    }
  });

  return markdown.trim();
};

const CopyPageDropdown: React.FC<CopyPageDropdownProps> = ({ 
  pageContent = '', 
  pageTitle = '介绍' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [markdownContent, setMarkdownContent] = useState('');

  const handleCopyAsMarkdown = async () => {
    const content = extractMarkdownContent(pageTitle, pageContent);
    try {
      await navigator.clipboard.writeText(content);
      toast.success('已成功复制为 Markdown 格式');
    } catch (err) {
      toast.error('复制失败，请重试');
    }
    setIsOpen(false);
  };

  const handleViewAsMarkdown = () => {
    const content = extractMarkdownContent(pageTitle, pageContent);
    setMarkdownContent(content);
    setViewerOpen(true);
    setIsOpen(false);
  };

  const handleLLMsTxt = () => {
    window.open('/llms.txt', '_blank');
    setIsOpen(false);
  };

  return (
    <>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            size="sm" 
            className="h-8 gap-1.5 px-3 text-sm font-normal text-muted-foreground border-border/60 hover:bg-accent/50 hover:text-foreground"
          >
            <Copy className="h-3.5 w-3.5" />
            <span>复制页面</span>
            <ChevronDown className="h-3.5 w-3.5 ml-0.5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align="end" 
          className="w-72 p-1.5 bg-background border border-border/60 shadow-lg"
        >
          <DropdownMenuItem 
            onClick={handleCopyAsMarkdown}
            className="flex flex-col items-start gap-1 p-3 cursor-pointer rounded-md hover:bg-accent/50 focus:bg-accent/50"
          >
            <div className="flex items-center gap-2 text-foreground font-medium">
              <Copy className="h-4 w-4 text-muted-foreground" />
              <span>复制页面</span>
            </div>
            <p className="text-xs text-muted-foreground pl-6">
              复制此页面为 Markdown 格式，以供 AI 大模型使用
            </p>
          </DropdownMenuItem>
          
          <DropdownMenuItem 
            onClick={handleViewAsMarkdown}
            className="flex flex-col items-start gap-1 p-3 cursor-pointer rounded-md hover:bg-accent/50 focus:bg-accent/50"
          >
            <div className="flex items-center gap-2 text-foreground font-medium">
              <FileText className="h-4 w-4 text-muted-foreground" />
              <span>以 Markdown 格式查看</span>
              <ExternalLink className="h-3 w-3 text-muted-foreground" />
            </div>
            <p className="text-xs text-muted-foreground pl-6">
              在弹窗中查看此页面的 Markdown 源码
            </p>
          </DropdownMenuItem>
          
          <DropdownMenuItem 
            onClick={handleLLMsTxt}
            className="flex flex-col items-start gap-1 p-3 cursor-pointer rounded-md hover:bg-accent/50 focus:bg-accent/50"
          >
            <div className="flex items-center gap-2 text-foreground font-medium">
              <Bot className="h-4 w-4 text-muted-foreground" />
              <span>LLMs.txt</span>
              <ExternalLink className="h-3 w-3 text-muted-foreground" />
            </div>
            <p className="text-xs text-muted-foreground pl-6">
              提供信息，让 AI 大模型访问当前站点的所有 API 文档
            </p>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <MarkdownViewerModal
        open={viewerOpen}
        onOpenChange={setViewerOpen}
        content={markdownContent}
        title={pageTitle}
      />
    </>
  );
};

export default CopyPageDropdown;
