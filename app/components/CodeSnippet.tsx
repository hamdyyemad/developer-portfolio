'use client';

import { useEffect, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-markdown';
import 'prismjs/themes/prism-tomorrow.css';

interface CodeSnippetProps {
  code: string;
  language: string;
  filename?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export default function CodeSnippet({ 
  code, 
  language, 
  filename, 
  showLineNumbers = false,
  className = ""
}: CodeSnippetProps) {
  const [copied, setCopied] = useState(false);
  const [highlightedCode, setHighlightedCode] = useState('');

  useEffect(() => {
    // Highlight the code using Prism.js
    const highlighted = Prism.highlight(code, Prism.languages[language] || Prism.languages.plaintext, language);
    setHighlightedCode(highlighted);
  }, [code, language]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy code:', error);
    }
  };

  const getLanguageDisplayName = (lang: string) => {
    const languageMap: { [key: string]: string } = {
      'javascript': 'JavaScript',
      'typescript': 'TypeScript',
      'jsx': 'JSX',
      'tsx': 'TSX',
      'csharp': 'C#',
      'css': 'CSS',
      'html': 'HTML',
      'json': 'JSON',
      'sql': 'SQL',
      'bash': 'Bash',
      'markdown': 'Markdown',
      'plaintext': 'Text'
    };
    return languageMap[lang] || lang;
  };

  return (
    <div className={`relative my-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between bg-gray-800 text-gray-300 px-4 py-2 rounded-t-lg border-b border-gray-700">
        <div className="flex items-center space-x-2">
          {filename && (
            <span className="text-sm font-medium">{filename}</span>
          )}
          <span className="text-xs bg-gray-700 px-2 py-1 rounded">
            {getLanguageDisplayName(language)}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="text-gray-400 hover:text-white transition-colors p-1 rounded"
          title="Copy code"
        >
          {copied ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </button>
      </div>

      {/* Code Block */}
      <div className="bg-gray-900 rounded-b-lg overflow-hidden">
        <pre className={`p-4 m-0 overflow-x-auto ${showLineNumbers ? 'line-numbers' : ''}`}>
          <code 
            className={`language-${language}`}
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
        </pre>
      </div>
    </div>
  );
} 