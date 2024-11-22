import React from "react";
import { Logo } from "./logo";
import Link from "next/link";
import { routes } from "@/data/routes";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  pathname: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  toggleSidebar,
  pathname,
}) => {
  return (
    <div
      className={cn(
        "w-full h-full fixed top-0 left-0 bg-white duration-200 ease-linear transition-all overflow-hidden",
        isOpen ? "max-w-full" : "max-w-0"
      )}
    >
      <div className="p-4 flex items-center justify-between gap-4">
        <Logo />
        <button
          onClick={toggleSidebar}
          aria-label="Navigation Toggle Button"
          className="bg-accent p-2 rounded shadow text-white lg:hidden"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      <nav className="flex flex-col gap-4 mt-4 px-2">
        {routes.map(
          ({ href, label }: { href: string; label: string }, index: number) => (
            <Link
              href={href}
              key={index}
              className={cn(
                "p-2 rounded whitespace-nowrap transition duration-300 ease-in-out font-medium",
                pathname === href
                  ? "bg-accent text-white"
                  : "bg-white hover:bg-gray-100 text-primary"
              )}
            >
              {label}
            </Link>
          )
        )}
      </nav>
    </div>
  );
};
