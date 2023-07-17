import { CompactPicker } from "react-color";
import editor from "../../lib/editor";

interface HighlightMenuProps {
  hidden: boolean;
}

export default function HighlightColor(props: HighlightMenuProps) {
  function handleChange(colorHex: any) {
    editor.chain().focus().toggleHighlight({ color: colorHex }).run();
  }

  return props.hidden ? (
    <CompactPicker
      onChangeComplete={(e) => handleChange(e.hex)}
      className="absolute bg-zinc-900 top-4 -left-5 p-2 text-zinc-200 rounded-b-md drop-shadow-md shadow-black/30"
    />
  ) : (
    <></>
  );
}
