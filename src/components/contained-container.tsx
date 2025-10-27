import { cn } from "@/lib/utils";
import React from "react";

interface ContainedContainerProps {
  className?: string;
  children: React.ReactNode;
}

export const ContainedContainer: React.FC<ContainedContainerProps> = ({
  className,
  children,
}) => {
  return (
    <div className={cn("w-full md:max-w-7xl mx-auto px-4", className)}>
      {children}
    </div>
  );
};
