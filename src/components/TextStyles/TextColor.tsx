import { CompactPicker } from "react-color";
import editor from "../../lib/editor";

interface TextColorPickerProps {
  hidden: boolean;
}

export default function TextColor(props: TextColorPickerProps) {
  function handleChange(colorHex: any) {
    editor.chain().focus().setColor(colorHex).run();
  }

  return props.hidden ? (
    <CompactPicker
      onChangeComplete={(e) => handleChange(e.hex)}
      className="absolute p-2 bg-zinc-900 top-4 -left-5 text-zinc-200 rounded-b-md drop-shadow-md shadow-black/30"
    />
  ) : (
    <></>
  );
}
