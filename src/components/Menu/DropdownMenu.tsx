import { ReactNode } from "react";
import Dropdown from "react-dropdown";
import { RxChevronDown, RxChevronRight } from "react-icons/rx";
import editor from "../../lib/editor";

interface DropdownMenuProps {
  icon: ReactNode;
  items: DropdownItems;
}

interface DropdownItem {
  label: string;
  value: string;
}

interface DropdownItems extends Array<DropdownItem> {}

export default function DropdownMenu({ icon, items }: DropdownMenuProps) {
  function handleSelect(item: string) {
    // PEGAR O VALOR SELECIONADO
    console.log(item);
    editor.chain().focus().setFontFamily(item).run();
    editor.chain().focus().setFontSize(item).run();
  }

  return (
    <Dropdown
      options={items}
      onChange={(e) => handleSelect(e.value)}
      controlClassName="flex flex-row items-center text-sm leading-none"
      menuClassName="absolute flex flex-col gap-1.5 p-2 text-sm bg-zinc-900 rounded-b-lg"
      placeholder={<span>{icon}</span>}
      arrowClosed={
        <span>
          <RxChevronDown className="h-5" />
        </span>
      }
      arrowOpen={
        <span>
          <RxChevronRight className="h-5" />
        </span>
      }
    />
  );
}
