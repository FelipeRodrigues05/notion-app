import {
  ArrowClockwise,
  ArrowCounterClockwise,
  Broom,
  CodeSimple,
  FloppyDisk,
  ListChecks,
  ListDashes,
  ListNumbers,
  TextAlignCenter,
  TextAlignJustify,
  TextAlignLeft,
  TextAlignRight,
  TextBolder,
  TextItalic,
  TextStrikethrough,
  UploadSimple,
} from "@phosphor-icons/react";
import { saveAs } from "file-saver";
import { useRef, useState } from "react";
import {
  BiFontColor,
  BiFontFamily,
  BiFontSize,
  BiHighlight,
} from "react-icons/bi";
import { editor } from "../lib/editor";
import { fontsFamily, fontsSize } from "../plugins/TextStyles";
import { Menu } from "./Menu/CustomMenu";
import { SelectMenu } from "./Menu/SelectMenu";
import { CustomModal } from "./Modal";

export default function StylingMenu() {
  const inputFile = useRef<HTMLInputElement | null>(null);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [fileName, setFileName] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(true);

  function handleSaveFile() {
    if (!(fileName == "")) {
      let content = editor.storage.markdown.getMarkdown();
      let file = new File([content], `${fileName}.md`);
      saveAs(file);

      setFileName("");
      setShowSaveModal(false);
      setShowErrorMessage(true);
    } else {
      setShowErrorMessage(false);
    }
  }

  function handleLoadFile() {
    inputFile.current?.click();
  }

  function handleFileChange(event: any) {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (evt: any) => {
      editor.commands.setContent(evt.target.result);
    };

    reader.readAsText(file);
  }

  return (
    <>
      <Menu.Root>
        <Menu.Section>
          <Menu.Button
            icon={TextBolder}
            onClick={() => editor.chain().focus().toggleBold().run()}
          />
          <Menu.Button
            icon={TextItalic}
            onClick={() => editor.chain().focus().toggleItalic().run()}
          />
          <Menu.Button
            icon={TextStrikethrough}
            onClick={() => editor.chain().focus().toggleStrike().run()}
          />
          <Menu.Button
            icon={CodeSimple}
            onClick={() => editor.chain().focus().toggleCode().run()}
          />
        </Menu.Section>

        {/* DROPDOWNS */}
        <Menu.Section>
          <SelectMenu.Root icon={BiFontFamily} itemList={fontsFamily} />

          <SelectMenu.Root icon={BiFontSize} itemList={fontsSize} />

          <SelectMenu.Color icon={BiFontColor}></SelectMenu.Color>
          <Menu.Button
            icon={BiHighlight}
            onClick={() => editor.chain().focus().toggleHighlight().run()}
          />
        </Menu.Section>

        <Menu.Section>
          <Menu.Button
            icon={TextAlignLeft}
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
          />
          <Menu.Button
            icon={TextAlignCenter}
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
          />
          <Menu.Button
            icon={TextAlignJustify}
            onClick={() => editor.chain().focus().setTextAlign("justify").run()}
          />
          <Menu.Button
            icon={TextAlignRight}
            onClick={() => editor.chain().focus().setTextAlign("right").run()}
          />
        </Menu.Section>

        <Menu.Section>
          <Menu.Button
            icon={ListDashes}
            onClick={() => editor.chain().focus().toggleBulletList().run()}
          />
          <Menu.Button
            icon={ListNumbers}
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
          />
          <Menu.Button icon={ListChecks} />
        </Menu.Section>

        <Menu.Section>
          <Menu.Button
            icon={ArrowCounterClockwise}
            onClick={() => editor.chain().undo().run()}
          />
          <Menu.Button
            icon={ArrowClockwise}
            onClick={() => editor.chain().redo().run()}
          />
        </Menu.Section>
        <Menu.Section>
          <Menu.Button
            icon={FloppyDisk}
            onClick={() => setShowSaveModal(true)}
          />
          <Menu.Button icon={UploadSimple} onClick={() => handleLoadFile()} />
          <input
            type="file"
            ref={inputFile}
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </Menu.Section>
        <Menu.Section>
          <Menu.Button
            icon={Broom}
            onClick={() => editor.commands.setContent("")}
          />
        </Menu.Section>
      </Menu.Root>

      <CustomModal.Root
        size="sm"
        open={showSaveModal}
        onCloseFunction={() => setShowSaveModal(!showSaveModal)}
      >
        <CustomModal.Header
          onCloseFunction={() => setShowSaveModal(!showSaveModal)}
          title="Save File"
        />
        <hr className="my-3 border border-zinc-500 dark:border-zinc-900" />

        <CustomModal.Body>
          <input
            required
            type="text"
            placeholder="File Name"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            className="p-2 bg-zinc-300 dark:bg-zinc-900 min-w-full text-zinc-800 dark:text-zinc-400 outline-none rounded-md text-sm"
          />
          <span className="text-xs text-red-600" hidden={showErrorMessage}>
            Filename is required
          </span>
          <button
            onClick={() => handleSaveFile()}
            className="text-zinc-400 bg-zinc-300 dark:bg-zinc-700 rounded-md py-1 text-sm hover:bg-zinc-500 dark:hover:bg-zinc-900 hover:text-zinc-300 transition-all duration-300 mt-2"
          >
            Save
          </button>
        </CustomModal.Body>
      </CustomModal.Root>
    </>
  );
}
