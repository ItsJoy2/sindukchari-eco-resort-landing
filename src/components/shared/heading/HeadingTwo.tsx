import { cn } from "@/lib/utils";

export default function HeadingTwo({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <h6
      className={cn(
        "font-semibold md:text-[28px] text-[24px] leading-8",
        className
      )}
    >
      {text}
    </h6>
  );
}
