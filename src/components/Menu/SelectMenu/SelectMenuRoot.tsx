import { Menu, MenuItem } from "@mui/material";
import { ElementType, MouseEvent, useState } from "react";
import { editor } from "../../../lib/editor";

interface SelectMenuRootProps {
  icon: ElementType;
  itemList: ItemListProps;
}

interface ItemProps {
  value: string;
  label: string;
  key: number;
}

interface ItemListProps extends Array<ItemProps> {}

export default function SelectMenuRoot({
  itemList,
  icon: Icon,
}: SelectMenuRootProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  function handleClick(event: MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleChange(item: any) {
    editor.chain().focus().setFontFamily(item).run();
    editor.chain().focus().setFontSize(item).run();
  }

  return (
    <>
      <button
        onClick={handleClick}
        className="p-1 text-md dark:text-zinc-50 text-zinc-700 brightness-50 flex items-center gap-1.5 font-medium leading-none hover:brightness-150 transition duration-300 ease-linear"
      >
        <Icon className="lg:w-7 lg:h-7 md:w-6 md:h-6 sm:w-5 sm:h-5 text-md leading-normal font-medium" />
      </button>
      <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
        {itemList.map((item) => (
          <MenuItem
            value={item.value}
            key={item.key}
            data-value={item.value}
            onClick={(e) => handleChange(e.currentTarget.dataset.value)}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
