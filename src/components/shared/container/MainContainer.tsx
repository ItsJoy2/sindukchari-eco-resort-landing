import { cn } from "@/lib/utils";

const MainContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "w-full mx-auto px-3 lg:px-4 md:max-w-270 lg:max-w-310 xl:max-w-360",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MainContainer;
