// components/CodeViewer.tsx
import React from "react"
import { Prism as SyntaxHighlighterPrism } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

const SyntaxHighlighter =
  SyntaxHighlighterPrism as any

type Props = {
  code: string
  language?: string
  showLineNumbers?: boolean
}

const CodeViewer: React.FC<Props> = ({
  code,
  language = "tsx",
  showLineNumbers = true,
}) => {
  return (
    <div
      style={{
        borderRadius: 8,
        overflow: "auto",
      }}
    >
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        showLineNumbers={showLineNumbers}
        customStyle={{
          padding: "1rem",
          borderRadius: "8px",
          fontSize: "14px",
        }}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeViewer
