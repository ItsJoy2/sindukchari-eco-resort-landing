import { cn } from "@/lib/utils";

export default function HeadingOne({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <h6
      className={cn(
        "md:text-[56px] text-[34px] md:leading-14.25",
        className
      )}
    >
      {text}
    </h6>
  );
}
