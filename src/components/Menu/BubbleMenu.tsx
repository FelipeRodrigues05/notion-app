import { BubbleMenu, Editor } from "@tiptap/react";
import { BubbleButton } from "../Button";
import { RxCode, RxFontBold, RxFontItalic, RxStrikethrough } from "react-icons/rx";

interface HoverMenuProps {
  editor: Editor;
}

export default function HoverMenu({editor}: HoverMenuProps) {
  return (
    <BubbleMenu
      className="bg-zinc-700 shadow-lg border border-zinc-600 shadow-black/20 rounded-lg overflow-y-auto flex divide-x divide-zinc-600"
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
