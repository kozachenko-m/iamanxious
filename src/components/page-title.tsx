import { ReactNode } from "react";
import { GradientText } from "./gradient-text";

interface PageTitleProps {
  children: ReactNode;
}

export function PageTitle({ children }: PageTitleProps) {
  return (
    <h1 className="text-3xl md:text-7xl text-left font-bold">
      <GradientText>{children}</GradientText>
    </h1>
  );
}
