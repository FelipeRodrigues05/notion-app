import { useState } from "react";
import { AiOutlineRedo, AiOutlineUndo } from "react-icons/ai";
import { BiFontColor } from "react-icons/bi";
import { GoListOrdered } from "react-icons/go";
import {
  RxDividerVertical,
  RxFontFamily,
  RxFontSize,
  RxListBullet,
  RxTextAlignCenter,
  RxTextAlignJustify,
  RxTextAlignLeft,
  RxTextAlignRight,
} from "react-icons/rx";

import editor from "../../lib/editor";
import { FixedButton } from "../Button";
import { fontFamily } from "../TextStyles/FontFamily";
import { fontSize } from "../TextStyles/FontSize";
import TextColor from "../TextStyles/TextColor";
import DropdownMenu from "./DropdownMenu";

export default function FixedMenu() {
  const [hiddenText, setHiddenText] = useState(false);

  return (
    <div className="sticky top-0 z-10 flex flex-row items-center justify-center max-w-full px-3 mt-2 prose prose-invert rounded-2xl bg-zinc-500 dark:bg-zinc-900">
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
        <FixedButton onClick={() => setHiddenText(!hiddenText)}>
          <BiFontColor className={`w-5 h-5`} />
          <TextColor hidden={hiddenText} />
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

      <RxDividerVertical />

      <div className="flex">
        <FixedButton onClick={() => editor.chain().focus().undo().run()}>
          <AiOutlineUndo className="w-5 h-5" />
        </FixedButton>
        <FixedButton onClick={() => editor.chain().focus().redo().run()}>
          <AiOutlineRedo className="w-5 h-5" />
        </FixedButton>
      </div>
    </div>
  );
}
