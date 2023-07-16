import { EditorContent } from "@tiptap/react";

import editor from "../lib/editor";

import HoverMenu from "./Menu/BubbleMenu";
import FixedMenu from "./Menu/FixedMenu";

export default function WebEditor() {
  return (
    <>
      <FixedMenu editor={editor} />
      <EditorContent
        editor={editor}
        className="max-w-[700px] mx-auto pt-16 prose prose-invert"
      />

      {editor && <HoverMenu editor={editor} />}
    </>
  );
}
