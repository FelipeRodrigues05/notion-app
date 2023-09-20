import { NodeViewWrapper } from "@tiptap/react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { useState } from "react";

const initialCode = [
  `import chalk from "chalk";`,
  ``,
  `console.log(chalk.green("Hello World"));`,
].join("\n");

export default function EditorBlock() {
  const [code, setCode] = useState(initialCode);

  return (
    <NodeViewWrapper className="not-prose">
      <CodeEditor
        value={code}
        onChange={(e) => setCode(e.target.value)}
        language="js"
        minHeight={80}
        padding={20}
        spellCheck={false}
        className="text-sm font-mono rounded dark:bg-zinc-900 bg-zinc-500"
      />
    </NodeViewWrapper>
  );
}
