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
        className="mx-auto pt-16 md:pt-8 md:pl-8 sm:pt-8 lg:max-w-[50rem] md:max-w-[30rem] sm:max-w-[25rem]"
      />

      {editor && <HoverMenu editor={editor} />}
    </>
  );
}
