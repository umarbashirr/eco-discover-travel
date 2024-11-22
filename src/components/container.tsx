import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  className,
  children,
}) => {
  return (
    <div className={cn("w-full md:max-w-[95%] mx-auto px-4", className)}>
      {children}
    </div>
  );
};
