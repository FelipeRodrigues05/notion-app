import { ReactNode } from "react";

interface CustomModalBodyProps {
  children: ReactNode;
}

export default function CustomModalBody({ children }: CustomModalBodyProps) {
  return <div className="flex flex-col px-3">{children}</div>;
}
