import {
  CodeSimple,
  TextBolder,
  TextItalic,
  TextStrikethrough,
} from "@phosphor-icons/react";
import { EditorContent } from "@tiptap/react";
import { editor } from "../lib/editor";
import { BubbleMenu } from "./Menu/BubbleMenu";
import StylingMenu from "./StylingMenu";

export default function Editor() {
  return (
    <>
      <EditorContent
        editor={editor}
        className="mx-auto md:pt-8 sm:pt-8 lg:max-w-[50rem] md:max-w-[30rem] sm:max-w-[25rem] min-h-[44rem]"
      />
      <StylingMenu />

      {editor && (
        <BubbleMenu.Root>
          <BubbleMenu.Button
            icon={TextBolder}
            onClick={() => editor.chain().focus().toggleBold().run()}
          />
          <BubbleMenu.Button
            icon={TextItalic}
            onClick={() => editor.chain().focus().toggleItalic().run()}
          />
          <BubbleMenu.Button
            icon={TextStrikethrough}
            onClick={() => editor.chain().focus().toggleStrike().run()}
          />
          <BubbleMenu.Button
            icon={CodeSimple}
            onClick={() => editor.chain().focus().toggleCode().run()}
          />
        </BubbleMenu.Root>
      )}
    </>
  );
}
