import { ComponentProps, ReactNode } from "react";

interface BubbleButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
}

export default function BubbleButton(props: BubbleButtonProps) {
  return (
    <>
      <button className="p-2 text-sm text-zinc-300 flex items-center gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600">
        {props.children}
      </button>
    </>
  );
}
