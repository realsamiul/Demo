import { List, Mic, Plus } from "lucide-react";
import { Fab } from "../components/Fab";

export function SimpleAssetsScreen() {
  return (
    <div className="relative w-full h-full flex flex-col bg-[#020203]">
      <div className="pt-20 flex flex-col items-center justify-center relative z-10">
        <h1 className="text-3xl font-light text-[#fcfcfd] tracking-tight mb-2">
          $24,456,987
        </h1>
        <p className="text-[#707785] text-sm flex items-center gap-1">
          56 assets <span className="text-xs">&gt;</span>
        </p>
      </div>
      
      {/* Background Gradient matching image 3 (very dark to slightly lighter grey bottom) */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gray-300/30 via-gray-600/10 to-transparent pointer-events-none rounded-b-[52px]"></div>

      {/* FAB Row */}
      <div className="absolute bottom-12 left-0 right-0 flex justify-center items-center gap-8 z-20">
        <button className="text-[#fcfcfd] opacity-70 hover:opacity-100 transition-opacity">
          <Plus className="w-6 h-6 font-light" />
        </button>
        <Fab 
          icon={<Mic className="w-5 h-5 text-black" />} 
          className="w-20 h-12 rounded-full px-4"
        />
        <button className="text-[#fcfcfd] opacity-70 hover:opacity-100 transition-opacity">
          <List className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
