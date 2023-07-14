import { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
}

export function BubbleButton(props: ButtonProps) {
  return (
    <>
      <button
        className="p-2 text-sm text-zinc-300 flex items-center gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600"
        {...props}
      />
    </>
  );
}

export function FixedButton(props: ButtonProps) {
  return (
    <>
      <button
        className="p-1 text-md text-zinc-300 flex items-center gap-1.5 font-medium leading-none hover:text-zinc-50"
        {...props}
      />
    </>
  );
}
