import { ReactNode } from "react";

interface CustomMenuSectionProps {
  children: ReactNode;
}

export default function CustomMenuSection({
  children,
}: CustomMenuSectionProps) {
  return (
    <>
      <div className="flex my-4 lg:mx-2 md:mx-1.5 sm:mx-1">{children}</div>
    </>
  );
}
