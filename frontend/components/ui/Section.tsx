import { cn } from "@/utils/cn";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
  noPadding?: boolean;
}

export default function Section({
  children,
  className,
  id,
  dark = false,
  noPadding = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full",
        !noPadding && "py-20 md:py-28 lg:py-32",
        dark ? "bg-dark text-white" : "bg-background",
        className
      )}
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-8">{children}</div>
    </section>
  );
}
