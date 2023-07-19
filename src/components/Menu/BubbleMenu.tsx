import { BubbleMenu, Editor } from "@tiptap/react";
import {
  RxCode,
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
} from "react-icons/rx";
import { BubbleButton } from "../Button";

interface HoverMenuProps {
  editor: Editor;
}

export default function HoverMenu({ editor }: HoverMenuProps) {
  return (
    <BubbleMenu
      className="flex -mb-1 overflow-x-auto border divide-x rounded-lg shadow-lg bg-zinc-500 border-zinc-400 dark:bg-zinc-700 dark:border-zinc-600 shadow-black/20 divide-zinc-600"
      editor={editor}
    >
      <div className="flex items-center">
        <BubbleButton onClick={() => editor.chain().focus().toggleBold().run()}>
          <RxFontBold className="w-4 h-4" />
        </BubbleButton>
        <BubbleButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <RxFontItalic className="w-4 h-4" />
        </BubbleButton>
        <BubbleButton
          onClick={() => editor.chain().focus().toggleStrike().run()}
        >
          <RxStrikethrough className="w-4 h-4" />
        </BubbleButton>
        <BubbleButton onClick={() => editor.chain().focus().toggleCode().run()}>
          <RxCode className="w-4 h-4" />
        </BubbleButton>
      </div>
    </BubbleMenu>
  );
}
