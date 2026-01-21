import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <div
      className={`from-[#D8B4FE] via-[#D586DC] to-[#93C5FD] bg-gradient-to-r bg-clip-text text-transparent p-4 ${className}`}
    >
      {children}
    </div>
  );
}
