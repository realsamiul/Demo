import { BarChart2, Grip, Layers } from "lucide-react";
import { cn } from "../lib/utils";

interface TopNavProps {
  className?: string;
}

export function TopNav({ className }: TopNavProps) {
  return (
    <div className={cn("flex justify-center items-center gap-6 pt-12 pb-6 text-gray-500", className)}>
      <Layers className="w-5 h-5 opacity-70" />
      <Grip className="w-5 h-5 opacity-70" />
      <BarChart2 className="w-5 h-5 opacity-70" />
    </div>
  );
}
