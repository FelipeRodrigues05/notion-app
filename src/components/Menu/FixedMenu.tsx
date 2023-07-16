import { Editor } from "@tiptap/react";
import { ComponentProps, useState } from "react";
import { GoListOrdered } from "react-icons/go";
import { FaSquare } from "react-icons/fa";
import {
  RxColorWheel,
  RxDividerVertical,
  RxFontFamily,
  RxFontSize,
  RxListBullet,
  RxTextAlignCenter,
  RxTextAlignJustify,
  RxTextAlignLeft,
  RxTextAlignRight,
} from "react-icons/rx";

import { FixedButton } from "../Button";
import { fontFamily } from "../TextStyles/FontFamily";
import { fontSize } from "../TextStyles/FontSize";
import TextColor, { color } from "../TextStyles/TextColor";
import DropdownMenu from "./DropdownMenu";

interface FixedMenuProps extends ComponentProps<"div"> {
  editor: Editor;
}

export default function FixedMenu({ editor }: FixedMenuProps) {
  const [hidden, setHidden] = useState(false);

  console.log(color);
  
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
        <FixedButton>
          <DropdownMenu
            items={fontFamily}
            icon={<RxFontFamily className="w-5 h-5" />}
          />
        </FixedButton>
        <FixedButton>
          <DropdownMenu
            items={fontSize}
            icon={<RxFontSize className="w-5 h-5" />}
          />
        </FixedButton>
        <FixedButton onClick={() => setHidden(!hidden)}>
          <FaSquare className={`w-5 h-5 text-${color}`} />
          <TextColor hidden={hidden} />
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
