import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
}

export default function SectionContainer({
  children,
  className,
  id,
  fullWidth = false,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative",
        !fullWidth && "max-w-[1440px] mx-auto px-5 md:px-16",
        className
      )}
    >
      {children}
    </section>
  );
}
