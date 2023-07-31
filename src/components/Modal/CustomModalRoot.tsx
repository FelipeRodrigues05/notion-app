import { Box, Modal } from "@mui/material";
import { ReactNode } from "react";
import { VariantProps, tv } from "tailwind-variants";

const box = tv({
  base: "absolute bg-zinc-400 dark:bg-zinc-800 p-6 rounded-lg outline-none shadow-black/20 md:left-[20%] sm:left-[25%] sm:w-[25rem] top-[30%] lg:left-[35%]",
  variants: {
    size: {
      default: "lg:w-[45rem] lg:h-[20rem] md:w-[40rem] md:h-[20rem]",
      sm: "lg:w-[30rem] lg:h-[11rem] md:w-[30rem] md:h-[15rem] ",
      xs: "lg:w-[15rem] lg:h-[9rem] md:w-[20rem] md:h-[10rem] ",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface CustomModalRootProps extends VariantProps<typeof box> {
  children: ReactNode;

  open: boolean;
  onCloseFunction(): any;
}

export default function CustomModalRoot({
  children,
  onCloseFunction,
  open,
  size,
}: CustomModalRootProps) {
  return (
    <Modal open={open} onClose={onCloseFunction}>
      <Box className={box({ size })}>{children}</Box>
    </Modal>
  );
}
