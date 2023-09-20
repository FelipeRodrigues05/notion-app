import { ComponentProps, ElementType } from "react";

interface CustomMenuButtonProps extends ComponentProps<"button"> {
  icon: ElementType;
}

export default function CustomMenuButton(props: CustomMenuButtonProps) {
  return (
    <>
      <button
        className="p-1 text-md dark:text-zinc-50 text-zinc-700 brightness-50 flex items-center gap-1.5 font-medium leading-none hover:brightness-150 transition duration-300 ease-linear"
        {...props}
      >
        {
          <props.icon className="lg:w-7 lg:h-7 md:w-6 md:h-6 sm:w-6 sm:h-6 text-md leading-normal font-medium" />
        }
      </button>
    </>
  );
}
