import { cn } from "@/lib/utils";
import React from "react";

export function TypographyP({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void
}) {
  return (
    <p
      className={cn("leading-6 [&:not(:first-child)]:mt-2", className)}
      onClick={onClick}>
      {children}
    </p>
  );
}

