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

interface CopyPageDropdownProps {
  pageContent?: string;
  pageTitle?: string;
}

const CopyPageDropdown: React.FC<CopyPageDropdownProps> = ({ 
  pageContent = '', 
  pageTitle = '介绍' 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCopyAsMarkdown = () => {
    const markdownContent = `# ${pageTitle}\n\n${pageContent || document.querySelector('.docs-content')?.textContent || ''}`;
    navigator.clipboard.writeText(markdownContent);
    toast.success('已复制为 Markdown 格式');
    setIsOpen(false);
  };

  const handleViewAsPlainText = () => {
    const plainText = document.querySelector('.docs-content')?.textContent || '';
    const blob = new Blob([plainText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
    setIsOpen(false);
  };

  const handleLLMsTxt = () => {
    // Open LLMs.txt or generate API documentation for AI models
    toast.info('LLMs.txt 功能即将上线');
    setIsOpen(false);
  };

  return (
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
          onClick={handleViewAsPlainText}
          className="flex flex-col items-start gap-1 p-3 cursor-pointer rounded-md hover:bg-accent/50 focus:bg-accent/50"
        >
          <div className="flex items-center gap-2 text-foreground font-medium">
            <FileText className="h-4 w-4 text-muted-foreground" />
            <span>以 Markdown 格式查看</span>
            <ExternalLink className="h-3 w-3 text-muted-foreground" />
          </div>
          <p className="text-xs text-muted-foreground pl-6">
            以纯文本形式查看此页面
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
  );
};

export default CopyPageDropdown;
