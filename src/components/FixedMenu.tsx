import { Editor } from "@tiptap/react";
import { ComponentProps } from "react";
import { GoListOrdered } from "react-icons/go";
import {
  RxChevronDown,
  RxDividerVertical,
  RxFontFamily,
  RxFontSize,
  RxListBullet,
  RxTextAlignCenter,
  RxTextAlignJustify,
  RxTextAlignLeft,
  RxTextAlignRight,
} from "react-icons/rx";
import { FixedButton } from "./Button";

interface FixedMenuProps extends ComponentProps<"div"> {
  editor: Editor;
}

export default function FixedMenu({ editor }: FixedMenuProps) {
  return (
    <div className="sticky top-0 flex flex-row items-center justify-center prose prose-invert bg-zinc-900 rounded-2xl px-3 mt-2 z-10 min-w-full opacity-100">
      <div className="flex">
        <FixedButton
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
        >
          <RxTextAlignLeft className="w-7 h-7" />
        </FixedButton>
        <FixedButton
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
        >
          <RxTextAlignCenter className="w-7 h-7" />
        </FixedButton>
        <FixedButton
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        >
          <RxTextAlignJustify className="w-7 h-7" />
        </FixedButton>
        <FixedButton
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
        >
          <RxTextAlignRight className="w-7 h-7" />
        </FixedButton>
      </div>
      <RxDividerVertical />
      <div className="flex">
        <FixedButton
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
        >
          <RxFontFamily className="w-5 h-5 -mr-2" />
          <RxChevronDown className="h-5" />
        </FixedButton>
        <FixedButton
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
        >
          <RxFontSize className="w-5 h-5 -mr-2" />
          <RxChevronDown className="h-5" />
        </FixedButton>
      </div>
      <RxDividerVertical />
      <div className="flex">
        <FixedButton
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <GoListOrdered className="w-5 h-5" />
        </FixedButton>
        <FixedButton
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <RxListBullet className="w-5 h-5" />
        </FixedButton>
      </div>
    </div>
  );
}
