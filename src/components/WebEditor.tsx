import { BubbleMenu, EditorContent } from "@tiptap/react";
import {
  RxCode,
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
} from "react-icons/rx";

import editor from "../lib/editor";

import { BubbleButton } from "./Button";
import FixedMenu from "./FixedMenu";

export default function WebEditor() {
  return (
    <>
      <FixedMenu editor={editor}/>
      <EditorContent
        editor={editor}
        className="max-w-[700px] mx-auto pt-16 prose prose-invert"
      />

      {editor && (
        <BubbleMenu
          className="bg-zinc-700 shadow-lg border border-zinc-600 shadow-black/20 rounded-lg overflow-y-auto flex divide-x divide-zinc-600"
          editor={editor}
        >
          <div className="flex items-center">
            <BubbleButton
              onClick={() => editor.chain().focus().toggleBold().run()}
            >
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
            <BubbleButton
              onClick={() => editor.chain().focus().toggleCode().run()}
            >
              <RxCode className="w-4 h-4" />
            </BubbleButton>
          </div>
        </BubbleMenu>
      )}
    </>
  );
}
