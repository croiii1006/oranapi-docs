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
    <div className="relative group rounded-lg overflow-hidden border border-slate-800">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800">
          <span className="text-xs font-medium text-slate-400">{title}</span>
          <span className="text-xs text-slate-500 uppercase">{language}</span>
        </div>
      )}
      <div className="relative">
        <pre className={cn(
          "p-4 bg-slate-950 text-slate-100 text-sm overflow-x-auto",
          !title && "rounded-lg"
        )}>
          <code className={`language-${language}`}>{code}</code>
        </pre>
        <button
          onClick={handleCopy}
          className={cn(
            "absolute top-3 right-3 p-2 rounded-md transition-all duration-200",
            "opacity-0 group-hover:opacity-100",
            "bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200"
          )}
          title="复制代码"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-400" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  );
}
