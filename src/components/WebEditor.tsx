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
        className="max-w-[40rem] mx-auto pt-16 md:pt-8 md:pl-8 sm:pt-4 sm:pl-4"
      />

      {editor && <HoverMenu editor={editor} />}
    </>
  );
}
