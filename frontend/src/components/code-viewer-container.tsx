import CodeViewer from "./code-viewer"

export const CodeViewerContainer: React.FC<{
  code: string
  language?: string
}> = ({ code, language }) => {
  return (
    <div className="max-h-[85vh] min-h-[300px] overflow-y-scroll">
      <CodeViewer
        code={code}
        language={language}
      />
    </div>
  )
}
