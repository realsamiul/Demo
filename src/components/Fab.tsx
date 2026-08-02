import { ReactNode } from "react";
import { cn } from "../lib/utils";

interface FabProps {
  icon: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Fab({ icon, className, onClick }: FabProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "bg-[#fcfcfd] rounded-full flex items-center justify-center text-black shadow-lg hover:bg-gray-100 transition-colors",
        className
      )}
    >
      {icon}
    </button>
  );
}
