import { ComponentProps, ElementType } from "react";

interface BubbleMenuButtonProps extends ComponentProps<"button"> {
  icon: ElementType;
}

export default function BubbleMenuButton(props: BubbleMenuButtonProps) {
  return (
    <>
      <button
        className="p-2 text-sm text-zinc-300 flex items-center gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600"
        {...props}
      >
        <props.icon className="w-4 h-4" />
      </button>
    </>
  );
}
