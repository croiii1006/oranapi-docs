import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export function CodeBlock({ code, language = 'text', title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-lg overflow-hidden border border-slate-800 my-4">
      {/* Header with language and copy button */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800">
        <span className="text-xs font-medium text-slate-400 uppercase tracking-wide">
          {title || language}
        </span>
        <button
          onClick={handleCopy}
          className={cn(
            "flex items-center gap-1.5 px-2.5 py-1 rounded text-xs transition-all duration-200",
            "bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200"
          )}
          title="复制代码"
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
      
      {/* Code content */}
      <div className="relative">
        <pre className="p-4 bg-[hsl(222,47%,5%)] text-slate-100 text-sm overflow-x-auto font-mono leading-relaxed">
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
    </div>
  );
}

// Inline code component
export function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="inline-code">
      {children}
    </code>
  );
}
