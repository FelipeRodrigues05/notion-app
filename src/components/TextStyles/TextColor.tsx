import { CompactPicker } from "react-color";
import editor from "../../lib/editor";

interface TextColorPickerProps {
  hidden: boolean;
}

let color = "";
export default function TextColor(props: TextColorPickerProps) {
  function handleChange(colorHex: any) {
    color = colorHex;    
    editor.chain().focus().setColor(colorHex).run();
  }

  return props.hidden ? (
    <CompactPicker
      onChange={(e) => handleChange(e.hex)}
      className="absolute bg-zinc-900 top-4 -left-5 p-1 text-zinc-200 rounded-b-md drop-shadow-md shadow-black/30"
    />
  ) : (
    <></>
  );
}

export { color };
