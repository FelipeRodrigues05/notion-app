import { X } from "@phosphor-icons/react";

interface CustomModalHeaderProps {
  title: string;

  onCloseFunction(): void;
}

export default function CustomModalHeader({
  title,
  onCloseFunction,
}: CustomModalHeaderProps) {
  return (
    <div className="flex flex-row justify-between">
      <p className="text-zinc-600 dark:text-zinc-100 text-2xl leading-none font-medium items-start pointer-events-none">
        {title}
      </p>
      <button onClick={onCloseFunction}>
        <X className="text-zinc-600 dark:text-zinc-100 w-6 h-6 items-end hover:text-red-500 dark:hover:text-red-500 transition-all duration-300" />
      </button>
    </div>
  );
}
