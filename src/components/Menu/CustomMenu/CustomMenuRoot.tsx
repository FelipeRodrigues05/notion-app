import { ReactNode } from "react";

interface CustomMenuRootProps {
  children: ReactNode;
}

export default function CustomMenuRoot({ children }: CustomMenuRootProps) {
  return (
    <>
      <div className="sticky z-50 bottom-0 flex items-center justify-center bg-gradient-to-b from-zinc-300 via-zinc-300 to-zinc-400 dark:bg-gradient-to-b dark:from-zinc-800 dark:via-zinc-800 dark:to-zinc-900 overflow-x-auto min-w-full sm:max-w-[30rem]">
        {children}
      </div>
    </>
  );
}
