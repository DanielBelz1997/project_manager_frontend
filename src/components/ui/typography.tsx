import { cn } from "@/lib/utils";

export function TypographyP({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p className={cn("leading-6 [&:not(:first-child)]:mt-2", className)}>
      {children}
    </p>
  );
}
