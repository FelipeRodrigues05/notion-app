import { BubbleMenu } from "@tiptap/react";
import { ReactNode } from "react";
import { editor } from "../../../lib/editor";

interface BubbleMenuRootProps {
  children: ReactNode;
}

export default function BubbleMenuRoot({ children }: BubbleMenuRootProps) {
  return (
    <BubbleMenu
      editor={editor}
      className="flex -mb-1 overflow-x-auto border divide-x rounded-lg shadow-lg bg-zinc-500 border-zinc-400 dark:bg-zinc-700 dark:border-zinc-600 shadow-black/20 divide-zinc-600"
    >
      <div className="flex items-center">{children}</div>
    </BubbleMenu>
  );
}
