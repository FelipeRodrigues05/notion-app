import { BubbleMenu, EditorContent, useEditor } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import {
  RxChevronDown,
  RxCode,
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxText,
} from "react-icons/rx";
import BubbleButton from "./BubbleButton";
import { initialContent } from "./initialContent";

export default function Editor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: initialContent,
    editorProps: {
      attributes: {
        class: "outline-none",
      },
    },
  });

  return (
    <>
      <EditorContent
        editor={editor}
        className="max-w-[700px] mx-auto pt-16 prose prose-invert prose-purple"
      />
      {editor && (
        <BubbleMenu
          className="bg-zinc-700  shadow-lg border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex divide-x divide-zinc-600"
          editor={editor}
        >
          <BubbleButton>
            <RxText className="w-4 h-4" />
            Text
            <RxChevronDown className="w-4 h-4" />
          </BubbleButton>
          <div className="flex items-center">
            <BubbleButton>
              <RxFontBold className="w-4 h-4" />
            </BubbleButton>
            <BubbleButton>
              <RxFontItalic className="w-4 h-4" />
            </BubbleButton>
            <BubbleButton>
              <RxStrikethrough className="w-4 h-4" />
            </BubbleButton>
            <BubbleButton>
              <RxCode className="w-4 h-4" />
            </BubbleButton>
          </div>
        </BubbleMenu>
      )}
    </>
  );
}
