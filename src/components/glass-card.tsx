import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`bg-white/10 rounded-3xl drop-shadow-2xl shadow-2xl backdrop-blur-lg border border-white/20 ${className}`}
    >
      {children}
    </div>
  );
}
