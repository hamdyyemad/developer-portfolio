'use client';

import ReactMarkdown from 'react-markdown';
import CodeSnippet from './CodeSnippet';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export default function MarkdownRenderer({ content, className = "" }: MarkdownRendererProps) {
  return (
    <div className={`prose prose-invert prose-lg max-w-none ${className}`}>
      <ReactMarkdown
        components={{
          // Custom code block component
          code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '');
            const language = match ? match[1] : 'plaintext';
            
            if (inline) {
              return (
                <code className="bg-gray-800 text-orange-400 px-2 py-1 rounded text-sm font-mono">
                  {children}
                </code>
              );
            }
            
            return (
              <CodeSnippet
                code={String(children).replace(/\n$/, '')}
                language={language}
              />
            );
          },
          
          // Custom heading components
          h1: ({ children }) => (
            <h1 className="text-4xl font-bold text-white mb-6 mt-8 first:mt-0">
              {children}
            </h1>
          ),
          
          h2: ({ children }) => (
            <h2 className="text-3xl font-bold text-white mb-4 mt-8">
              {children}
            </h2>
          ),
          
          h3: ({ children }) => (
            <h3 className="text-2xl font-bold text-white mb-3 mt-6">
              {children}
            </h3>
          ),
          
          h4: ({ children }) => (
            <h4 className="text-xl font-bold text-white mb-2 mt-4">
              {children}
            </h4>
          ),
          
          // Custom paragraph component
          p: ({ children }) => (
            <p className="text-gray-300 mb-4 leading-relaxed">
              {children}
            </p>
          ),
          
          // Custom list components
          ul: ({ children }) => (
            <ul className="list-disc list-inside mb-4 space-y-2">
              {children}
            </ul>
          ),
          
          ol: ({ children }) => (
            <ol className="list-decimal list-inside mb-4 space-y-2">
              {children}
            </ol>
          ),
          
          li: ({ children }) => (
            <li className="text-gray-300">
              {children}
            </li>
          ),
          
          // Custom strong component
          strong: ({ children }) => (
            <strong className="text-white font-semibold">
              {children}
            </strong>
          ),
          
          // Custom link component
          a: ({ href, children }) => (
            <a 
              href={href} 
              className="text-orange-500 hover:text-orange-400 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          
          // Custom blockquote component
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-orange-500 pl-4 my-6 italic text-gray-400">
              {children}
            </blockquote>
          ),
          
          // Custom table components
          table: ({ children }) => (
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border-collapse border border-gray-700">
                {children}
              </table>
            </div>
          ),
          
          thead: ({ children }) => (
            <thead className="bg-gray-800">
              {children}
            </thead>
          ),
          
          tbody: ({ children }) => (
            <tbody>
              {children}
            </tbody>
          ),
          
          tr: ({ children }) => (
            <tr className="border-b border-gray-700">
              {children}
            </tr>
          ),
          
          th: ({ children }) => (
            <th className="border border-gray-700 px-4 py-2 text-left text-white font-semibold">
              {children}
            </th>
          ),
          
          td: ({ children }) => (
            <td className="border border-gray-700 px-4 py-2 text-gray-300">
              {children}
            </td>
          ),
          
          // Custom horizontal rule
          hr: () => (
            <hr className="border-gray-700 my-8" />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
} 